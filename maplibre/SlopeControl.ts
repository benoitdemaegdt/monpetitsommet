export default class SlopeControl {
  _btn: HTMLButtonElement
  _btnInfo: HTMLButtonElement
  _container: HTMLDivElement
  _onClick: Function

  constructor({ onClick }: { onClick: Function }) {
    this._onClick = onClick
  }
  onAdd() {
    this._btn = document.createElement("button")
    this._btn.className = "maplibregl-slope maplibregl-ctrl-icon"
    this._btn.type = "button"
    this._btn.title = 'Calque des pentes'
    this._btn.onclick = () => this._onClick()

    this._btnInfo = document.createElement("button")
    this._btnInfo.className = "maplibregl-slope-info maplibregl-ctrl-icon"
    this._btnInfo.type = "button"
    this._btnInfo.title = 'Info calque des pentes'
    this._btnInfo.onclick = () => {
      const legend = document.getElementById('legend')
      if (!legend) return
      const classList = Array.from(legend.classList)
      const isLegendHidden = classList.some(className => className === 'hidden')
      if (isLegendHidden) {
        legend.classList.remove('hidden')
      } else {
        legend.classList.add('hidden')
      }
    }

    this._container = document.createElement('div');
    this._container.className = 'maplibregl-ctrl-group mapbox-ctrl-group maplibregl-ctrl mapboxgl-ctrl';
    this._container.appendChild(this._btn)
    this._container.appendChild(this._btnInfo)

    return this._container;
  }

  onRemove() {
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }
}
