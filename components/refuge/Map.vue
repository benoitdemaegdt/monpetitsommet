<template>
  <LMap
    ref="map"
    style="height: 40vh"
    @ready="onMapReady"
    :center="center"
    :zoom="zoom"
    :options="options"
  >
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
  props: ['refuges'],
  async setup(props) {
    const map = ref(null)
    const { getCoordinates } = useRefugeData()

    const geojson = {
      type: 'FeatureCollection',
      features: props.refuges.map((refuge) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [refuge.longitude, refuge.latitude],
        },
        properties: {
          name: refuge.name,
          icon: '/icons/refuge.png',
        },
      })),
    }

    const geojsonOptions = ref({
      onEachFeature: (feature, layer) => {
        if (feature.geometry.type === 'Point') {
          layer.bindPopup(feature.properties.name)
        }
      },
    })

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

    const onMapReady = async () => {
      if (props.refuges.length > 2) {
        map.value.leafletObject.fitBounds(
          props.refuges.map((refuge) => [refuge.latitude, refuge.longitude])
        )
      }
    }

    return {
      map,
      onMapReady,
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      geojson: geojson,
      geojsonOptions,
      center: getCoordinates(geojson).slice(0, 2).reverse(),
      zoom: 11,
      options: { scrollWheelZoom: false },
    }
  },
}
</script>
