export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'monpetitsommet-v2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  sitemap: {
    hostname: 'https://monpetitsommet.fr/',
    gzip: true,
    routes() {
      return getRoutes()
    },
  },

  image: {
    sizes: [320, 420, 768, 1024],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/monpetitsommet/image/upload/',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    NUXT_ENV_MAPBOX_GL_TOKEN:
      'pk.eyJ1IjoiYmVub2l0ZGVtYWVnZHQiLCJhIjoiY2s5dnBwaWV5MDFmdjNmazZ1dGFjNDBoYyJ9.0LPj3EUfQdPOQh-S41Sn4A',
  },
}

async function getRoutes() {
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles')
    .only(['slug', 'updatedAt'])
    .fetch()
  const randonnees = await $content('randonnees')
    .only(['slug', 'updatedAt'])
    .fetch()
  const refuges = await $content('refuges').only(['slug', 'updatedAt']).fetch()

  return [
    ...articles.map((article) => ({
      url: 'blog/' + article.slug.replace('index', ''),
      lastmod: Date.parse(article.updatedAt),
    })),
    ...randonnees.map((randonnee) => ({
      url: 'randonnees/' + randonnee.slug.replace('index', ''),
      lastmod: Date.parse(randonnee.updatedAt),
    })),
    ...refuges.map((refuge) => ({
      url: 'refuges/' + refuge.slug.replace('index', ''),
      lastmod: Date.parse(refuge.updatedAt),
    })),
  ]
}
