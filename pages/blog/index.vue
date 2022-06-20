<template>
  <div class="relative py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
      >
        <h2
          class="text-base font-semibold tracking-wider text-emerald-600 uppercase"
        >
          Blog
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
        >
          Derniers articles
        </p>
        <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
          Les articles 100% aventure de Mon Petit Sommet
        </p>
      </div>
      <div
        class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
      >
        <NuxtLink
          v-for="article in articles"
          :key="article.title"
          :to="article._path"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <div class="flex-shrink-0">
            <img
              class="h-52 w-full object-cover"
              :src="article.imageUrl"
              alt="cover image"
            />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="text-sm font-medium uppercase text-emerald-600">
                {{ article.category }}
              </div>
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ article.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ article.description }}
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <HomeNewsletterSection />
  </div>
</template>

<script setup>
const { data: articles } = await useAsyncData('articles', () => {
  return queryContent('/articles').find()
})
</script>
