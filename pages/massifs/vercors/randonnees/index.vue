<template>
  <div>
    <h1>Rando du vercors</h1>
    <div v-for="trek in treks" :key="trek.title">
      <NuxtLink class="text-green-600 hover:text-green-700 inline-flex items-center mt-4" :to="{ name: 'massifs-vercors-randonnees-slug', params: { slug: trek.slug } }">
        {{ trek.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const treks = await $content('randonnees/vercors', params.slug)
      .only(['title', 'description', 'category', 'slug', 'createdAt'])
      .fetch()

    return {
      treks
    }
  }
}
</script>

<style>

</style>
