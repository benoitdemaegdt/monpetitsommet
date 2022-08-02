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
const { withoutTrailingSlash } = useContent()
console.log('path >>', path)
console.log('pathForQuery >>', withoutTrailingSlash(path))

const { data: trek } = await useAsyncData(`trek-${path}`, () => {
  return queryContent('/randonnees')
    .where({ _path: withoutTrailingSlash(path), _type: 'markdown' })
    .findOne()
})
console.log('trek >>', trek)
</script>
