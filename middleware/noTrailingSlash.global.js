import { withoutTrailingSlash } from 'ufo'

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.endsWith('/') && to.path !== '/') {
    return navigateTo(withoutTrailingSlash(to.path, true), { redirectCode: 301 })
  }
})
