<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 class="text-base font-semibold tracking-wider text-emerald-600 uppercase">
          Micro-aventures
        </h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Rando & bivouac
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Retrouvez les topos de randonnées sportives en montagne. L'idéal pour s'évader en pleine
          nature le temps d'un week end de deux ou trois jours.
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
      >
        <Card
          v-for="trek in treks"
          :key="trek.name"
          :path="trek._path"
          :imageUrl="trek.imageUrl"
          :header="trek.massif"
          :name="trek.name"
          :items="getTrekItems(trek)"
          :tags="getTrekTags(trek)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: treks } = await useAsyncData(() => {
  return queryContent('/randonnees')
    .where({
      _type: 'markdown',
      name: {
        $in: [
          'Traversée des Bauges',
          'Traversée du Vercors (Balcon Est)',
          'Petite Traversée de la Chartreuse',
        ],
      },
    })
    .find()
})

const { getTrekItems, getTrekTags } = useCard()
</script>
