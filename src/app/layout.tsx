import type { PropsWithChildren } from 'react'
import type { Viewport } from 'next'
import { siteMetadata, siteTypography } from '@/shared/config/site'
import './globals.css'

export const metadata = siteMetadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={siteTypography.googleFontsHref} rel="stylesheet" />
      </head>
      <body className="bg-white text-pencil-950" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
