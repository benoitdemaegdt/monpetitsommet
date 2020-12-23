<template>
  <div class="pt-12 w-full h-screen mx-auto flex flex-col justify-center items-center backgound">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex justify-center">
        <nuxt-image src="/img/vercors.png" class="w-3/4 h-auto object-cover object-center" />
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-gray-100 text-3xl md:text-4xl lg:text-5xl font-bold">
          Préparez votre prochaine aventure en montagne
        </h1>
        <p class="w-3/4 text-gray-100 text-base md:text-xl lg:text-2xl font-semibold">
          Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.backgound {
  background-color: #1f374c;
}
</style>
