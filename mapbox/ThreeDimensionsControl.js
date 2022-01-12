export class ThreeDimensionsControl {
  onAdd(map) {
    this.map = map
    this.container = document.createElement('button')
    this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-3d'
    this.container.textContent = '3D'

    this.container.addEventListener(
      'click',
      (e) => {
        this._switchLayer(this.container, this.map)
        e.stopPropagation()
      },
      false
    )

    return this.container
  }

  onRemove() {
    this.container.parentNode.removeChild(this.container)
    this.map = undefined
  }

  _switchLayer(container, map) {
    const switchTo3D = container.textContent === '3D'
    if (switchTo3D) {
      map.setPitch(70)
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      })
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      map.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15,
        },
      })
      container.textContent = '2D'
    } else {
      map.setPitch(0)
      map.setTerrain(undefined)
      map.removeSource('mapbox-dem')
      map.removeLayer('sky')
      container.textContent = '3D'
    }
  }
}
