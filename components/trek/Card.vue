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
                  src="/icons/distance.png"
                  alt="icone regle"
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
                  <p class="text-sm font-medium text-gray-900">Dénivelé +</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ elevation }}
                  </p>
                </div>
              </div>
            </div>

            <div class="relative flex items-center space-x-3">
              <div class="flex-shrink-0">
                <img
                  class="h-6 w-6"
                  src="/icons/hook.png"
                  alt="icone mousqueton"
                />
              </div>
              <div class="flex-1 min-w-0">
                <div>
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Cotation</p>
                  <p class="text-sm text-gray-500 truncate">
                    {{ difficulty }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap items-center justify-between gap-y-2">
            <div
              class="px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
            >
              {{ from }} &rarr; {{ to }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'TrekCard',
  props: ['trek'],
  setup(props) {
    return {
      name: props.trek.name,
      massif: props.trek.massif,
      path: props.trek._path,
      imageUrl: props.trek.imageUrl,
      distance: `${props.trek.distance}km`,
      duration: props.trek.duration,
      elevation: `${props.trek.elevation}m`,
      difficulty: props.trek.difficulty,
      from: props.trek.from,
      to: props.trek.to,
    }
  },
}
</script>
