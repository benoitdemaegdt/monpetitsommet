<template>
  <div>
    <h1>test</h1>
    <nuxt-content :document="trek" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const treks = await $content('randonnees', { deep: true })
      .where({ slug: params.slug })
      .fetch()

    if (treks.length === 0) {
      return error({ statusCode: 404, message: 'Oups, le GPS vous a égaré ...' })
    }

    return {
      trek: treks[0]
    }
  }
}
</script>

<style>

</style>
