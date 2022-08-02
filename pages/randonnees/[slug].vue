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
const pathForQuery = path.endsWith('/') ? path.slice(0, -1) : path
console.log('path >>', path)
console.log('pathForQuery >>', pathForQuery)

const { data: trek } = await useAsyncData(`trek-${path}`, () => {
  return queryContent('/randonnees').where({ _path: pathForQuery, _type: 'markdown' }).findOne()
})
console.log('trek >>', trek)
</script>
