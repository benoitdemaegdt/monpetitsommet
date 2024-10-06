<template>
  <Map class="h-full w-full" :options="{ location: [2.7333, 46.6333], zoom: 5 }" />
</template>

<script setup>

definePageMeta({
  pageTransition: false,
  layout: 'fullscreen',
});

const description = 'Carte IGN en ligne, intéractive et gratuite.'
useHead({
  meta: [
    // description
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ]
})
</script>
