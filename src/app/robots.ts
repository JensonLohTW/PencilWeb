import { getSiteOrigin, toAbsoluteUrl } from '@/shared/seo/config'
import type { MetadataRoute } from 'next'

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
