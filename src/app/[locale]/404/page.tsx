import { setRequestLocale } from 'next-intl/server'
import NotFoundPage from '@/features/system/pages/not-found-page'
import { routing } from '@/i18n/routing'
import { buildPageMetadata } from '@/shared/seo/metadata'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return buildPageMetadata({ locale, pageKey: 'home', noIndex: true })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <NotFoundPage />
}
