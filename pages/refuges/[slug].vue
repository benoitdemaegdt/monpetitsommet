<template>
  <ContentFrame
    :header="refuge.type"
    :title="refuge.name"
    :description="refuge.description"
    :imageUrl="refuge.imageUrl"
  >
    <h2>Localisation</h2>
    <RefugeStats :refuge="refuge" />
    <RefugeMap :refuges="[refuge]" class="mt-8 rounded-lg shadow" />
    <h2>Équipements</h2>
    <RefugeEquipment :refuge="refuge" />
    <ContentRenderer :value="refuge" />
  </ContentFrame>
</template>

<script setup>
const { withoutTrailingSlash } = useContent()
const { path } = useRoute()

const { data: refuge } = await useAsyncData(`refuge-${path}`, () => {
  return queryContent('/refuges')
    .where({ _path: withoutTrailingSlash(path) })
    .findOne()
})
</script>
