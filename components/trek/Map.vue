<template>
  <div id="mapId" style="height: 40vh"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'

const { geojson } = defineProps({
  geojson: { type: Object, required: true },
})

const { getBounds } = useTrekData()
const { firstCoordinate, lastCoordinate } = getBounds(geojson)

onMounted(async () => {
  if (process.client) {
    const { map, tileLayer, geoJSON, icon, marker, circleMarker } =
      await import('leaflet/dist/leaflet-src.esm')

    // create map
    const mymap = map('mapId', { scrollWheelZoom: false })
    tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {}).addTo(
      mymap
    )

    // zoom map to zone of interest
    mymap.on('load', () => {
      mymap.fitBounds([firstCoordinate, lastCoordinate], { padding: [40, 40] })
    })
    mymap.setView(firstCoordinate, 11)

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
    }).addTo(mymap)

    // add circle marker for start and end of trek
    circleMarker(firstCoordinate, {
      radius: 6,
      weight: 1,
      color: '#334155',
      fill: true,
      fillColor: '#10b981',
      fillOpacity: 0.9,
    }).addTo(mymap)

    circleMarker(lastCoordinate, {
      radius: 6,
      weight: 1,
      color: '#334155',
      fill: true,
      fillColor: '#ef4444',
      fillOpacity: 0.9,
    }).addTo(mymap)
  }
})
</script>
