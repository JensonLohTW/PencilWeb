import type { MetadataRoute } from 'next'
import { buildLocaleRoutePath, PAGE_KEYS, PAGE_PATH_BY_KEY, seoConfig, toAbsoluteUrl } from '@/shared/seo/config'

export const dynamic = 'force-static'

const PAGE_CHANGE_FREQUENCY: Record<string, NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>> = {
  '/': 'weekly',
  '/solutions': 'weekly',
  '/projects': 'weekly',
  '/technology': 'weekly',
  '/about': 'monthly',
  '/contact': 'monthly',
  '/privacy-policy': 'yearly',
  '/terms': 'yearly',
}

const PAGE_PRIORITY: Record<string, number> = {
  '/': 1,
  '/solutions': 0.9,
  '/projects': 0.9,
  '/technology': 0.9,
  '/about': 0.8,
  '/contact': 0.8,
  '/privacy-policy': 0.4,
  '/terms': 0.4,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return seoConfig.localeMap.flatMap((locale) =>
    PAGE_KEYS.map((key) => {
      const pagePath = PAGE_PATH_BY_KEY[key]
      return {
        url: toAbsoluteUrl(buildLocaleRoutePath(locale, pagePath)),
        lastModified: now,
        changeFrequency: PAGE_CHANGE_FREQUENCY[pagePath] ?? 'monthly',
        priority: PAGE_PRIORITY[pagePath] ?? 0.7,
      }
    })
  )
}
