<template>
  <div class="pt-12">
    <h1>{{ refuge.title }}</h1>
    <nuxt-content :document="refuge" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const refuge = await $content('refuges/vercors', params.slug).fetch()

    return {
      refuge
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
