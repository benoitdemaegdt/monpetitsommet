<template>
  <Map class="mt-8 rounded-lg shadow" :options="options" style="height: 42vh" />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const maptilerKey = config.public.maptilerKey;

const options = {
  tile: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${maptilerKey}`,
  location: [18.8333, 68.3500],
  zoom: 6,
}

const description = 'kungsleden'

</script>
