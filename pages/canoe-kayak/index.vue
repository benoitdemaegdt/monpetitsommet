<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 class="text-base font-semibold tracking-wider text-emerald-600 uppercase">
          Se la couler douce
        </h2>
        <h1 class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Randonnées en canoë kayak
        </h1>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Retrouvez les topos de randonnées en canoë kayak. L'idéal pour s'évader le long d'une
          rivière le temps d'un week end de deux ou trois jours.
        </p>
      </div>
      <div class="mt-12 mx-auto max-w-md px-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl">
        <div class="mt-12 grid gap-8 lg:grid-cols-3">
          <Card
            v-for="canoeTrek in canoeTreks"
            :key="canoeTrek.name"
            :imageUrl="canoeTrek.imageUrl"
            :header="canoeTrek.river"
            :name="canoeTrek.name"
            :items="getCanoeTrekItems(canoeTrek)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: canoeTreks } = await useAsyncData(() => {
  return queryContent('/canoe-kayak').where({ _type: 'markdown' }).find()
})

const { getCanoeTrekItems } = useCard()
</script>
