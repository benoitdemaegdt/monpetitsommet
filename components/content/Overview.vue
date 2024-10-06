<template>
  <div>
    <Stats :stats="getTrekStats(trek)" />
    <Map class="mt-8" :id="id" :geojson="geojson" style="height: 42vh" />
    <ClientOnly>
      <TrekElevationProfile
        v-if="lineStrings.length === 1"
        :id="id"
        :geojson="geojson"
        class="mt-8 rounded-lg shadow"
      />
    </ClientOnly>
    <Cta v-if="cta?.ignUrl" :ignUrl="cta.ignUrl" />
  </div>
</template>

<script setup>
const { path } = useRoute()
const { withoutTrailingSlash } = useUrl()

const { trek, cta, id, filter } = defineProps({ trek: Object, cta: Object, id: String, filter: String })
const getFeatures = eval(filter)

const { data } = await useAsyncData(`geojson-${path}`, () => {
  return queryContent()
    .where({ _type: 'json', _path: { $contains: withoutTrailingSlash(path) } })
    .findOne()
})

const geojson = computed(() => {
  return {
    type: 'FeatureCollection',
    features: getFeatures ? getFeatures(data.value.features) : data.value.features
  }
})
const lineStrings = geojson.value.features.filter(({ geometry }) => geometry.type === 'LineString')

const { getTrekStats } = useStats()
</script>
