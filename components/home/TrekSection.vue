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
        <TrekCard v-for="trek in treks" :key="trek.name" :trek="trek" />
      </div>
    </div>
  </div>
</template>

<script>
const treks = [
  {
    name: 'Petite Traversée de la Chartreuse',
    massif: 'Chartreuse',
    path: '/randonnees/petite-traversee-chartreuse',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload//v1619895441/chartreuse/randonnees/petite-traversee-chartreuse/intro_xuxv2u.jpg',
    distance: 44.35,
    duration: '2 à 3 jours',
    elevation: 1879.07,
    difficulty: 'T3',
    from: 'Sappey-en-Chartreuse',
    to: 'Pontcharra',
  },
  {
    name: 'Traversée des Bauges',
    massif: 'Bauges',
    path: '/randonnees/traversee-bauges-frontenex-annecy',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/v1603218138/bauges/randonnees/traversee-bauges-frontenex-annecy/intro_ppjy7g.jpg',
    distance: 66.8,
    duration: '3 à 4 jours',
    elevation: 5150.15,
    difficulty: 'T2',
    from: 'Frontenex',
    to: 'Annecy',
  },
  {
    name: 'Traversée du Vercors (Balcon Est)',
    massif: 'Vercors',
    path: '/randonnees/traversee-du-vercors-balcon-est',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png',
    distance: 42.75,
    duration: '2 à 3 jours',
    elevation: 4328.35,
    difficulty: 'T3',
    from: 'Clelles',
    to: 'Villard-de-Lans',
  },
]

export default {
  name: 'TrekSection',
  setup: () => ({
    treks,
  }),
}
</script>
