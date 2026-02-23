import { routing } from '@/i18n/routing'

export type SeoLocale = (typeof routing.locales)[number]
export type SeoPageKey = 'home' | 'solutions' | 'projects' | 'technology' | 'about' | 'contact' | 'privacy' | 'terms'

type LocaleCodeMap = Record<SeoLocale, string>

const FALLBACK_SITE_URL = 'https://jeeshyang.github.io/PencilWeb'
const DEFAULT_OG_IMAGE_PATH = '/img/photos/1.webp'

export const PAGE_PATH_BY_KEY: Record<SeoPageKey, string> = {
  home: '/',
  solutions: '/solutions',
  projects: '/projects',
  technology: '/technology',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms',
}

export const PAGE_KEYS: SeoPageKey[] = Object.keys(PAGE_PATH_BY_KEY) as SeoPageKey[]

export const OG_LOCALE_BY_LOCALE: LocaleCodeMap = {
  'zh-TW': 'zh_TW',
  en: 'en_US',
  ja: 'ja_JP',
}

export const SEO_KEYWORDS_BY_LOCALE: Record<SeoLocale, string[]> = {
  'zh-TW': ['XR', 'VR', 'AR', 'MR', 'AI Agent', '智慧空間 IoT', '沉浸式訓練', '空間動態科技'],
  en: ['XR', 'VR', 'AR', 'MR', 'AI Agent', 'Smart Space IoT', 'Immersive Training', 'Pencil Spatial Dynamics'],
  ja: ['XR', 'VR', 'AR', 'MR', 'AIエージェント', 'スマートスペース IoT', '没入型トレーニング', 'Pencil Spatial Dynamics'],
}

export const seoConfig = {
  siteName: 'Pencil Spatial Dynamics',
  localeMap: routing.locales,
  defaultLocale: routing.defaultLocale as SeoLocale,
  defaultOgImagePath: DEFAULT_OG_IMAGE_PATH,
} as const

function trimSlashes(input: string) {
  return input.replace(/^\/+|\/+$/g, '')
}

export function normalizeSeoLocale(locale: string): SeoLocale {
  return routing.locales.includes(locale as SeoLocale) ? (locale as SeoLocale) : seoConfig.defaultLocale
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL).replace(/\/+$/, '')
}

export function getSiteOrigin() {
  return new URL(getSiteUrl()).origin
}

function getSitePathPrefix() {
  const pathname = new URL(getSiteUrl()).pathname
  if (!pathname || pathname === '/') {
    return ''
  }
  return `/${trimSlashes(pathname)}`
}

export function withSitePrefix(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const prefix = getSitePathPrefix()

  if (!prefix) {
    return normalizedPath
  }
  if (normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)) {
    return normalizedPath
  }
  if (normalizedPath === '/') {
    return prefix
  }

  return `${prefix}${normalizedPath}`
}

export function toAbsoluteUrl(path: string) {
  return `${getSiteOrigin()}${withSitePrefix(path)}`
}

export function buildLocaleRoutePath(locale: SeoLocale, routePath: string) {
  const normalizedRoute = routePath === '/' ? '' : routePath
  return `/${locale}${normalizedRoute}`
}
