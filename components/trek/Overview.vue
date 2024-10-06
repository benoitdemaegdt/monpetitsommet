<template>
  <div>
    <Stats :stats="getTrekStats(trek)" />
    <Map class="mt-8" :geojson="geojson" :activity="activity" style="height: 42vh" />
    <ClientOnly>
      <TrekElevationProfile
        v-if="lineStrings.length === 1"
        class="mt-8 rounded-lg shadow"
        :geojson="geojson"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { withoutTrailingSlash } = useUrl()

const { trek, activity } = defineProps({ trek: Object, activity: String })
const { data: geojson } = await useAsyncData(`geojson-${path}`, () => {
  return queryContent()
    .where({ _type: 'json', _path: { $contains: withoutTrailingSlash(path) } })
    .findOne()
})
const lineStrings = geojson.value.features.filter(({ geometry }) => geometry.type === 'LineString')

const { getTrekStats } = useStats()
</script>
