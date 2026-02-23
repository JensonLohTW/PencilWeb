import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { RouteTransition } from '@/shared/ui/animations/route-transition'
import { Main } from '@/shared/ui/elements/main'

import { Footer } from '@/widgets/layout/footer'
import { NavBar } from '@/widgets/layout/nav-bar'
import { AppProviders } from './providers'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <AppProviders>
        <NavBar />
        <Main>
          <RouteTransition>{children}</RouteTransition>
        </Main>
        <Footer />

      </AppProviders>
    </NextIntlClientProvider>
  )
}
