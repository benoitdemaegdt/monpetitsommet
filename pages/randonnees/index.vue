<template>
  <div class="pt-12 pb-8 w-full">
    <h1 class="text-center uppercase text-4xl xl:text-5xl">Randonnees</h1>

    <div class="mt-4 md:mt-8 flex flex-wrap justify-evenly">
      <NuxtLink
        v-for="trek in treks"
        :key="trek.title"
        :to="{
          name: `randonnees-slug`,
          params: { slug: trek.slug },
        }"
        class="p-5 md:mt-0"
      >
        <TrekCard :trek="trek" />
      </NuxtLink>
    </div>

    <!-- <h1>Randonnees</h1>
    <ul>
      <li v-for="randonnee in randonnees" :key="randonnee.slug">
        <NuxtLink
          :to="{ name: 'randonnees-slug', params: { slug: randonnee.slug } }"
        >
          <img :src="randonnee.img" />
          <div>
            <h2>{{ randonnee.title }}</h2>
            <p>{{ randonnee.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const treks = await $content('randonnees')
      .only([
        'massif',
        'title',
        'img',
        'caption',
        'distance',
        'elevation',
        'duration',
        'difficulty',
        'from',
        'to',
        'slug',
      ])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      treks,
    }
  },
}
</script>
