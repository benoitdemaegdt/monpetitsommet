export const useRefugeData = () => {

  function getCoordinates(geojson) {
    const { features } = geojson
    return features[0].geometry.coordinates
  }

  return { getCoordinates }
}
