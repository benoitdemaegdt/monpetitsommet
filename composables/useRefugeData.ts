import { $fetch } from 'ohmyfetch'

export const useRefugeData = () => {
  async function getGeojson() {
    const endpoint = '/api/refuges/cabane-de-pre-peyret'
    return $fetch(endpoint)
  }

  function getCoordinates(geojson) {
    const { features } = geojson
    return features[0].geometry.coordinates
  }

  return { getGeojson, getCoordinates }
}
