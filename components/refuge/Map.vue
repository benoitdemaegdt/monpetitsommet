<template>
  <LMap style="height: 40vh" :zoom="zoom" :center="center" :options="options">
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

    return {
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
