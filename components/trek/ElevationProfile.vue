<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from 'highcharts'
import Annotation from 'highcharts/modules/annotations'
if (process.client) {
  Annotation(Highcharts)
}

export default {
  name: 'TrekElevationProfile',
  props: ['geojson', 'id'],
  async setup(props) {
    const { getTrekData } = useTrekData()
    const { altitudeData, pointsOfInterest } = getTrekData(props.geojson)
    const position = useState('position')
    return {
      chartOptions: {
        chart: {
          type: 'area',
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          scrollablePlotArea: { minWidth: 600 },
        },
        title: { text: 'Profil altimétrique' },
        credits: { enabled: false },
        accessibility: { enabled: false },
        annotations: [
          {
            draggable: false,
            labels: pointsOfInterest.map((pointOfInterest) => ({
              point: {
                xAxis: 0,
                yAxis: 0,
                x: pointOfInterest.distance,
                y: pointOfInterest.altitude,
              },
              text: pointOfInterest.name,
            })),
          },
        ],
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
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: (event) => {
                  const { x, y } = event.target
                  position.value = { id: props.id, x, y }
                },
              },
            },
            events: {
              mouseOut: () => {
                position.value = { id: props.id, x: undefined, y: undefined }
              },
            },
          },
        },
      },
    }
  },
}
</script>
