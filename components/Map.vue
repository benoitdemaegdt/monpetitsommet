<template>
  <div id="map" class="rounded-lg" style="height: 40vh"></div>
</template>

<script setup>
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
const config = useRuntimeConfig()
const ignApiKey = config.public.ignApiKey

const { loadImages } = useMap()
const { geojson } = defineProps({ geojson: Object })
const allCoordinates = geojson.features.map((feature) => feature.geometry.coordinates)
const firstCoordinate = allCoordinates[0]

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
    center: firstCoordinate,
    zoom: 11,
    attributionControl: false,
  })
  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left')
  map.addControl(new maplibregl.FullscreenControl(), 'top-right')
  map.addControl(new maplibregl.AttributionControl({ compact: true }))

  // add geojson layer
  map.on('load', async () => {
    await loadImages(map, geojson)

    map.addSource('refuges', {
      type: 'geojson',
      data: geojson,
    })
    map.addLayer({
      id: 'refuges',
      type: 'symbol',
      source: 'refuges',
      layout: {
        'icon-image': ['get', 'icon'],
        'icon-size': 0.5,
      },
      filter: ['==', '$type', 'Point'],
    })

    if (allCoordinates.length > 1) {
      const bounds = new maplibregl.LngLatBounds(firstCoordinate, firstCoordinate)
      allCoordinates.map((coord) => bounds.extend(coord))
      map.fitBounds(bounds, { padding: 20 })
    }

    map.on('click', 'refuges', (e) => {
      new maplibregl.Popup({ closeButton: false, closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`<div class="text-sm text-gray-800">${e.features[0].properties.name}</div>`)
        .addTo(map)
    })
    map.on('mouseenter', 'refuges', () => (map.getCanvas().style.cursor = 'pointer'))
    map.on('mouseleave', 'refuges', () => (map.getCanvas().style.cursor = ''))
  })
})
</script>
