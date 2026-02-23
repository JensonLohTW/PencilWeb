import type { Metadata } from 'next'
import {
  buildLocaleRoutePath,
  getSiteUrl,
  OG_LOCALE_BY_LOCALE,
  PAGE_PATH_BY_KEY,
  SEO_KEYWORDS_BY_LOCALE,
  seoConfig,
  type SeoLocale,
  type SeoPageKey,
  normalizeSeoLocale,
  toAbsoluteUrl,
} from './config'

type JsonRecord = Record<string, unknown>
type SeoCopy = { title: string; description: string }

const PAGE_MESSAGE_KEY_BY_PAGE: Record<SeoPageKey, string> = {
  home: 'home',
  solutions: 'solutions',
  projects: 'projects',
  technology: 'technology',
  about: 'about',
  contact: 'contact',
  privacy: 'privacy',
  terms: 'terms',
}

const FALLBACK_COPY_BY_LOCALE: Record<SeoLocale, SeoCopy> = {
  'zh-TW': {
    title: '空間動態科技 Pencil｜XR（VR/AR/MR）× AI × 智慧空間解決方案',
    description: '整合 XR、AI 與智慧空間 IoT，提供可落地的沉浸式互動與企業數位轉型解決方案。',
  },
  en: {
    title: 'Pencil Spatial Dynamics | XR, AI, and Smart Space Solutions',
    description: 'Deployable XR, AI, and smart-space IoT solutions for immersive interaction and measurable business outcomes.',
  },
  ja: {
    title: 'Pencil Spatial Dynamics | XR・AI・スマートスペースソリューション',
    description: 'XR・AI・スマートスペース IoT を統合し、実装可能な没入型体験と事業成果を実現します。',
  },
}

function asRecord(value: unknown): JsonRecord | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return null
  }
  return value as JsonRecord
}

function asString(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0 ? value : null
}

async function getLocaleMessages(locale: SeoLocale) {
  const localeModule = await import(`../i18n/locales/${locale}.json`)
  return localeModule.default as JsonRecord
}

function getPageRecord(messages: JsonRecord, pageKey: SeoPageKey) {
  const pages = asRecord(messages.pages)
  if (!pages) return null
  return asRecord(pages[PAGE_MESSAGE_KEY_BY_PAGE[pageKey]])
}

function resolveSeoCopyFromPage(page: JsonRecord | null, fallback: SeoCopy) {
  if (!page) return fallback

  const metadata = asRecord(page.metadata)
  const metadataTitle = asString(metadata?.title)
  const metadataDescription = asString(metadata?.description)
  if (metadataTitle && metadataDescription) {
    return { title: metadataTitle, description: metadataDescription }
  }

  const hero = asRecord(page.hero)
  const heroTitle = asString(hero?.headline) ?? asString(hero?.title)
  const heroDescription = asString(hero?.subheadline) ?? asString(hero?.description)

  return {
    title: heroTitle ?? fallback.title,
    description: heroDescription ?? fallback.description,
  }
}

function getLanguageAlternates(pagePath: string) {
  const languages: Record<string, string> = {}
  for (const locale of seoConfig.localeMap) {
    languages[locale] = toAbsoluteUrl(buildLocaleRoutePath(locale, pagePath))
  }
  languages['x-default'] = toAbsoluteUrl(buildLocaleRoutePath(seoConfig.defaultLocale, pagePath))
  return languages
}

function buildRobots(noIndex: boolean): Metadata['robots'] {
  if (noIndex) {
    return {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }
}

export async function buildPageMetadata({
  locale,
  pageKey,
  imagePath,
  noIndex = false,
}: {
  locale: string
  pageKey: SeoPageKey
  imagePath?: string
  noIndex?: boolean
}): Promise<Metadata> {
  const normalizedLocale = normalizeSeoLocale(locale)
  const fallbackCopy = FALLBACK_COPY_BY_LOCALE[normalizedLocale]
  const messages = await getLocaleMessages(normalizedLocale)
  const pageRecord = getPageRecord(messages, pageKey)
  const copy = resolveSeoCopyFromPage(pageRecord, fallbackCopy)

  const pagePath = PAGE_PATH_BY_KEY[pageKey]
  const localizedPath = buildLocaleRoutePath(normalizedLocale, pagePath)
  const canonicalUrl = toAbsoluteUrl(localizedPath)
  const resolvedImagePath = imagePath ?? seoConfig.defaultOgImagePath
  const imageUrl = toAbsoluteUrl(resolvedImagePath)

  return {
    title: copy.title,
    description: copy.description,
    keywords: SEO_KEYWORDS_BY_LOCALE[normalizedLocale],
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(pagePath),
    },
    openGraph: {
      type: 'website',
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: OG_LOCALE_BY_LOCALE[normalizedLocale],
      images: [
        {
          url: imageUrl,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [imageUrl],
    },
    robots: buildRobots(noIndex),
  }
}

export function buildRootMetadata(): Metadata {
  const copy = FALLBACK_COPY_BY_LOCALE[seoConfig.defaultLocale]
  const defaultPath = buildLocaleRoutePath(seoConfig.defaultLocale, '/')
  const canonicalUrl = toAbsoluteUrl(defaultPath)
  const imageUrl = toAbsoluteUrl(seoConfig.defaultOgImagePath)

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: copy.title,
      template: '%s | Pencil Spatial Dynamics',
    },
    description: copy.description,
    applicationName: seoConfig.siteName,
    category: 'technology',
    keywords: SEO_KEYWORDS_BY_LOCALE[seoConfig.defaultLocale],
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates('/'),
    },
    openGraph: {
      type: 'website',
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      locale: OG_LOCALE_BY_LOCALE[seoConfig.defaultLocale],
      images: [
        {
          url: imageUrl,
          alt: copy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [imageUrl],
    },
    robots: buildRobots(false),
  }
}
