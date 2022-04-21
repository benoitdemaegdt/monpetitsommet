import { refuges } from '~/server/utils/refuges.constant.js'

export default defineEventHandler((event) => {
  const refuge = refuges.find(({ key }) => key === event.context.params.name)
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: refuge.coordinates,
        },
        properties: {
          name: refuge.name,
          icon: '/icons/pin.png',
        },
      },
    ],
  }
})
