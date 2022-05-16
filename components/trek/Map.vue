<template>
  <div>hey</div>
  <!-- <LMap
    style="height: 40vh"
    @ready="onMapReady"
    :bounds="bounds"
    :options="options"
  >
    <LTileLayer :url="url"></LTileLayer>
    <LGeoJson :geojson="geojson" :options="geojsonOptions" />
    <LCircleMarker
      :lat-lng="firstCoordinate"
      :radius="6"
      color="#334155"
      :weight="1"
      :fill="true"
      fillColor="#10b981"
      :fillOpacity="0.9"
    />
    <LCircleMarker
      :lat-lng="lastCoordinate"
      :radius="6"
      color="#334155"
      :weight="1"
      :fill="true"
      fillColor="#ef4444"
      :fillOpacity="0.9"
    />
  </LMap> -->
</template>

<script>
// import {
//   LMap,
//   LGeoJson,
//   LTileLayer,
//   LCircleMarker,
// } from '@vue-leaflet/vue-leaflet'

// export default {
//   name: 'TrekMap',
//   components: {
//     LMap,
//     LTileLayer,
//     LGeoJson,
//     LCircleMarker,
//   },
//   props: ['geojson'],
//   async setup(props) {
//     const bounds = ref(null)
//     const { getBounds } = useTrekData()
//     const { firstCoordinate, lastCoordinate } = getBounds(props.geojson)
//     const geojsonOptions = ref({
//       style: () => ({
//         color: '#D81B60',
//       }),
//       onEachFeature: (feature, layer) => {
//         if (feature.geometry.type === 'Point') {
//           layer.bindPopup(feature.properties.name)
//         }
//       },
//     })

//     const onMapReady = async () => {
//       bounds.value = [firstCoordinate, lastCoordinate]
//     }

//     onBeforeMount(async () => {
//       // vue-leaflet requires this async import
//       const { icon, marker } = await import('leaflet/dist/leaflet-src.esm')
//       geojsonOptions.value.pointToLayer = (feature, latLng) => {
//         const customIcon = new icon({
//           iconSize: [25, 25],
//           popupAnchor: [1, -24],
//           iconUrl: feature.properties.icon,
//         })
//         return marker(latLng, { icon: customIcon })
//       }
//     })

//     return {
//       onMapReady,
//       url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
//       geojson: props.geojson,
//       firstCoordinate,
//       lastCoordinate,
//       bounds,
//       geojsonOptions,
//       options: { scrollWheelZoom: false },
//     }
//   },
// }
</script>
