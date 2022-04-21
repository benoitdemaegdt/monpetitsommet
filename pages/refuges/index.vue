<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <ClientOnly>
          <RefugeMap class="rounded-lg shadow" />
        </ClientOnly>
        <div class="mt-12 grid gap-8 lg:grid-cols-3">
          <NuxtLink
            v-for="refuge in refuges"
            :key="refuge.name"
            :to="refuge.path"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                class="h-52 w-full object-cover"
                :src="refuge.imageUrl"
                alt="cover image"
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <div class="text-sm font-medium uppercase text-emerald-600">
                  {{ refuge.massif }}
                </div>
                <div class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ refuge.name }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    hey, my name is ben 👋
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
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
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018135/vercors/cabane-de-pre-peyret-hiver-1_b9munz.jpg',
  },
  {
    massif: 'Vercors',
    name: 'Cabane des aiguillettes',
    path: '/refuges/cabane-des-aiguillettes',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018111/vercors/cabane-des-aiguillettes-1_i9komu.jpg',
  },
  {
    massif: 'Vercors',
    name: 'Cabane PNRV des chaumailloux',
    path: '/refuges/cabane-pnrv-des-chaumailloux',
    imageUrl:
      'https://res.cloudinary.com/monpetitsommet/image/upload/f_auto,q_auto/v1591018146/vercors/cabane-pnrv-des-chaumailloux-1_ujyt32.jpg',
  },
]

export default {
  setup() {
    // call geojson and add map
    return {
      refuges,
    }
  },
}
</script>
