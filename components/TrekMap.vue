<template>
  <div id="map" class="w-full h-full" />
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import { ThreeDimensionsControl } from '@/mapbox/ThreeDimensionsControl.js'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

export default {
  name: 'TrekMap',
  props: {
    trek: { type: Object, required: true },
    zoom: { type: Object, default: () => ({}) }
  },
  data: () => ({
    map: undefined,
    coordinates: []
  }),
  watch: {
    zoom: {
      handler ({ from, to }) {
        if (from !== undefined && to !== undefined) {
          const coordinates = this.coordinates.slice(from, to)
          const bounds = coordinates.reduce((bounds, coord) => {
            return bounds.extend(coord.slice(0, 2))
          }, new mapboxgl.LngLatBounds(coordinates[0].slice(0, 2), coordinates[0].slice(0, 2)))

          this.map.fitBounds(bounds, { padding: 20 })
        }
      }
    }
  },
  async created () {
    this.coordinates = await this.getTrekCoordinates()
  },
  mounted () {
    this.createMap()
    // display trek
    this.map.on('load', () => {
      this.map.addSource('trek', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: this.coordinates.map(coord => coord.slice(0, 2)) }
        }
      })
      this.map.addLayer({
        id: 'trek',
        type: 'line',
        source: 'trek',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': '#D81B60', 'line-width': 3 }
      })
      // start and finish markers
      this.createMarker('mapbox-marker-start', this.coordinates[0].slice(0, 2))
      this.createMarker('mapbox-marker-finish', this.coordinates[this.coordinates.length - 1].slice(0, 2))
      // fit bounds
      const coordinates = this.coordinates
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord.slice(0, 2))
      }, new mapboxgl.LngLatBounds(coordinates[0].slice(0, 2), coordinates[0].slice(0, 2)))
      this.map.fitBounds(bounds, { padding: 20 })
    })
  },
  methods: {
    createMap () {
      mapboxgl.accessToken = process.env.NUXT_ENV_MAPBOX_GL_TOKEN
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/benoitdemaegdt/cka2hsqkq3k5r1iobsq729rh3',
        center: [5.7167, 45.1667],
        zoom: 11,
        attributionControl: false
      })
      this.map.touchZoomRotate.disableRotation()
      this.map.addControl(new mapboxgl.NavigationControl({ showCompass: false }))
      this.map.addControl(new mapboxgl.ScaleControl(), 'bottom-right')
      this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
      this.map.addControl(new ThreeDimensionsControl(), 'top-left')
    },
    async getTrekCoordinates () {
      const res = await fetch(this.trek.gpx)
      const trek = await res.json()
      return trek.coordinates
    },
    createMarker (markerClass, coordinates) {
      const marker = document.createElement('div')
      marker.className = markerClass
      new mapboxgl.Marker(marker)
        .setLngLat(coordinates)
        .addTo(this.map)
    }
  }
}
</script>

<style>

.mapbox-marker-start {
  background-color: #00C853;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 13px;
  height: 13px;
  border-radius: 50%;
}

.mapbox-marker-finish {
  background-color: #EF5350;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  width: 13px;
  height: 13px;
  border-radius: 50%;
}

.mapboxgl-ctrl-3d {
  @apply px-1 bg-white text-gray-900 text-base rounded font-semibold flex items-center justify-center;
  width: 29px;
  height: 29px;
}
</style>
