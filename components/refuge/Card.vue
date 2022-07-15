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
            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-6 w-6"
                  src="/icons/mountain.png"
                  alt="icone montagne"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Altitude</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ altitude }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" src="/icons/bed.png" alt="icone lit" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Capacité</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ beds }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" src="/icons/stove.png" alt="icone poêle" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Poêle</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ stove }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" src="/icons/water.png" alt="icone eau" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Eau</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ water }}
                  </p>
                </div>
              </div>
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
