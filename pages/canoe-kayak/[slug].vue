<template>
  <ContentFrame
    header="Randonnée en canoë kayak"
    :title="canoeTrek.name"
    :description="canoeTrek.description"
    :imageUrl="canoeTrek.imageUrl"
  >
    <h2>Aperçu de la rando en canoë kayak</h2>
    <CanoeTrekOverview :canoe-trek="canoeTrek" />
    <ContentRenderer :value="canoeTrek" />
  </ContentFrame>
</template>

<script setup>
const { path } = useRoute()

// https://github.com/nuxt/framework/issues/3587
definePageMeta({ pageTransition: false })

const { data: canoeTrek } = await useAsyncData(`canoe-trek-${path}`, () => {
  return queryContent().where({ _type: 'markdown', _path: path }).findOne()
})

const description = `Canoë kayak - ${canoeTrek.value.name}`
const coverImage = canoeTrek.value.imageUrl
useHead({
  meta: [
    // description
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    // cover image
    { hid: 'og:image', property: 'og:image', content: coverImage },
    { hid: 'twitter:image', name: 'twitter:image', content: coverImage }
  ]
})
</script>
