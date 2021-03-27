<template>
  <div class="my-4 grid grid-cols-2 gap-4">
    <!-- altitude -->
    <div v-if="altitude !== undefined" class="flex items-center">
      <nuxt-img src="/icons/mountain.png" class="h-5 w-5" />
      <div class="ml-2">
        Altitude : {{ altitude }}m
      </div>
    </div>
    <!-- beds -->
    <div v-if="beds !== undefined" class="flex items-center">
      <nuxt-img src="/icons/bed.png" class="h-5 w-5" />
      <div class="ml-2">
        <span class="hidden sm:inline">Capacité : </span>{{ beds }} personnes
      </div>
    </div>
    <!-- coordinates -->
    <div v-if="longitude !== undefined && latitude !== undefined" class="flex items-center">
      <nuxt-img src="/icons/pin.png" class="h-5 w-5" />
      <div class="ml-2">
        <span class="hidden sm:inline">Long, Lat : </span>{{ longitude }}, {{ latitude }}
      </div>
    </div>
    <!-- matresses -->
    <div v-if="matresses !== undefined" class="flex items-center">
      <nuxt-img src="/icons/mattress.png" class="h-5 w-5" />
      <div class="ml-2">
        Matelas : {{ matresses }}
      </div>
    </div>
    <!-- blankets -->
    <div v-if="blankets !== undefined" class="flex items-center">
      <nuxt-img src="/icons/blanket.png" class="h-5 w-5" />
      <div class="ml-2">
        Couvertures : {{ blankets | booleanToFrench }}
      </div>
    </div>
    <!-- stove -->
    <div v-if="stove !== undefined" class="flex items-center">
      <nuxt-img src="/icons/stove.png" class="h-5 w-5" />
      <div class="ml-2">
        Poêle : {{ stove | booleanToFrench }}
      </div>
    </div>
    <!-- wood -->
    <div v-if="wood !== undefined" class="flex items-center">
      <nuxt-img src="/icons/wood.png" class="h-5 w-5" />
      <div class="ml-2">
        Bois : {{ wood | booleanToFrench }}
      </div>
    </div>
    <!-- water -->
    <div v-if="water !== undefined" class="flex items-center">
      <nuxt-img src="/icons/water.png" class="h-5 w-5" />
      <div class="ml-2">
        <span class="hidden sm:inline">Eau : </span>{{ water | booleanToFrench }}
      </div>
    </div>
    <!-- toilets -->
    <div v-if="toilets !== undefined" class="flex items-center">
      <nuxt-img src="/icons/toilet.png" class="h-5 w-5" />
      <div class="ml-2">
        Toilettes : {{ toilets | booleanToFrench }}
      </div>
    </div>
  </div>
</template>

<script>
import HelperMixin from '@/mixins/HelperMixin.js'

export default {
  name: 'Grid',
  mixins: [HelperMixin],
  props: {
    altitude: { type: Number, default: undefined },
    beds: { type: Number, default: undefined },
    longitude: { type: Number, default: undefined },
    latitude: { type: Number, default: undefined },
    matresses: { type: Number, default: undefined },
    blankets: { type: Boolean, default: undefined },
    stove: { type: Boolean, default: undefined },
    wood: { type: Boolean, default: undefined },
    water: { type: Boolean, default: undefined },
    toilets: { type: Boolean, default: undefined }
  }
}
</script>
