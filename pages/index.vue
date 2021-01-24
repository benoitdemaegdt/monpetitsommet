<template>
  <div class="pt-12 w-full h-screen mx-auto">
    <div class="h-full w-11/12 mx-auto grid grid-cols-2">
      <div class="w-5/6 mx-auto flex flex-col justify-center">
        <h1 class="text-gray-800 text-5xl font-semibold leading-tight">
          Préparez votre prochaine aventure en montagne
        </h1>
        <p class="mt-4 text-gray-600 text-xl font-base">
          Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.
        </p>
        <div class="mt-6">
          <button class="text-white font-semibold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
            VOIR LES TOPOS &rarr;
          </button>
        </div>
      </div>
      <div class="py-8 flex justify-center">
        <nuxt-image v-if="!isMobile" :placeholder="true" :src="image" class="w-5/6 h-full rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: 'cloudinary:/w_900/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png'
  })
}
</script>
