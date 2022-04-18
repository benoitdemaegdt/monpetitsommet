<template>
  <LMap style="height: 40vh" :zoom="zoom" :center="center">
    <LTileLayer :url="url"></LTileLayer>
    <LGeoJson :geojson="geojson" :options="geojsonOptions" />
  </LMap>
</template>

<script>
import { LMap, LGeoJson, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  name: 'RefugeMap',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  async setup() {
    const geojson = ref({})
    const geojsonOptions = ref({
      onEachFeature: (feature, layer) => {
        if (feature.geometry.type === 'Point') {
          layer.bindPopup(feature.properties.name)
        }
      },
    })
    const { path } = useRoute()

    onBeforeMount(async () => {
      // vue-leaflet requires this async import
      const { icon, marker } = await import('leaflet/dist/leaflet-src.esm')
      geojsonOptions.value.pointToLayer = (feature, latLng) => {
        const customIcon = new icon({
          iconSize: [25, 25],
          popupAnchor: [1, -24],
          iconUrl: feature.properties.icon,
        })
        return marker(latLng, { icon: customIcon })
      }
    })

    const { getGeojson, getCoordinates } = useRefugeData()

    geojson.value = await getGeojson(path)

    return {
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      geojson: geojson.value,
      geojsonOptions,
      center: getCoordinates(geojson.value).slice(0, 2).reverse(),
      zoom: 11,
    }
  },
}
</script>
