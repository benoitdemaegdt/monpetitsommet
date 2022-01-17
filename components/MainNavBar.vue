<template>
  <nav
    class="flex fixed w-full items-center justify-between px-6 h-12 bg-white text-gray-900 border-b border-gray-200 z-10"
  >
    <div class="flex items-center">
      <img class="h-10 w-10" src="/logo.png" alt="logo" />
      <NuxtLink class="ml-4" to="/"> Mon Petit Sommet </NuxtLink>
    </div>
    <div class="flex items-center">
      <nuxt-link to="/blog" class="px-2 py-1 rounded hover:bg-gray-200">
        Blog
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="px-2 py-1 ml-1 rounded hover:bg-gray-200 hidden md:flex"
      >
        Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
}
</script>
