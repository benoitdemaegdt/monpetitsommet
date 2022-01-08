<template>
  <div>
    <h1>Randonnées</h1>
    <ul>
      <li v-for="randonnee in randonnees" :key="randonnee.slug">
        <NuxtLink
          :to="{ name: 'randonnees-slug', params: { slug: randonnee.slug } }"
        >
          <div>
            <h2>{{ randonnee.title }}</h2>
            <p>{{ randonnee.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const randonnees = await $content('randonnees')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      randonnees
    }
  }
}
</script>
