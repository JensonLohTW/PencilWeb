import TechnologyPage from '@/features/marketing/pages/technology-page'
import { routing } from '@/i18n/routing'
import { buildLocalePageMetadata } from '@/shared/seo/page-metadata'
import { setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return buildLocalePageMetadata(params, 'technology', { imagePath: '/images/projects/delivery-rhythm.png' })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <TechnologyPage />
}
