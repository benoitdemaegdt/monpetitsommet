import { $fetch } from 'ohmyfetch'

export const useRefugeData = () => {
  async function getGeojson(path) {
    const endpoint = `/api/${path}`
    return $fetch(endpoint)
  }

  function getCoordinates(geojson) {
    const { features } = geojson
    return features[0].geometry.coordinates
  }

  return { getGeojson, getCoordinates }
}
