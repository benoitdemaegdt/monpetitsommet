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
    const altitudeData = await getTrekData()

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
        // annotations: [
        //   {
        //     draggable: '',
        //     labelOptions: {
        //       backgroundColor: 'rgba(255,255,255,0.5)',
        //       verticalAlign: 'top',
        //       y: 15,
        //     },
        //   },
        //   {
        //     draggable: '',
        //     labels: [
        //       {
        //         point: {
        //           xAxis: 0,
        //           yAxis: 0,
        //           x: 101.44,
        //           y: 1026,
        //         },
        //         x: -30,
        //         text: 'Col de la Joux',
        //       },
        //       {
        //         point: {
        //           xAxis: 0,
        //           yAxis: 0,
        //           x: 138.5,
        //           y: 748,
        //         },
        //         text: 'Côte de Viry',
        //       },
        //       {
        //         point: {
        //           xAxis: 0,
        //           yAxis: 0,
        //           x: 176.4,
        //           y: 1202,
        //         },
        //         text: 'Montée de la Combe <br>de Laisia Les Molunes',
        //       },
        //     ],
        //   },
        //   {
        //     draggable: '',
        //     labelOptions: {
        //       shape: 'connector',
        //       align: 'right',
        //       justify: false,
        //       crop: true,
        //       style: {
        //         fontSize: '0.8em',
        //         textOutline: '1px white',
        //       },
        //     },
        //   },
        // ],
        xAxis: {
          labels: { format: '{value} km' },
          minRange: 5,
          title: { text: 'Distance' },
          accessibility: { rangeDescription: 'Range: 0 to 187.8km.' },
        },
        yAxis: {
          startOnTick: true,
          endOnTick: false,
          maxPadding: 0.35,
          title: { text: 'Altitude' },
          labels: { format: '{value} m' },
          accessibility: {
            description: 'Altitude',
            rangeDescription: 'Range: 0 to 1,553 meters',
          },
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
            lineColor: Highcharts.getOptions().colors[1],
            color: Highcharts.getOptions().colors[2],
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
