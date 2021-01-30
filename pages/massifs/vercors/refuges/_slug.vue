<template>
  <div class="py-12 w-full sm:w-3/4 lg:w-1/2 px-2 mx-auto">
    <nuxt-img provider="cloudinary" :src="shack.img" :placeholder="true" class="mt-4 h-auto w-full rounded-lg" />
    <h1 class="mt-2 text-4xl text-gray-900 font-bold leading-tight">
      {{ shack.name }}
    </h1>
    <p class="text-xl text-gray-800">
      {{ shack.type }}
    </p>
    <nuxt-content class="mt-4" :document="shack" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const shack = await $content('refuges/vercors', params.slug).fetch()

    return {
      shack
    }
  }
}
</script>

<style>
  .nuxt-content h2 {
    @apply mt-2 text-3xl text-gray-900 font-semibold;
  }
  .nuxt-content h3 {
    @apply text-xl text-gray-900 font-semibold;
  }
  .nuxt-content p {
    @apply mb-2 text-gray-800 text-lg text-justify;
  }
  .nuxt-content a {
    @apply text-green-700 underline;
  }
</style>
