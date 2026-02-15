import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { siteMetadata, siteTypography } from '@/shared/config/site'
import { Main } from '@/shared/ui/elements/main'
import { Footer } from '@/widgets/layout/footer'
import { NavBar } from '@/widgets/layout/nav-bar'
import { AppProviders } from './providers'
import '../globals.css'

export const metadata = siteMetadata

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
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={siteTypography.googleFontsHref} rel="stylesheet" />
      </head>
      <body className="bg-white text-pencil-950" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
