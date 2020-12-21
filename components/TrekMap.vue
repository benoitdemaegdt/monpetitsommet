<template>
  <div id="map" class="w-full h-full" />
</template>

<script>
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'TrekMap',
  data: () => ({
    map: undefined
  }),
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

      mapboxgl.accessToken = process.env.NUXT_ENV_MAPBOX_GL_TOKEN
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [5.7167, 45.1667],
        zoom: 11,
        attributionControl: false
      })
    }
  }
}
</script>

<style>

</style>
