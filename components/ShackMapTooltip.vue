<template>
  <div
    class="w-full mx-auto bg-white rounded-xl overflow-hidden cursor-pointer"
    @click="goToShack(shack)"
  >
    <img class="h-32 w-full object-cover md:w-64" :src="shack.img">
    <p class="pt-1 px-2 text-gray-800 font-medium">
      {{ shack.name }}
    </p>
    <div class="p-2 grid grid-cols-2 gap-2">
      <div class="flex items-center">
        <img src="/icons/mountain.png" class="h-5 w-5">
        <div class="ml-2">
          {{ shack.altitude }}m
        </div>
      </div>

      <div class="flex items-center">
        <img src="/icons/bed.png" class="h-5 w-5">
        <div class="ml-2">
          {{ shack.beds }} pers
        </div>
      </div>

      <div class="flex items-center">
        <img src="/icons/stove.png" class="h-5 w-5">
        <div class="ml-2">
          {{ shack.stove }}
        </div>
      </div>

      <div class="flex items-center">
        <img src="/icons/water.png" class="h-5 w-5">
        <div class="ml-2">
          {{ shack.water }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelperMixin from '@/mixins/HelperMixin.js'

export default {
  name: 'ShackMapTooltip',
  mixins: [HelperMixin],
  props: {
    shack: { type: Object, required: true },
    goToShack: { type: Function, required: true }
  }
}
</script>
