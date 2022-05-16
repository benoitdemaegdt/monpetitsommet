<template>
  <div id="map" style="height: 40vh">hey</div>
  <!-- <LMap style="height: 40vh" :zoom="zoom" :center="center" :options="options">
    <LTileLayer :url="url"></LTileLayer>
    <LGeoJson :geojson="geojson" :options="geojsonOptions" />
  </LMap> -->
</template>

<script>
export default {
  name: 'RefugeMap',
  setup() {
    onMounted(async () => {
      const { Map, TileLayer, Marker } = await import(
        'leaflet/dist/leaflet-src.esm'
      )
      const map = Map('map').setView([51.505, -0.09], 13)

      TileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      Marker([51.5, -0.09])
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup()
    })
  },
}
// import { LMap, LGeoJson, LTileLayer } from '@vue-leaflet/vue-leaflet'

// export default {
//   name: 'RefugeMap',
//   components: {
//     LMap,
//     LTileLayer,
//     LGeoJson,
//   },
//   async setup() {
//     const { getGeojson, getCoordinates } = useRefugeData()
//     const { path } = useRoute()

//     const geojsonOptions = ref({
//       onEachFeature: (feature, layer) => {
//         if (feature.geometry.type === 'Point') {
//           layer.bindPopup(feature.properties.name)
//         }
//       },
//     })

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

//     const geojson = await getGeojson(path)

//     return {
//       url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
//       geojson: geojson,
//       geojsonOptions,
//       center: getCoordinates(geojson).slice(0, 2).reverse(),
//       zoom: 11,
//       options: { scrollWheelZoom: false },
//     }
//   },
// }
</script>
