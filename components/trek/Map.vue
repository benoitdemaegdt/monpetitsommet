<template>
  <LMap style="height: 40vh" @ready="onMapReady" :bounds="bounds">
    <LTileLayer :url="url"></LTileLayer>
    <LGeoJson :geojson="geojson" />
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
  </LMap>
</template>

<script>
import {
  LMap,
  LGeoJson,
  LTileLayer,
  LCircleMarker,
} from '@vue-leaflet/vue-leaflet'

export default {
  name: 'TrekMap',
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
    LCircleMarker,
  },
  props: ['geojson'],
  async setup(props) {
    const bounds = ref(null)
    const { getBounds } = useTrekData()
    const { firstCoordinate, lastCoordinate } = getBounds(props.geojson)

    const onMapReady = async () => {
      bounds.value = [firstCoordinate, lastCoordinate]
    }

    return {
      onMapReady,
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      geojson: props.geojson,
      firstCoordinate,
      lastCoordinate,
      bounds,
    }
  },
}
</script>
