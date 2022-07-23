<template>
  <div ref="mapId" style="height: 40vh"></div>
  <button @click="toggleFullscreen">click me</button>
</template>

<script setup>
const { refuges } = defineProps({
  refuges: { type: Array, required: true },
})
const mapId = ref(null)

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

function toggleFullscreen() {
  if (myMap._isFullscreen || false) {
    myMap._isFullscreen = false
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  } else {
    let container = myMap.getContainer()
    myMap._isFullscreen = true
    if (container.requestFullscreen) {
      container.requestFullscreen()
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen()
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen()
    }
  }
}

onMounted(async () => {
  const { map, tileLayer, geoJSON, icon, marker, control, Control, DomUtil, DomEvent } =
    await import('leaflet/dist/leaflet-src.esm')

  // create map
  myMap = map(mapId.value, {
    layers: [tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {})],
    scrollWheelZoom: false,
  })

  // add fullscreen button
  Control.Fullscreen = Control.extend({
    onAdd: function (map) {
      var div = DomUtil.create('div')

      div.style.width = '30px'
      div.style.height = '30px'
      div.style.backgroundColor = 'white'
      div.style.borderRadius = '2px'

      DomEvent.on(div, 'click', this._click, this)

      return div
    },
    _click: function (map) {
      toggleFullscreen()
    },
  })

  control.fullscreen = function (opts) {
    return new Control.Fullscreen(opts)
  }

  control.fullscreen({ position: 'topright' }).addTo(myMap)

  // zoom map to zone of interest
  if (refuges.length > 2) {
    myMap.fitBounds(refuges.map((refuge) => [refuge.latitude, refuge.longitude]))
  } else {
    myMap.setView(getCoordinates(geojson).slice(0, 2).reverse(), 11)
  }

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

  // fix problem happening when changing page
  setTimeout(() => myMap.invalidateSize(), 100)
})

onBeforeUnmount(() => {
  myMap.remove()
})
</script>
