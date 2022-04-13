<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-emerald-600 uppercase"
        >
          Micro-aventures
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Rando & bivouac
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Retrouvez les topos de randonnées sportives en montagne. L'idéal pour
          s'évader en pleine nature le temps d'un week end de deux ou trois
          jours.
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
      >
        <NuxtLink
          v-for="hike in hikes"
          :key="hike.title"
          :to="hike.path"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-52 w-full object-cover"
              :src="hike.imageUrl"
              alt="cover image"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="text-sm font-medium uppercase text-emerald-600">
                {{ hike.massif }}
              </div>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ hike.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ hike.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
const hikes = [
  {
    massif: 'Chartreuse',
    title: 'Petite Traversée de la Chartreuse',
    subtitle: '',
    path: '/randonnees/petite-traversee-chartreuse',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload//v1619895441/chartreuse/randonnees/petite-traversee-chartreuse/intro_xuxv2u.jpg',
  },
  {
    massif: 'Bauges',
    title: 'Traversée des Bauges',
    subtitle:
      'Si vous envisagez de louer un appartement en meublé, vous vous demandez sans doute quels sont les meubles que vous allez devoir fournir à votre locataire. La liste de ces meubles indispensables à été fixé par décret le 31 juillet 2015 (n°2015-981) et nous vous la détaillons dans cet article.',
    path: '/randonnees/traversee-bauges',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/v1603218138/bauges/randonnees/traversee-bauges-frontenex-annecy/intro_ppjy7g.jpg',
  },
  {
    massif: 'Vercors',
    title: 'Traversée du Vercors (Balcon Est)',
    subtitle:
      'L’intérêt fiscal de la location meublée repose principalement sur le système d’amortissement comptable. Il est donc important de comprendre ce système pour optimiser la rentabilité de son bien immobilier.',
    path: '/randonnees/traversee-du-vercors-balcon-est',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png',
  },
]

export default {
  name: 'HikeSection',
  setup: () => ({
    hikes,
  }),
}
</script>
