import getRoutes from './utils/getRoutes'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'monpetitsommet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Sitemap
  sitemap: {
    hostname: 'https://dev.monpetitsommet.fr', // TO CHANGE
    routes () {
      return getRoutes()
    }
  },

  // Image
  image: {
    sizes: [320, 420, 768, 1024],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/monpetitsommet/image/upload/'
    }
  },

  // Tailwind
  tailwindcss: {
    jit: true
  },

  // env
  env: {
    NUXT_ENV_MAPBOX_GL_TOKEN: 'pk.eyJ1IjoiYmVub2l0ZGVtYWVnZHQiLCJhIjoiY2s5dnBwaWV5MDFmdjNmazZ1dGFjNDBoYyJ9.0LPj3EUfQdPOQh-S41Sn4A'
  }
}
