<template>
  <div class="pt-12">
    <h1>test</h1>
    <nuxt-content :document="trek" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const trek = await $content('randonnees/bauges', params.slug).fetch()

    return {
      trek
    }
  }
}
</script>

<style>

</style>
