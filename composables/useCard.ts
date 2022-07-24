export const useCard = () => {
  function getRefugeItems(refuge) {
    return [
      { key: 'Altitude', value: `${refuge.altitude}m`, iconUrl: '/icons/mountain.png' },
      { key: 'Capacité', value: `${refuge.beds} pers`, iconUrl: '/icons/bed.png' },
      { key: 'Poêle', value: `${refuge.stove ? 'Oui' : 'Non'}`, iconUrl: '/icons/stove.png' },
      { key: 'Eau', value: `${refuge.water ? 'Oui' : 'Non'}`, iconUrl: '/icons/water.png' },
    ]
  }

  function getRefugeTags(refuge) {
    return [refuge.type, refuge.frequentation]
  }

  function getTrekItems(trek) {
    return [
      { key: 'Distance', value: `${trek.distance}km`, iconUrl: '/icons/distance.png' },
      { key: 'Durée', value: `${trek.duration}`, iconUrl: '/icons/temps.png' },
      { key: 'Dénivelé +', value: `${trek.elevation}m`, iconUrl: '/icons/mountain.png' },
      { key: 'Cotation', value: `${trek.difficulty}`, iconUrl: '/icons/hook.png' },
    ]
  }

  function getTrekTags(trek) {
    return [`${trek.from} → ${trek.to}`]
  }

  return { getRefugeItems, getRefugeTags, getTrekItems, getTrekTags }
}
