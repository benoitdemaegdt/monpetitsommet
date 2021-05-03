<template>
  <div class="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <div class="md:flex">
      <nuxt-img provider="cloudinary" :src="shack.img" :alt="shack.name" loading="lazy" class="md:flex-shrink-0 h-48 w-full md:w-64 object-cover" />
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
            <nuxt-img src="/icons/mountain.png" alt="icone montagne" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Altitude : </span>{{ shack.altitude }}m
            </div>
          </div>
          <!-- beds -->
          <div class="flex items-center">
            <nuxt-img src="/icons/bed.png" alt="icone lit" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Capacité : </span>{{ shack.beds }} personnes
            </div>
          </div>
          <!-- stove -->
          <div class="flex items-center">
            <nuxt-img src="/icons/stove.png" alt="icone poêle" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Poêle : </span>{{ shack.stove | booleanToFrench }}
            </div>
          </div>
          <!-- water -->
          <div class="flex items-center">
            <nuxt-img src="/icons/water.png" alt="icone eau" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Eau : </span>{{ shack.water | booleanToFrench }}
            </div>
          </div>
          <!-- toilets -->
          <div class="flex items-center">
            <nuxt-img src="/icons/toilet.png" alt="icone toilettes" class="h-5 w-5" />
            <div class="ml-2">
              <span class="hidden sm:inline">Toilettes : </span>{{ shack.toilets | booleanToFrench }}
            </div>
          </div>
          <!-- wood -->
          <div class="flex items-center">
            <nuxt-img src="/icons/wood.png" alt="icone bois" class="h-5 w-5" />
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
