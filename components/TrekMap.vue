<template>
  <div id="map" class="w-full h-full" />
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'
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
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [5.7167, 45.1667],
        zoom: 11,
        attributionControl: false
      })
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
    // createMap () {
    //   const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

    //   mapboxgl.accessToken = process.env.NUXT_ENV_MAPBOX_GL_TOKEN
    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
    //     center: [5.7167, 45.1667],
    //     pitch: 85,
    //     bearing: 80,
    //     zoom: 11,
    //     attributionControl: false
    //   })

    //   this.map.on('load', () => {
    //     this.map.addSource('mapbox-dem', {
    //       type: 'raster-dem',
    //       url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
    //       tileSize: 512,
    //       maxzoom: 14
    //     })
    //     // add the DEM source as a terrain layer with exaggerated height
    //     this.map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
    //   })
    // }
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

</style>
