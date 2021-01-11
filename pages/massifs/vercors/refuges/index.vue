<template>
  <div class="pt-12 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <div class="col-span-7 mt-5 px-3">
        <p>{{ shacks.length }} refuges, cabanes ou abris référencés dans ce massif</p>
        <h1 class="text-4xl text-gray-900 font-bold leading-tight">
          Refuges du vercors
        </h1>
        <div v-for="shack in shacks" :key="shack.name">
          <NuxtLink :to="{ name: 'massifs-vercors-refuges-slug', params: { slug: shack.slug } }">
            <shack-card class="mt-3" :shack="shack" />
          </NuxtLink>
        </div>
      </div>
      <div class="col-span-5 pt-12 w-5/12 h-full fixed top-0 right-0">
        <shack-map :shacks="shacks" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const shacks = await $content('refuges/vercors', params.slug)
      .only([
        'name', 'type', 'img', 'altitude', 'beds', 'stove', 'water',
        'longitude', 'latitude', 'slug', 'createdAt'
      ])
      .fetch()

    return {
      shacks
    }
  }
}
</script>
