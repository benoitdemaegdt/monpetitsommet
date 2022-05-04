import { refuges } from '~/server/utils/refuges.constant.js'

export default defineEventHandler(() => {
  return {
    type: 'FeatureCollection',
    features: refuges.map((refuge) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: refuge.coordinates,
      },
      properties: {
        massif: refuge.massif,
        name: refuge.name,
        icon: '/icons/refuge.png',
      },
    })),
  }
})
