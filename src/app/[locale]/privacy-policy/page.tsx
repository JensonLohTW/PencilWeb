import { setRequestLocale } from 'next-intl/server'
import PrivacyPolicyPage from '@/features/legal/pages/privacy-policy-page'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <PrivacyPolicyPage />
}
