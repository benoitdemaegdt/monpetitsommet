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
  name: 'TrekAltitudeChart',
  async setup() {
    const { getTrekData } = useTrekData()
    const { altitudeData, pointsOfInterest } = await getTrekData()

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
        annotations: [
          {
            draggable: false,
            labels: pointsOfInterest.map((pointOfInterest) => ({
              point: {
                xAxis: 0,
                yAxis: 0,
                x: pointOfInterest.distance,
                y: pointOfInterest.elevation,
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
            lineColor: '#4b5563', // gray-600
            color: '#34d399', // emerald-400
            fillOpacity: 0.5,
            name: 'Altitude',
            marker: { enabled: false },
            threshold: null,
          },
        ],
      },
    }
  },
}
</script>
