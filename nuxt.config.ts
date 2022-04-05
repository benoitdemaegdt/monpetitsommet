import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: [
      '@heroicons/vue', // https://github.com/tailwindlabs/heroicons/issues/564
      '@headlessui/vue', // https://github.com/tailwindlabs/headlessui/issues/982
    ],
  },
})
