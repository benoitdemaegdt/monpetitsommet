<template>
  <div class="text-gray-700 body-font overflow-hidden">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Derniers articles
        </h1>
        <p class="text-lg leading-7 text-gray-600">
          Les derniers articles 100% aventure de Mon Petit Sommet
        </p>
      </div>
      <div>
        <div v-for="article of articles" :key="article.slug" class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="tracking-widest font-medium title-font text-gray-900 uppercase">{{ article.category }}</span>
            <span class="mt-1 text-gray-500 text-sm">{{ formatDate(article.createdAt) }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ article.title }}
            </h2>
            <p class="leading-relaxed">
              {{ article.description }}
            </p>
            <NuxtLink class="text-green-600 hover:text-green-700 inline-flex items-center mt-4" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              Lire l'article
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <!-- <a >Lire l'article
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'category', 'slug', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
}
</script>
