<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script setup>
// composant pour des treks de plusieurs jours
// on peut afficher une seule LineString alors que le fichier en a plusieurs
const { index, path, title } = defineProps({ index: Number, path: String, title: String })

const { data: geojson } = await useAsyncData(`geojson-3-jours-refuge-des-drayeres`, () => {
  return queryContent()
    .where({ _type: 'json', _path: { $contains: '3-jours-refuge-des-drayeres' } })
    .findOne()
})

const { features } = geojson.value
const lineStrings = features.filter(({ geometry }) => geometry.type === 'LineString')
const lineString = lineStrings[index]
const coordinates = lineString.geometry.coordinates
const altitudeData = coordinates.map(([_long, _lat, alt, dist]) => [ dist, Math.round(alt) ])

const chartOptions = {
  chart: {
    type: 'area',
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    scrollablePlotArea: { minWidth: 600 },
  },
  title: { text: `Profil altimétrique - ${title}` },
  credits: { enabled: false },
  accessibility: { enabled: false },
  xAxis: {
    labels: { format: '{value} km' },
    minRange: 5,
    title: { text: 'Distance' },
  },
  yAxis: {
    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: { text: 'Altitude' },
    labels: { format: '{value} m' },
  },
  tooltip: {
    headerFormat: 'Distance: {point.x:.1f} km<br>',
    pointFormat: 'Altitude: {point.y} m',
    shared: true,
  },
  legend: { enabled: false },
  series: [
    {
      data: altitudeData,
      lineColor: '#059669', // emerald-600
      color: '#d1fae5', // emerald-100
      fillOpacity: 0.5,
      name: 'Altitude',
      marker: { enabled: false },
      threshold: null,
    },
  ],
}
</script>
