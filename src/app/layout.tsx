import { siteMetadata, siteTypography } from '@/shared/config/site'
import { Main } from '@/shared/ui/elements/main'
import { Footer } from '@/widgets/layout/footer'
import { NavBar } from '@/widgets/layout/nav-bar'
import { AppProviders } from './providers'
import './globals.css'

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={siteTypography.googleFontsHref} rel="stylesheet" />
      </head>
      <body className="bg-white text-pencil-950" suppressHydrationWarning>
        <AppProviders>
          <NavBar />
          <Main>{children}</Main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  )
}
