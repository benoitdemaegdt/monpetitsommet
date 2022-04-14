import { $fetch } from 'ohmyfetch'

export const useTrekData = () => {
  async function getGeojson() {
    const endpoint = '/api/randonnees/traversee-du-vercors-balcon-est'
    return $fetch(endpoint)
  }

  function getBounds(geojson) {
    const { features } = geojson
    const lineString = features.find(
      ({ geometry }) => geometry.type === 'LineString'
    )
    const coordinates = lineString.geometry.coordinates
    return {
      firstCoordinate: [coordinates[0][1], coordinates[0][0]],
      lastCoordinate: [
        coordinates[coordinates.length - 1][1],
        coordinates[coordinates.length - 1][0],
      ],
    }
  }

  function getTrekData(geojson) {
    const { features } = geojson
    const points = features.filter(({ geometry }) => geometry.type === 'Point')
    const lineString = features.find(
      ({ geometry }) => geometry.type === 'LineString'
    )
    const coordinates = lineString.geometry.coordinates
    return {
      pointsOfInterest: points.map((point) => ({
        name: point.properties.name,
        distance: point.geometry.coordinates[3],
        altitude: point.geometry.coordinates[2],
      })),
      altitudeData: coordinates.map(([_long, _lat, alt, dist]) => [
        dist,
        Math.round(alt),
      ]),
    }
  }

  return { getGeojson, getBounds, getTrekData }
}
