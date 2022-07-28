<template>
  <div ref="mapId" style="height: 40vh"></div>
</template>

<script setup>
const config = useRuntimeConfig()

const { geojson } = defineProps({
  geojson: { type: Object, required: true },
})
const mapId = ref(null)

const { getBounds } = useTrekData()
const { firstCoordinate, lastCoordinate } = getBounds(geojson)

let myMap

onMounted(async () => {
  const { map, tileLayer, geoJSON, icon, marker, circleMarker } = await import(
    'leaflet/dist/leaflet-src.esm'
  )

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
    scrollWheelZoom: false,
  })

  // zoom map to zone of interest
  myMap.fitBounds([firstCoordinate, lastCoordinate], { padding: [40, 40] })

  // add geojson line (path)
  geoJSON(geojson, {
    style: () => ({ color: '#D81B60' }),
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

  // add circle marker for start and end of trek
  circleMarker(firstCoordinate, {
    radius: 6,
    weight: 1,
    color: '#334155',
    fill: true,
    fillColor: '#10b981',
    fillOpacity: 0.9,
  }).addTo(myMap)

  circleMarker(lastCoordinate, {
    radius: 6,
    weight: 1,
    color: '#334155',
    fill: true,
    fillColor: '#ef4444',
    fillOpacity: 0.9,
  }).addTo(myMap)

  // fix problem happening when changing page
  setTimeout(() => myMap.invalidateSize(), 100)
})

onBeforeUnmount(() => {
  myMap.remove()
})
</script>
