<template>
  <div class="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-64" :src="shack.img">
      </div>
      <div class="px-4 pt-2 pb-4">
        <p class="text-sm text-gray-600">
          {{ shack.type }}
        </p>
        <div class="mt-1 uppercase tracking-wide text-base text-green-700 font-semibold">
          {{ shack.name }}
        </div>
        <div class="mt-2 grid grid-cols-2 gap-4">
          <!-- altitude -->
          <div class="flex items-center">
            <nuxt-image src="/icons/mountain.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Altitude : </span>{{ shack.altitude }}m
            </div>
          </div>
          <!-- beds -->
          <div class="flex items-center">
            <nuxt-image src="/icons/bed.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Capacité : </span>{{ shack.beds }} personnes
            </div>
          </div>
          <!-- stove -->
          <div class="flex items-center">
            <nuxt-image src="/icons/stove.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Poêle : </span>{{ shack.stove | booleanToFrench }}
            </div>
          </div>
          <!-- water -->
          <div class="flex items-center">
            <nuxt-image src="/icons/water.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Eau : </span>{{ shack.water | booleanToFrench }}
            </div>
          </div>
          <!-- toilets -->
          <div class="flex items-center">
            <nuxt-image src="/icons/toilet.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Toilettes : </span>{{ shack.toilets | booleanToFrench }}
            </div>
          </div>
          <!-- wood -->
          <div class="flex items-center">
            <nuxt-image src="/icons/wood.png" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Bois : </span>{{ shack.wood | booleanToFrench }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelperMixin from '@/mixins/HelperMixin.js'

export default {
  name: 'ShackCard',
  mixins: [HelperMixin],
  props: {
    shack: { type: Object, required: true }
  }
}
</script>
