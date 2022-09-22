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

const { data: canoeTrek } = await useAsyncData(`canoe-trek-${path}`, () => {
  return queryContent().where({ _type: 'markdown', _path: path }).findOne()
})
</script>
