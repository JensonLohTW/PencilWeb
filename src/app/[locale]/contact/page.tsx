import { setRequestLocale } from 'next-intl/server'
import ContactPage from '@/features/contact/pages/contact-page'
import { routing } from '@/i18n/routing'
import { buildLocalePageMetadata } from '@/shared/seo/page-metadata'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  return buildLocalePageMetadata(params, 'contact')
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <ContactPage />
}
