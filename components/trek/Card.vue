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
                src="/icons/distance.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">Distance: {{ distance }}</div>
            </div>
            <div class="flex items-center">
              <img
                src="/icons/temps.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">Durée: {{ duration }}</div>
            </div>
            <div class="flex items-center">
              <img
                src="/icons/mountain.png"
                alt="icone montagne"
                class="h-5 w-5"
              />
              <div class="ml-2">D+: {{ elevation }}</div>
            </div>
            <div class="flex items-center">
              <img src="/icons/hook.png" alt="icone montagne" class="h-5 w-5" />
              <div class="ml-2">Cotation: {{ difficulty }}</div>
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
      path: props.trek.path,
      imageUrl: props.trek.imageUrl,
      distance: `${props.trek.distance}m`,
      duration: props.trek.duration,
      elevation: `${props.trek.elevation}m`,
      difficulty: props.trek.difficulty,
      from: props.trek.from,
      to: props.trek.to,
    }
  },
}
</script>
