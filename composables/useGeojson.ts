export const useGeojson = () => {
  function isSinglePoint(geojson) {
    return geojson.features.length === 1 && geojson.features[0].geometry.type === 'Point'
  }

  function isMultiplePoints(geojson) {
    return (
      geojson.features.length > 0 &&
      geojson.features.every(({ geometry }) => geometry.type === 'Point')
    )
  }

  function isLineString(geojson) {
    return !!geojson.features.find(({ geometry }) => geometry.type === 'LineString')
  }

  function zoomToZoneOfInterest(map, geojson) {
    if (isSinglePoint(geojson)) {
      const longLat = geojson.features[0].geometry.coordinates
      map.setView(longLat.slice(0, 2).reverse(), 11)
    } else if (isMultiplePoints(geojson)) {
      const features = geojson.features
      map.fitBounds(features.map(({ geometry }) => geometry.coordinates.slice().reverse()))
    } else if (isLineString(geojson)) {
      const { geometry } = geojson.features.find(({ geometry }) => geometry.type === 'LineString')
      map.fitBounds(
        geometry.coordinates.map((coordinates) => coordinates.slice(0, 2).reverse()),
        { padding: [40, 40] }
      )
    }
  }

  return { zoomToZoneOfInterest }
}
