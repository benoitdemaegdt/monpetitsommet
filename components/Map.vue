<template>
  <div ref="mapId" style="height: 40vh"></div>
</template>

<script setup>
const config = useRuntimeConfig()
const { zoomToZoneOfInterest } = useGeojson()
const { tentIcon } = useIcons()

const { geojson } = defineProps({
  geojson: { type: Object, required: true },
})

const mapId = ref(null)
let myMap
onMounted(async () => {
  const { map, tileLayer, geoJSON, icon, marker, circleMarker, control } = await import(
    'leaflet/dist/leaflet-src.esm'
  )
  const { enableFullcreenFeature } = useMap()
  await enableFullcreenFeature()

  const layers = {
    'Open topo map': tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {}),
    ign: tileLayer(
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
  }

  // create map
  myMap = map(mapId.value, {
    layers: Object.values(layers),
    fullscreenControl: true,
    scrollWheelZoom: false,
  })

  // zoom map to zone of interest
  zoomToZoneOfInterest(myMap, geojson)

  // add control layer
  control.layers(layers).addTo(myMap)

  // add geojson layer
  geoJSON(geojson, {
    style: function (feature) {
      if (feature.geometry.type === 'LineString') {
        return { color: '#D81B60' }
      }
    },
    onEachFeature: (feature, layer) => {
      if (feature.geometry.type === 'Point') {
        layer.bindPopup(feature.properties.name)
      }
    },
    pointToLayer: (feature, latLng) => {
      if (!!feature.properties.icon) {
        const customIcon = new icon({
          iconSize: [25, 25],
          popupAnchor: [1, -24],
          iconUrl: feature.properties.icon,
        })
        return marker(latLng, { icon: customIcon })
      } else if (feature.properties.marker === 'circle') {
        return circleMarker(latLng, {
          radius: 6,
          weight: 1,
          color: feature.properties.color,
          fill: true,
          fillColor: feature.properties.fillColor,
          fillOpacity: 0.9,
        })
      }
    },
  }).addTo(myMap)

  // fix problem happening when changing page
  setTimeout(() => myMap.invalidateSize(), 100)
})

onBeforeUnmount(() => {
  myMap.remove()
})
</script>
