<template>
  <div ref="mapId" style="height: 40vh"></div>
</template>

<script setup>
const config = useRuntimeConfig()

const { refuges } = defineProps({
  refuges: { type: Array, required: true },
})
const mapId = ref(null)

const { getCoordinates } = useRefugeData()

const geojson = {
  type: 'FeatureCollection',
  features: refuges.map((refuge) => ({
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

let myMap

onMounted(async () => {
  const { map, tileLayer, geoJSON, icon, marker } = await import('leaflet/dist/leaflet-src.esm')
  const { enableFullcreenFeature } = useMap()
  await enableFullcreenFeature()
  // create map
  myMap = map(mapId.value, {
    layers: [
      // tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {})
      tileLayer(
        'https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?' +
          '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM' +
          '&LAYER={ignLayer}&STYLE={style}&FORMAT={format}' +
          '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}',
        {
          ignApiKey: config.public.ignApiKey,
          ignLayer: 'GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR',
          style: 'normal',
          format: 'image/jpeg',
          service: 'WMTS',
        }
      ),
    ],
    fullscreenControl: true,
    scrollWheelZoom: false,
  })

  // zoom map to zone of interest
  if (refuges.length > 2) {
    myMap.fitBounds(refuges.map((refuge) => [refuge.latitude, refuge.longitude]))
  } else {
    myMap.setView(getCoordinates(geojson).slice(0, 2).reverse(), 11)
  }

  // add geojson layer
  geoJSON(geojson, {
    onEachFeature: (feature, layer) => {
      if (feature.geometry.type === 'Point') {
        layer.bindPopup(feature.properties.name)
      }
    },
    pointToLayer: (feature, latLng) => {
      const customIcon = new icon({
        iconSize: [25, 25],
        popupAnchor: [1, -24],
        iconUrl: feature.properties.icon,
      })
      return marker(latLng, { icon: customIcon })
    },
  }).addTo(myMap)

  // fix problem happening when changing page
  setTimeout(() => myMap.invalidateSize(), 100)
})

onBeforeUnmount(() => {
  myMap.remove()
})
</script>
