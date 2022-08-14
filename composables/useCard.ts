import { useIcons } from '~/composables/useIcons'
const {
  mountainIcon,
  bedIcon,
  stoveIcon,
  waterIcon,
  distanceIcon,
  tempsIcon,
  hookIcon,
  flagIcon,
  pinIcon,
} = useIcons()

export const useCard = () => {
  function getRefugeItems(refuge) {
    return [
      { key: 'Altitude', value: `${refuge.altitude}m`, iconUrl: mountainIcon },
      { key: 'Capacité', value: `${refuge.beds} pers`, iconUrl: bedIcon },
      { key: 'Poêle', value: `${refuge.stove ? 'Oui' : 'Non'}`, iconUrl: stoveIcon },
      { key: 'Eau', value: `${refuge.water ? 'Oui' : 'Non'}`, iconUrl: waterIcon },
    ]
  }

  function getRefugeTags(refuge) {
    return [refuge.type, refuge.frequentation]
  }

  function getTrekItems(trek) {
    return [
      { key: 'Distance', value: `${trek.distance}km`, iconUrl: distanceIcon },
      { key: 'Durée', value: `${trek.duration}`, iconUrl: tempsIcon },
      { key: 'Dénivelé +', value: `${trek.elevation}m`, iconUrl: mountainIcon },
      { key: 'Cotation', value: `${trek.difficulty}`, iconUrl: hookIcon },
    ]
  }

  function getTrekTags(trek) {
    return [`${trek.from} → ${trek.to}`]
  }

  function getCanoeTrekItems(canoeTrek) {
    return [
      { key: 'Départ', value: `${canoeTrek.from}`, iconUrl: pinIcon },
      { key: 'Arrivée', value: `${canoeTrek.to}`, iconUrl: flagIcon },
      { key: 'Distance', value: `${canoeTrek.distance}km`, iconUrl: distanceIcon },
      { key: 'Durée', value: `${canoeTrek.duration}`, iconUrl: tempsIcon },
    ]
  }

  return { getRefugeItems, getRefugeTags, getTrekItems, getTrekTags, getCanoeTrekItems }
}
