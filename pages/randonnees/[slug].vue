<template>
  <ContentFrame
    header="Randonnées"
    :title="trek.name"
    :description="trek.description"
    :imageUrl="trek.imageUrl"
  >
    <h2>Aperçu de la rando</h2>
    <TrekOverview :trek="trek" />
    <Cta v-if="trek?.ignUrl" :ign-url="trek.ignUrl" />
    <ContentRenderer :value="trek" />
  </ContentFrame>
</template>

<script setup>
const { path } = useRoute()
const { withoutTrailingSlash } = useUrl()

// https://github.com/nuxt/framework/issues/3587
definePageMeta({ pageTransition: false })

const { data: trek } = await useAsyncData(`trek-${path}`, () => {
  return queryContent()
    .where({ _path: `${withoutTrailingSlash(path)}`, _type: 'markdown' })
    .findOne()
})

const description = `Rando - ${trek.value.name}`
const coverImage = trek.value.imageUrl
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
