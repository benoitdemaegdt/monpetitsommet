const TITLE = 'Mon Petit Sommet'
const BASE_URL = 'https://monpetitsommet.fr'
const DESCRIPTION =
  "Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables."
const COVER_IMAGE_URL = `https://res.cloudinary.com/monpetitsommet/image/upload/v1604305406/vercors/randonnees/traversee-vercors-balcon-est/intro_xhbx3y.png`

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: TITLE,
      meta: [
        { hid: 'description', name: 'description', content: DESCRIPTION },
        // facebook
        { property: 'og:site_name', content: TITLE },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: BASE_URL },
        { hid: 'og:title', property: 'og:title', content: TITLE },
        {
          hid: 'og:description',
          property: 'og:description',
          content: DESCRIPTION,
        },
        { hid: 'og:image', property: 'og:image', content: COVER_IMAGE_URL },
        { property: 'og:image:width', content: '640' },
        { property: 'og:image:height', content: '476' },
        // twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:url', name: 'twitter:url', content: BASE_URL },
        { hid: 'twitter:title', name: 'twitter:title', content: TITLE },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: DESCRIPTION,
        },
        { hid: 'twitter:image', name: 'twitter:image', content: COVER_IMAGE_URL },
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.ico' },
        { hid: 'canonical', rel: 'canonical', href: BASE_URL },
      ],
      script: [
        // GTM
        {
          hid: 'gtm',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K948G5R');`,
          type: 'text/javascript',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      ignApiKey: process.env.NUXT_IGN_API_KEY,
    },
  },
  nitro: {
    prerender: { routes: ['/sitemap.xml'] },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon'],
  content: {
    markdown: {
      tags: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' },
    },
  },
  tailwindcss: { viewer: false },
  build: {
    transpile: ['lite-youtube-embed', '@headlessui/vue'],
  },
  plugins: ['~/plugins/youtube.client.js'],
  css: ['lite-youtube-embed/src/lite-yt-embed.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    },
  },
})
