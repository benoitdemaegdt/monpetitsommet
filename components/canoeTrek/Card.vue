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
          {{ river }}
        </div>
        <div class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ name }}
          </p>
          <div class="mt-3 grid grid-cols-2 gap-4 text-base text-gray-500">
            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" src="/icons/pin.png" alt="icone pin" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Départ</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ from }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img class="h-6 w-6" src="/icons/flag.png" alt="icone pin" />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Arrivée</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ to }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-6 w-6"
                  src="/icons/distance.png"
                  alt="icone règle"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Distance</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ distance }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-6 w-6"
                  src="/icons/temps.png"
                  alt="icone montre"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Durée</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ duration }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CanoeTrekCard',
  props: ['canoeTrek'],
  setup(props) {
    return {
      name: props.canoeTrek.name,
      river: props.canoeTrek.river,
      path: props.canoeTrek._path,
      imageUrl: props.canoeTrek.imageUrl,
      distance: `${props.canoeTrek.distance}km`,
      duration: props.canoeTrek.duration,
      difficulty: props.canoeTrek.difficulty,
      from: props.canoeTrek.from,
      to: props.canoeTrek.to,
    }
  },
}
</script>
