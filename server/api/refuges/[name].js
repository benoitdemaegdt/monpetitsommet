const refuges = [
  {
    name: 'Cabane de Pré Peyret',
    key: 'cabane-de-pre-peyret',
    coordinates: [5.4828, 44.82698, 1600],
  },
  {
    name: 'Cabane des aiguillettes',
    key: 'cabane-des-aiguillettes',
    coordinates: [5.52026, 44.85368, 1880],
  },
  {
    name: 'Cabane PNRV des Chaumailloux',
    key: 'cabane-pnrv-des-chaumailloux',
    coordinates: [5.51194, 44.80543, 1665],
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
