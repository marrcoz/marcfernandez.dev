import type { MetadataRoute } from 'next'

import { baseURL } from 'app/types'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseURL}/sitemap.xml`,
  }
}
