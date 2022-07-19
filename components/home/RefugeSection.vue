<template>
  <div class="relative py-8 sm:py-12 lg:py-16">
    <div class="relative">
      <div
        class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-emerald-600 uppercase"
        >
          Dormir en montagne
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Refuges et cabanes non gardées
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          De la simple cabane de berger au refuge moderne, les massifs alpins
          français regorgent d'abris de montagne. Prévoir d'y passer une nuit
          est une aventure : on ne sait pas ce qu'on va y trouver ni qui on va
          rencontrer. Sortez de votre zone de confort et découvrez où vous
          passerez votre prochaine nuit en montagne !
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
      >
        <RefugeCard
          v-for="refuge in refuges"
          :key="refuge.name"
          :refuge="refuge"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: refuges } = await useAsyncData(() => {
  return queryContent('/refuges')
    .where({
      name: {
        $in: [
          'Cabane de Pré Peyret',
          'Cabane des Aiguillettes',
          'Cabane PNRV des Chaumailloux',
        ],
      },
    })
    .find()
})
</script>
