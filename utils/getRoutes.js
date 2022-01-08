export default async () => {
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles')
    .only(['slug', 'updatedAt'])
    .fetch()
  const randonnees = await $content('randonnees')
    .only(['slug', 'updatedAt'])
    .fetch()
  const refuges = await $content('refuges')
    .only(['slug', 'updatedAt'])
    .fetch()

  return [
    ...articles.map(article => ({
      url: 'blog/' + article.slug.replace('index', ''),
      lastmod: Date.parse(article.updatedAt)
    })),
    ...randonnees.map(randonnee => ({
      url: 'randonnees/' + randonnee.slug.replace('index', ''),
      lastmod: Date.parse(randonnee.updatedAt)
    })),
    ...refuges.map(refuge => ({
      url: 'randonnees/' + refuge.slug.replace('index', ''),
      lastmod: Date.parse(refuge.updatedAt)
    }))
  ]
}
