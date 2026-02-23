import type { Metadata } from 'next'
import type { SeoPageKey } from './config'
import { buildPageMetadata } from './metadata'

type RouteParams = Promise<{ locale: string }>

export async function buildLocalePageMetadata(
  params: RouteParams,
  pageKey: SeoPageKey,
  options?: { imagePath?: string; noIndex?: boolean }
): Promise<Metadata> {
  const { locale } = await params
  return buildPageMetadata({
    locale,
    pageKey,
    imagePath: options?.imagePath,
    noIndex: options?.noIndex,
  })
}
