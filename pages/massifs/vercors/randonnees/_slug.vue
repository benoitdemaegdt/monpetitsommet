<template>
  <div>
    <h1>test</h1>
    <nuxt-content :document="trek" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const trek = await $content('randonnees/vercors', params.slug).fetch()

    return {
      trek
    }
  }
}
</script>

<style>
  .nuxt-content h2 {
    color: #1a202c;
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    @apply text-gray-800 text-lg;
  }
</style>
