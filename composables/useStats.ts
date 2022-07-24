export const useStats = () => {
  function getRefugeStats(refuge) {
    return [
      { name: 'Massif', stat: refuge.massif },
      { name: 'Altitude', stat: `${refuge.altitude} m` },
    ]
  }

  function getTrekStats(trek) {
    return [
      { name: 'Distance', stat: `${trek.distance} km` },
      { name: 'Dénivelé +', stat: `${trek.elevation} m` },
      { name: 'Cotation', stat: `${trek.difficulty}` },
    ]
  }

  function getCanoeTrekStats(canoeTrek) {
    return [
      { name: 'Distance', stat: `${canoeTrek.distance} km` },
      { name: 'Durée', stat: `${canoeTrek.duration}` },
      { name: 'Cotation', stat: `${canoeTrek.difficulty}` },
    ]
  }

  return { getRefugeStats, getTrekStats, getCanoeTrekStats }
}
