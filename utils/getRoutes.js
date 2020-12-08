export default async () => {
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles', { deep: true }).only(['slug']).fetch()
  const randonnees = await $content('randonnees', { deep: true }).only(['massif', 'slug']).fetch()
  const refuges = await $content('refuges', { deep: true }).only(['massif', 'slug']).fetch()

  return [
    ...articles.map(article => `/blog/${article.slug}`),
    ...randonnees.map(randonnee => `/massifs/${randonnee.massif}/randonnees/${randonnee.slug}`),
    ...refuges.map(refuge => `/massifs/${refuge.massif}/refuges/${refuge.slug}`)
  ]
}
