<template>
  <div id="map" class="w-full h-full" />
</template>

<script>
import Vue from 'vue'
import ShackMapTooltip from '@/components/ShackMapTooltip.vue'

import 'mapbox-gl/dist/mapbox-gl.css'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

export default {
  name: 'ShackMap',
  props: {
    shacks: { type: Array, required: true },
    hoverShackIndex: { type: Number, default: undefined }
  },
  data: () => ({
    map: undefined,
    markers: [],
    popups: []
  }),
  watch: {
    shacks: {
      handler (newShacks) {
        if (newShacks) {
          this.addMarkers(newShacks)
        }
      }
    },
    hoverShackIndex: {
      handler (newIndex, oldIndex) {
        if (oldIndex !== undefined) {
          const el = this.markers[oldIndex].getElement()
          const content = el.querySelector('.mapbox-marker-content')
          el.classList.remove('mapbox-marker-hover')
          content.classList.remove('mapbox-marker-content-hover')
        }
        if (newIndex !== undefined) {
          const el = this.markers[newIndex].getElement()
          const content = el.querySelector('.mapbox-marker-content')
          el.classList.add('mapbox-marker-hover')
          content.classList.add('mapbox-marker-content-hover')
        }
      }
    }
  },
  mounted () {
    this.createMap()
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
      this.map.dragRotate.disable()
      this.map.touchZoomRotate.disableRotation()
      this.map.addControl(new mapboxgl.NavigationControl({ showCompass: false }))
      this.map.addControl(new mapboxgl.FullscreenControl(), 'top-left')
      this.map.addControl(new mapboxgl.ScaleControl(), 'bottom-right')
      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true
      }), 'top-left')
      this.addMarkers(this.shacks)
    },
    addMarkers (shacks) {
      this.clearMarkers()
      const bounds = new mapboxgl.LngLatBounds()
      shacks.forEach((shack) => {
        // create marker
        const el = document.createElement('div')
        el.className = 'mapbox-marker'
        el.innerHTML = `
        <span class="mapbox-marker-content">
          <b>${shack.beds}</b>&nbsp<svg class="mapbox-marker-content-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z"></path>
          </svg>
        </span>
        </span>
        `
        // create popup
        const MapboxPopup = Vue.extend(ShackMapTooltip)

        const popup = new mapboxgl.Popup({ closeButton: false })
          .setLngLat([shack.longitude, shack.latitude])
          .setHTML(`<div id="mapbox-popup-content-${shack.key}"></div>`)
          .addTo(this.map)

        const MapboxPopupInstance = new MapboxPopup({
          propsData: { shack, goToShack: this.goToShack }
        })

        MapboxPopupInstance.$mount(`#mapbox-popup-content-${shack.key}`)
        popup._update()

        // attach marker and popup to map
        const marker = new mapboxgl.Marker(el)
          .setLngLat([shack.longitude, shack.latitude])
          .setPopup(popup)
          .addTo(this.map)

        // keep track of markers and popups
        this.markers.push(marker)
        this.popups.push(popup)

        // add marker to map bounds
        bounds.extend([shack.longitude, shack.latitude])
      })

      // fit map to markers
      if (shacks.length > 1) {
        this.map.fitBounds(bounds, { padding: 100 })
      } else if (shacks.length === 1) {
        this.map.flyTo({
          center: [shacks[0].longitude, shacks[0].latitude],
          essential: true
        })
      }
    },
    clearMarkers () {
      if (this.markers.length > 0) {
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].remove()
          this.popups[i].remove()
        }
        this.markers = []
        this.popups = []
      }
    },
    goToShack (shack) {
      this.$router.push({ name: `massifs-${shack.massif}-refuges-slug`, params: { slug: shack.slug } })
    }
  }
}
</script>

<style>
/**
 * markers default rules
 */
.mapbox-marker {
  @apply flex items-center justify-center bg-white;
  height: 28px;
  border-radius: 28px;
  padding: 0px 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.18) 0px 1px 2px;
  font-size: 13px;
}

.mapbox-marker-content {
  @apply flex items-center justify-center text-gray-900;
}

.mapbox-marker-content-svg-icon {
  height: 18px;
}

/**
 * rules when a marker is :hover
 */
.mapbox-marker:hover {
  @apply z-10;
  height: 29px;
  font-size: 14px;
}

.mapbox-marker:hover .mapbox-marker-content-svg-icon {
  height: 20px !important;
}

/**
 * rules when a shackListItem is being :hover
 */
.mapbox-marker-hover {
  @apply bg-gray-900 z-10;
  height: 30px;
}

.mapbox-marker-content-hover {
  @apply text-white;
}

.mapbox-marker-hover path {
  @apply fill-current;
}

/**
 * modify mapbox default css rules
 */
.mapboxgl-popup {
  z-index: 11 !important;
}

.mapboxgl-popup-content {
  background-color: transparent;
  box-shadow: none;
}

.mapboxgl-popup-tip {
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  border-left-color: transparent !important;
}
</style>
