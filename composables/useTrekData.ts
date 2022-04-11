import { $fetch } from 'ohmyfetch'

export const useTrekData = () => {
  const URL =
    'https://api.monpetitsommet.fr/massifs/vercors/randonnees/traversee-du-vercors-balcon-est.json'
  async function getTrekData() {
    const { coordinates } = await $fetch(URL)
    return coordinates.map(([_long, _lat, alt, dist]) => [
      dist,
      Math.round(alt),
    ])
  }

  return { getTrekData }
}
