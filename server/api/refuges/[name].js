const refuges = [
  {
    name: 'Cabane de Pré Peyret',
    key: 'cabane-de-pre-peyret',
    coordinates: [5.4828, 44.82698, 1600],
  },
]

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
