import { $fetch } from 'ohmyfetch'

export const useTrekData = () => {
  async function getTrekData() {
    const endpoint = '/api/randonnees/traversee-du-vercors-balcon-est'
    const { features } = await $fetch(endpoint)
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

  return { getTrekData }
}
