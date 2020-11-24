<template>
  <nav class="flex justify-between items-center py-10 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="text-2xl font-bold">
      <nuxt-link to="/blog">
        <span class="hidden sm:inline">Mon Petit Sommet</span><span class="hidden sm:inline text-green-600">&nbsp;|</span><span class="text-green-600">&nbsp;Le Blog</span>
      </nuxt-link>
    </div>
    <div class="text-base leading-5">
      <a href="https://monpetitsommet.fr" class="font-medium text-gray-600 hover:text-gray-800">
        monpetitsommet.fr &rarr;
      </a>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>
