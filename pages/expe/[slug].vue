<template>
  <ContentFrame
    header="Expedition"
    :title="expe.name"
    :description="expe.description"
    :imageUrl="expe.imageUrl"
  >
    <Map style="height: 42vh" :geojson="geojson" :options="options" />
    <ContentRenderer :value="expe" />
  </ContentFrame>
</template>

<script setup lang="ts">
const { path } = useRoute()
const { withoutTrailingSlash } = useUrl()

// https://github.com/nuxt/framework/issues/3587
definePageMeta({ pageTransition: false });

const config = useRuntimeConfig();
const maptilerKey = config.public.maptilerKey;
const options = {
  tile: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${maptilerKey}`,
  location: [18.8333, 68.3500],
  zoom: 6,
}

const { data: geojson } = await useAsyncData(`expe-json-${path}`, () => {
  return queryContent()
    .where({ _type: 'json', _path: withoutTrailingSlash(path) })
    .findOne()
})

const { data: expe } = await useAsyncData(`expe-${path}`, () => {
  return queryContent()
    .where({ _path: `${withoutTrailingSlash(path)}`, _type: 'markdown' })
    .findOne()
})

</script>
