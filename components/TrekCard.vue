<template>
  <div
    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <nuxt-img
      provider="cloudinary"
      :src="trek.img"
      :alt="trek.caption"
      class="rounded-t-lg"
    />
    <div class="px-4 py-4">
      <div class="text-xs title-font text-gray-600 tracking-widest">
        {{ trek.from.toUpperCase() }} &rarr; {{ trek.to.toUpperCase() }}
      </div>
      <div class="text-gray-800 font-semibold text-xl mb-2">
        {{ trek.title }}
      </div>
      <div class="py-3 grid grid-cols-2 gap-4 text-sm text-gray-800">
        <div class="flex items-center">
          <nuxt-img
            src="/icons/distance.png"
            alt="icone distance"
            class="h-5 w-5"
          />
          <div class="ml-2">
            <span class="hidden sm:inline">Distance : </span
            >{{ Math.round(trek.distance) }} km
          </div>
        </div>

        <div class="flex items-center">
          <nuxt-img src="/icons/temps.png" alt="icone temps" class="h-5 w-5" />
          <div class="ml-2">
            <span class="hidden sm:inline">Durée : </span>{{ trek.duration }}
          </div>
        </div>

        <div class="flex items-center">
          <nuxt-img
            src="/icons/mountain.png"
            alt="icone montagne"
            class="h-5 w-5"
          />
          <div class="ml-2">D+ : {{ Math.round(trek.elevation) }} m</div>
        </div>

        <div class="flex items-center">
          <nuxt-img
            src="/icons/hook.png"
            alt="icone difficulté"
            class="h-5 w-5"
          />
          <div class="ml-2">Cotation : {{ trek.difficulty }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrekCard',
  props: {
    trek: { type: Object, required: true },
  },
}
</script>
