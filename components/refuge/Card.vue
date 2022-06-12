<template>
  <NuxtLink
    :to="path"
    class="flex flex-col rounded-lg shadow-lg overflow-hidden"
  >
    <div class="flex-shrink-0">
      <img class="h-52 w-full object-cover" :src="imageUrl" alt="cover image" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <div class="text-sm font-medium uppercase text-emerald-600">
          {{ massif }}
        </div>
        <div class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ name }}
          </p>
          <div class="mt-3 grid grid-cols-2 gap-4 text-base text-gray-500">
            <div class="flex items-center">
              <img
                src="/icons/mountain.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">Altitude: {{ altitude }}</div>
            </div>
            <div class="flex items-center">
              <img src="/icons/bed.png" alt="icone montagne" class="h-5 w-5" />
              <div class="ml-2">Capacité: {{ beds }}</div>
            </div>
            <div class="flex items-center">
              <img
                src="/icons/stove.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">Poêle: {{ stove }}</div>
            </div>
            <div class="flex items-center">
              <img
                src="/icons/water.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">Eau: {{ water }}</div>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center justify-between gap-y-2">
            <span
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >{{ type }}</span
            >
            <span
              class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
              >{{ frequentation }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'RefugeCard',
  props: ['refuge'],
  setup(props) {
    return {
      name: props.refuge.name,
      path: props.refuge._path,
      imageUrl: props.refuge.imageUrl,
      massif: props.refuge.massif,
      altitude: `${props.refuge.altitude}m`,
      beds: props.refuge.beds,
      stove: props.refuge.stove ? 'Oui' : 'Non',
      water: props.refuge.water ? 'Oui' : 'Non',
      type: props.refuge.type,
      frequentation: props.refuge.frequentation,
    }
  },
}
</script>
