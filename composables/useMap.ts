export const useMap = () => {
  async function loadImages(map, geojson) {
    const images = geojson.features
      .filter((feature) => feature.geometry.type === 'Point' && !!feature.properties.icon)
      .map((feature) => feature.properties.icon)
      .filter((image, index, images) => images.indexOf(image) === index)

    return Promise.all(
      images.map(async (image) => {
        const res = await loadImage(map, image)
        return map.addImage(image, res)
      })
    )
  }

  // helper : wrap callback in promise
  async function loadImage(map, image) {
    return new Promise((resolve, reject) => {
      map.loadImage(image, (error, data) => {
        if (error) return reject(error)
        resolve(data)
      })
    })
  }

  return { loadImages }
}
