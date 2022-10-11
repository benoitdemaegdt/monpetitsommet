<template>
  <div id="map" class="rounded-lg" style="height: 40vh"></div>
</template>

<script setup>
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
const config = useRuntimeConfig()
const ignApiKey = config.public.ignApiKey

const { geojson } = defineProps({ geojson: Object })

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        ign: {
          type: 'raster',
          tiles: [
            `https://wxs.ign.fr/${ignApiKey}/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR&STYLE=normal&FORMAT=image/jpeg&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}`,
          ],
          tileSize: 256,
          attribution: '&copy; OpenStreetMap Contributors',
          maxzoom: 19,
        },
      },
      layers: [{ id: 'ign', type: 'raster', source: 'ign', minzoom: 0, maxzoom: 22 }],
    },
    center: [5.71667, 45.166672],
    zoom: 9,
    attributionControl: false,
  })
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left')
  map.addControl(new maplibregl.FullscreenControl(), 'top-right')
  map.addControl(new maplibregl.AttributionControl({ compact: true }))

  // add geojson layer
  map.on('load', () => {
    map.addSource('refuges', {
      type: 'geojson',
      data: geojson,
    })
    map.addLayer({
      id: 'refuges',
      type: 'circle',
      source: 'refuges',
      paint: {
        'circle-radius': 6,
        'circle-color': '#B42222',
      },
      filter: ['==', '$type', 'Point'],
    })

    const allCoordinates = geojson.features.map((feature) => feature.geometry.coordinates)
    const bounds = new maplibregl.LngLatBounds(allCoordinates[0], allCoordinates[0])
    allCoordinates.map((coord) => bounds.extend(coord))
    map.fitBounds(bounds, { padding: 20 })
  })
})
</script>
