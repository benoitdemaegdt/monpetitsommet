<template>
  <div id="map" class="rounded-lg" style="height: 40vh"></div>
</template>

<script setup>
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import SlopeControl from '~/maplibre/SlopeControl'
const config = useRuntimeConfig()
const ignApiKey = config.public.ignApiKey

const { loadImages } = useMap()
const { geojson, activity } = defineProps({ geojson: Object, activity: String })

const allPointsCoordinates = geojson.features
  .filter((feature) => feature.geometry.type === 'Point')
  .map((feature) => feature.geometry.coordinates.slice(0, 2))
const allLinesCoordinates = geojson.features
  .filter((feature) => feature.geometry.type === 'LineString')
  .map((feature) => feature.geometry.coordinates)
  .reduce((prev, current) => [...prev, ...current.map((coord) => coord.slice(0, 2))], [])
const allCoordinates = [...allPointsCoordinates, ...allLinesCoordinates]
const firstCoordinate = allCoordinates[0]

const position = useState('position')
// main line string (one that = elevationProfile) must be 1st in geojson file
const mainLineString = geojson.features.find((feature) => feature.geometry.type === 'LineString')

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

    if (activity === 'ski') {
      map.addSource('calque-pente', {
        type: 'raster',
        tiles: [
          `https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?layer=GEOGRAPHICALGRIDSYSTEMS.SLOPES.MOUNTAIN&style=normal&tilematrixset=PM&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image/png&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}`,
        ],
        tileSize: 256,
      });
      map.addLayer({
        id: 'calque-pente',
        type: 'raster',
        source: 'calque-pente',
        paint: { 'raster-opacity': 0.7 }
      });

      const slopeControl = new SlopeControl({
        onClick: () => {
          const visibility = map.getLayoutProperty('calque-pente', 'visibility')
          if (visibility === 'none') {
            map.setLayoutProperty('calque-pente', 'visibility', 'visible');
          } else {
            map.setLayoutProperty('calque-pente', 'visibility', 'none');
          }
        }
      })
      map.addControl(slopeControl, 'bottom-left')
    }

    map.addSource('data', {
      type: 'geojson',
      data: geojson,
    })
    map.addLayer({
      id: 'path',
      type: 'line',
      source: 'data',
      paint: {
        'line-width': 3,
        'line-color': activity === 'ski' ? '#1d4ed8' : '#D81B60',
      },
      filter: ['==', '$type', 'LineString'],
    })
    map.addLayer({
      id: 'start-end',
      type: 'circle',
      source: 'data',
      paint: {
        'circle-radius': 6,
        'circle-color': ['get', 'color'],
      },
      filter: ['==', 'marker', 'circle'],
    })
    map.addLayer({
      id: 'poi',
      type: 'symbol',
      source: 'data',
      layout: {
        'icon-image': ['get', 'icon'],
        'icon-size': 0.5,
      },
      filter: ['has', 'icon'],
    })

    if (allCoordinates.length > 1) {
      const bounds = new maplibregl.LngLatBounds(firstCoordinate, firstCoordinate)
      allCoordinates.map((coord) => bounds.extend(coord))
      map.fitBounds(bounds, { padding: 20 })
    }

    map.on('click', 'poi', (e) => {
      new maplibregl.Popup({ closeButton: false, closeOnClick: true })
        .setLngLat(e.lngLat)
        .setHTML(`<div class="text-sm text-gray-800">${e.features[0].properties.name}</div>`)
        .addTo(map)
    })
    map.on('mouseenter', 'poi', () => (map.getCanvas().style.cursor = 'pointer'))
    map.on('mouseleave', 'poi', () => (map.getCanvas().style.cursor = ''))
  })

  const el = document.createElement('div')
  if (activity === 'ski') {
    el.className = 'rounded-full h-4 w-4 bg-[#1d4ed8]'
  } else {
    el.className = 'rounded-full h-4 w-4 bg-[#D81B60]'
  }

  let marker = new maplibregl.Marker(el)
  watch(position, (newPosition) => {
    const { x, y } = newPosition
    if (x === undefined && y === undefined) {
      marker.remove()
    } else {
      const coordinates = mainLineString?.geometry?.coordinates
      const [long, lat] = coordinates.find(
        ([_long, _lat, alt, dist]) => x === dist && Math.round(alt) === y
      )
      marker.setLngLat([long, lat]).addTo(map)
    }
  })
})
</script>

<style>
.maplibregl-draw-line {
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: auto;
  background-image: url('~/maplibre/slopeControl.svg');
}
</style>
