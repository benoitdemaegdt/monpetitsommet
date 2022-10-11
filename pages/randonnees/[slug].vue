<template>
  <ContentFrame
    header="Randonnées"
    :title="trek.name"
    :description="trek.description"
    :imageUrl="trek.imageUrl"
  >
    <h2>Aperçu de la rando</h2>
    <TrekOverview :trek="trek" />
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
</script>
