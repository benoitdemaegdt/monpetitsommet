<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 class="text-base font-semibold tracking-wider text-emerald-600 uppercase">
          Dormir en montagne
        </h2>
        <h1 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Refuges et cabanes non gardées
        </h1>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          De la simple cabane de berger au refuge moderne, les massifs alpins français regorgent
          d'abris de montagne. Prévoir d'y passer une nuit est une aventure : on ne sait pas ce
          qu'on va y trouver ni qui on va rencontrer. Sortez de votre zone de confort et découvrez
          où vous passerez votre prochaine nuit en montagne !
        </p>
      </div>
      <div class="mt-12 mx-auto max-w-md px-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl">
        <RefugeMap :refuges="refuges" class="rounded-lg shadow" />
        <div class="mt-12 grid gap-8 lg:grid-cols-3">
          <Card
            v-for="refuge in refuges"
            :key="refuge.name"
            :path="refuge._path"
            :imageUrl="refuge.imageUrl"
            :header="refuge.massif"
            :name="refuge.name"
            :items="getRefugeItems(refuge)"
            :tags="getRefugeTags(refuge)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: refuges } = await useAsyncData(() => {
  return queryContent('/refuges').find()
})

const { getRefugeItems, getRefugeTags } = useCard()
</script>
