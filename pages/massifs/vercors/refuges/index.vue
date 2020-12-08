<template>
  <div>
    <h1>Refuges du vercors</h1>
    <div v-for="refuge in refuges" :key="refuge.title">
      <NuxtLink class="text-green-600 hover:text-green-700 inline-flex items-center mt-4" :to="{ name: 'massifs-vercors-refuges-slug', params: { slug: refuge.slug } }">
        {{ refuge.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const refuges = await $content('refuges/vercors', params.slug)
      .only(['title', 'description', 'category', 'slug', 'createdAt'])
      .fetch()

    return {
      refuges
    }
  }
}
</script>
