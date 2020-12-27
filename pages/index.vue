<template>
  <div class="pt-12 w-full h-screen mx-auto flex flex-col justify-center items-center">
    <div class="w-full relative flex flex-col justify-center" style="height: 90%;">
      <nuxt-image v-if="!isMobile" src="/img/vercors.png" class="landing-image" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 backgound" :style="`height: ${isMobile ? 100 : 80}%;`">
        <div v-if="!isMobile" />
        <div class="flex flex-col justify-center px-2 lg:px-0">
          <h1 class="text-gray-100 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Préparez votre prochaine aventure en montagne
          </h1>
          <p class="mt-6 w-full lg:w-3/4 text-gray-100 text-base md:text-xl lg:text-2xl font-semibold">
            Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutMixin from '@/mixins/LayoutMixin.js'

export default {
  mixins: [LayoutMixin]
}
</script>

<style scoped>
.backgound {
  background-color: #1f374c;
}

.landing-image {
  position: absolute !important;
  top: 0;
  left: 10%;
  height: 100%;
  width: 35%;
}
</style>
