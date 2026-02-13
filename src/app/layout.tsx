import { Main } from '@/components/elements/main'
import { NavBar } from '@/components/layout/nav-bar'
import { Footer } from '@/components/layout/footer'
import { LanguageProvider } from '@/components/providers/language-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '空間動態科技 Pencil｜XR（VR/AR/MR）× AI × 智慧空間解決方案',
  description:
    '提供 VR/MR 沉浸式訓練、AR 視覺化與智慧空間 IoT 整合，並協助中小企業導入 AI Agent / AI Chat，打造可落地互動體驗。',
  keywords: 'VR 教育訓練, AR 解決方案, 智慧空間 IoT, AI agent, 沉浸式體驗, XR, VR, AR, MR',
}

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
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-pencil-950" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
