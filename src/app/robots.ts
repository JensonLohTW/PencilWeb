import type { MetadataRoute } from 'next'
import { getSiteOrigin, toAbsoluteUrl } from '@/shared/seo/config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: toAbsoluteUrl('/sitemap.xml'),
    host: getSiteOrigin(),
  }
}
