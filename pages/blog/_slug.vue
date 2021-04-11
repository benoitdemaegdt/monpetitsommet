<template>
  <div class="max-w-3xl mx-auto px-4 py-14 sm:px-6 xl:max-w-5xl xl:px-0">
    <article class="xl:divide-y xl:divide-gray-300">
      <header class="pt-6 xl:pb-10">
        <div class="space-y-1 text-center">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl md:text-5xl leading-tight">
              {{ article.title }}
            </h1>
            <p class="text-gray-800 text-lg mt-4 text-left text-justify">
              {{ article.description }}
            </p>
            <div class="mt-4 flex justify-center">
              <nuxt-img provider="cloudinary" :src="article.img" class="h-52" />
            </div>
          </div>
        </div>
      </header>
      <div
        class="divide-y xl:divide-y-0 divide-gray-300 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20"
        style="grid-template-rows: auto 1fr;"
      >
        <div class="divide-y divide-gray-300 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div class="prose max-w-none py-8">
            <div class="mt-4">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
        <footer class="pr-4 text-sm font-medium leading-5 divide-y divide-gray-300 xl:col-start-1 xl:row-start-2">
          <div v-if="next || prev" class="space-y-8 py-8">
            <div v-if="next">
              <h2 class="text-xs tracking-wide uppercase text-gray-500">
                Article suivant
              </h2>
              <div class="text-green-600 hover:text-green-700">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: next.slug } }">
                  {{ next.title }}
                </NuxtLink>
              </div>
            </div>
            <div v-if="prev">
              <h2 class="text-xs tracking-wide uppercase text-gray-500">
                Article précédent
              </h2>
              <div class="text-green-600 hover:text-green-700">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
                  {{ prev.title }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="pt-8">
            <NuxtLink to="/blog">
              &larr; Retour au blog
            </NuxtLink>
          </div>
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
}
</script>

<style>
.nuxt-content h2 {
  color: #1a202c;
  font-weight: bold;
  font-size: 28px;
  margin-top: 8px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  @apply text-gray-800 text-lg;
}
.nuxt-content a {
  @apply text-green-700 underline;
}
</style>
