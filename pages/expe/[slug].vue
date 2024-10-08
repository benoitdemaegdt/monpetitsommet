<template>
  <Map class="h-full w-full" :geojson="geojson" :options="options" />
</template>

<script setup lang="ts">
const { path } = useRoute()
const { withoutTrailingSlash } = useUrl()

// https://github.com/nuxt/framework/issues/3587
definePageMeta({
  pageTransition: false,
  layout: 'fullscreen',
});

const config = useRuntimeConfig();
const maptilerKey = config.public.maptilerKey;
const options = {
  tile: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${maptilerKey}`,
  location: [18.8333, 68.3500],
  zoom: 6,
}

console.log(' ')
console.log(' ')
console.log('path >>', path)
console.log('withoutTrailingSlash(path) >>', withoutTrailingSlash(path))
console.log(' ')
console.log(' ')


const { data: geojson } = await useAsyncData(`expe-${path}`, () => {
  return queryContent()
    .where({ _path: withoutTrailingSlash(path) })
    .findOne()
})

</script>
