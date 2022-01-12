export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'fr' },
    title: 'Mon Petit Sommet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.",
      },
      // facebook
      { property: 'og:site_name', content: 'Mon Petit Sommet' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://monpetitsommet.fr/',
      },
      { hid: 'og:title', property: 'og:title', content: 'Mon Petit Sommet' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://res.cloudinary.com/monpetitsommet/image/upload/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://monpetitsommet.fr/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Mon Petit Sommet',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/monpetitsommet/image/upload/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { hid: 'canonical', rel: 'canonical', href: 'https://monpetitsommet.fr' },
    ],
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
