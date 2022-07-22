import { defineNuxtConfig } from 'nuxt'

const TITLE = 'Mon Petit Sommet'
const BASE_URL = 'https://monpetitsommet.fr'
const DESCRIPTION =
  "Découvrez les topos détaillés d'aventures sportives en montagne. Parfois engagées. Souvent loin des foules. Toujours mémorables."
const COVER_IMAGE_URL = `${BASE_URL}/social.jpg`

export default defineNuxtConfig({
  meta: {
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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '~/modules/sitemap'],
  sitemap: { hostname: 'https://monpetitsommet.fr' },
  tailwindcss: { viewer: false },
  build: {
    transpile: [
      '@heroicons/vue', // https://github.com/tailwindlabs/heroicons/issues/564
      '@headlessui/vue', // https://github.com/tailwindlabs/headlessui/issues/982
      'lite-youtube-embed',
    ],
  },
  plugins: ['~/plugins/youtube.client.js'],
  css: ['~/node_modules/lite-youtube-embed/src/lite-yt-embed.css', 'leaflet/dist/leaflet.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lite-youtube'].includes(tag),
    },
  },
})
