<template>
  <LMap style="height: 40vh" @ready="onMapReady" :bounds="bounds">
    <LTileLayer :url="url"></LTileLayer>
    <LGeoJson :geojson="geojson" />
  </LMap>
</template>

<script>
import { LMap, LGeoJson, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
  name: 'TrekMap',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  async setup() {
    const bounds = ref(null)
    const { getGeojson, getBounds } = useTrekData()
    const geojson = await getGeojson()
    const { firstCoordinate, lastCoordinate } = getBounds(geojson)

    const onMapReady = async () => {
      bounds.value = [firstCoordinate, lastCoordinate]
    }

    return {
      onMapReady,
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      geojson,
      bounds,
    }
  },
}
</script>
