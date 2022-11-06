import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

const BASE_URL = 'https://monpetitsommet.fr'
const STATIC_ENDPOINTS = [
  '/',
  '/alpinisme',
  '/blog',
  '/canoe-kayak',
  '/cgu',
  '/contact',
  '/randonnees',
  '/refuges',
  '/ski-de-rando',
]

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({ hostname: BASE_URL })
  for (const doc of docs) {
    sitemap.write({ url: doc._path, changefreq: 'monthly' })
  }
  for (const staticEndpoint of STATIC_ENDPOINTS) {
    sitemap.write({ url: staticEndpoint, changefreq: 'monthly' })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
