<template>
  <Map class="h-full w-full" :geojson="geojson" :options="options" />
</template>

<script setup lang="ts">
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

const { data: geojson } = await useAsyncData('kungsleden', () => {
  return queryContent('expe')
    .where({ _path: '/expe/kungsleden' })
    .findOne()
})

</script>
