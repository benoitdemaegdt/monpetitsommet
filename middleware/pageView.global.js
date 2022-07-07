export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return
  sendGtmPageView({ pagePath: to.path, pageTitle: to.name })
})

function sendGtmPageView({ pagePath, pageTitle }) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'Pageview', pagePath, pageTitle })
}
