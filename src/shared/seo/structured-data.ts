import { footerNavigation } from '@/shared/config/navigation'
import { buildLocaleRoutePath, normalizeSeoLocale, seoConfig, toAbsoluteUrl } from './config'

type JsonLdNode = Record<string, unknown>

const SOCIAL_LINKS = footerNavigation.social
  .map((item) => item.href)
  .filter((href) => href.startsWith('https://'))

export function buildOrganizationJsonLd(): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.siteName,
    url: toAbsoluteUrl('/'),
    logo: toAbsoluteUrl('/img/logos/13-color-black-height-32.svg'),
    sameAs: SOCIAL_LINKS,
    description: 'XR、AI 與智慧空間 IoT 解決方案整合商，提供可落地的沉浸式互動系統。',
  }
}

export function buildWebSiteJsonLd(locale: string): JsonLdNode {
  const normalizedLocale = normalizeSeoLocale(locale)
  const localeUrl = toAbsoluteUrl(buildLocaleRoutePath(normalizedLocale, '/'))

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: localeUrl,
    inLanguage: normalizedLocale,
  }
}

export function buildDefaultSeoGraph(locale: string): JsonLdNode {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildOrganizationJsonLd(), buildWebSiteJsonLd(locale)],
  }
}
