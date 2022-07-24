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

  function getCanoeTrekItems(canoeTrek) {
    return [
      { key: 'Départ', value: `${canoeTrek.from}`, iconUrl: '/icons/pin.png' },
      { key: 'Arrivée', value: `${canoeTrek.to}`, iconUrl: '/icons/flag.png' },
      { key: 'Distance', value: `${canoeTrek.distance}km`, iconUrl: '/icons/distance.png' },
      { key: 'Durée', value: `${canoeTrek.duration}`, iconUrl: '/icons/temps.png' },
    ]
  }

  return { getRefugeItems, getRefugeTags, getTrekItems, getTrekTags, getCanoeTrekItems }
}
