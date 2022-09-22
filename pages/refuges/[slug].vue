<template>
  <ContentFrame
    :header="refuge.type"
    :title="refuge.name"
    :description="refuge.description"
    :imageUrl="refuge.imageUrl"
  >
    <h2>Localisation</h2>
    <Stats :stats="getRefugeStats(refuge)" />
    <Map :geojson="geojson" class="mt-8 rounded-lg shadow" />
    <h2>Équipements</h2>
    <RefugeEquipment :refuge="refuge" />
    <ContentRenderer :value="refuge" />
  </ContentFrame>
</template>

<script setup>
const { withoutTrailingSlash } = useUrl()
const { path } = useRoute()
const { getRefugeStats } = useStats()
const { refugeIcon } = useIcons()

const { data: refuge } = await useAsyncData(`refuge-${path}`, () => {
  return queryContent()
    .where({ _path: withoutTrailingSlash(path) })
    .findOne()
})

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [refuge.value.longitude, refuge.value.latitude],
      },
      properties: {
        name: refuge.value.name,
        icon: refugeIcon,
      },
    },
  ],
}
</script>
