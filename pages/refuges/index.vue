<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h1
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Refuges et cabanes non gardées
        </h1>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          De la simple cabane de berger au refuge moderne, les massifs alpins
          français regorgent d'abris de montagne. Prévoir d'y passer une nuit
          est une aventure : on ne sait pas ce qu'on va y trouver ni qui on va
          rencontrer. Sortez de votre zone de confort et découvrez où vous
          passerez votre prochaine nuit en montagne !
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <client-only>
          <RefugeMap class="rounded-lg shadow" />
        </client-only>

        <div class="mt-12 grid gap-8 lg:grid-cols-3">
          <RefugeCard
            v-for="refuge in refuges"
            :key="refuge.name"
            :refuge="refuge"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const refuges = [
  {
    massif: 'Vercors',
    name: 'Cabane de Pré peyret',
    path: '/refuges/cabane-de-pre-peyret',
    altitude: 1600,
    beds: 15,
    stove: true,
    water: true,
    type: 'cabane non gardée',
    frequentation: 'forte fréquentation',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018135/vercors/cabane-de-pre-peyret-hiver-1_b9munz.jpg',
  },
  {
    massif: 'Vercors',
    name: 'Cabane des aiguillettes',
    path: '/refuges/cabane-des-aiguillettes',
    altitude: 1880,
    beds: 4,
    stove: false,
    water: true,
    type: 'cabane non gardée',
    frequentation: 'forte fréquentation',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018111/vercors/cabane-des-aiguillettes-1_i9komu.jpg',
  },
  {
    massif: 'Vercors',
    name: 'Cabane PNRV des chaumailloux',
    path: '/refuges/cabane-pnrv-des-chaumailloux',
    altitude: 1665,
    beds: 19,
    stove: true,
    water: true,
    type: 'cabane non gardée',
    frequentation: 'forte fréquentation',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018146/vercors/cabane-pnrv-des-chaumailloux-1_ujyt32.jpg',
  },
]

export default {
  setup() {
    return {
      refuges,
    }
  },
}
</script>
