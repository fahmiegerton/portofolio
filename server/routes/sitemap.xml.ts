import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://fahmiegerton.vercel.com',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily',
    })
  }
  // add other pages like /about, /contact etc
  sitemap.write({
    url: '/',
    changefreq: 'daily',
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
