<template>
  <div id="refugeMap" style="height: 40vh"></div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'

const { refuges } = defineProps({
  refuges: { type: Array, required: true },
})

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
  if (process.client) {
    const { map, tileLayer, geoJSON, icon, marker } = await import(
      'leaflet/dist/leaflet-src.esm'
    )

    // create map
    if (myMap != undefined) myMap.remove()
    myMap = map('refugeMap', { scrollWheelZoom: false })
    tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {}).addTo(
      myMap
    )

    // zoom map to zone of interest
    myMap.on('load', () => {
      if (refuges.length > 2) {
        myMap.fitBounds(
          refuges.map((refuge) => [refuge.latitude, refuge.longitude])
        )
      }
    })
    myMap.setView(getCoordinates(geojson).slice(0, 2).reverse(), 11)

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
  }
})

onBeforeUnmount(() => {
  myMap.remove()
})
</script>
