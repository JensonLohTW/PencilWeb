import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { LanguageToggle } from '@/components/elements/language-toggle'
import { Main } from '@/components/elements/main'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import { LanguageProvider } from '@/components/providers/language-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import {
  SwissFooter,
  SwissFooterCategory,
  SwissFooterLink,
  SwissSocialLink,
} from '@/components/sections/swiss/swiss-footer'
import {
  SwissNavbar,
  SwissNavbarLink,
  SwissNavbarLogo,
} from '@/components/sections/swiss/swiss-navbar'
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
      <body className="bg-white text-pencil-950">
        <ThemeProvider>
          <LanguageProvider>
            <SwissNavbar
              id="navbar"
              links={
                <>
                  <SwissNavbarLink href="/solutions" index="01">解決方案</SwissNavbarLink>
                  <SwissNavbarLink href="/projects" index="02">專案與能力</SwissNavbarLink>
                  <SwissNavbarLink href="/technology" index="03">技術核心</SwissNavbarLink>
                  <SwissNavbarLink href="/about" index="04">關於我們</SwissNavbarLink>
                  <SwissNavbarLink href="/contact" index="05" className="sm:hidden">
                    聯絡我們
                  </SwissNavbarLink>
                </>
              }
              logo={<SwissNavbarLogo href="/" />}
              actions={
                <>
                  <LanguageToggle className="max-sm:hidden" />
                  <ThemeToggle className="max-sm:hidden" />
                  <PlainButtonLink
                    href="/contact"
                    className="max-sm:hidden text-pencil-600 hover:text-pencil-950"
                  >
                    聯絡我們
                  </PlainButtonLink>
                  <ButtonLink
                    href="/contact"
                    className="border-2 border-pencil-950 bg-pencil-950 text-white hover:bg-cta hover:border-cta"
                  >
                    預約 Demo
                  </ButtonLink>
                </>
              }
            />

            <Main>{children}</Main>

            <SwissFooter
              id="footer"
              cta={
                <div className="space-y-8">
                  <p className="swiss-mono text-cta">READY TO START?</p>
                  <h3
                    className="text-pencil-950 dark:text-white"
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    準備好了嗎？
                  </h3>
                  <p className="max-w-md text-pencil-500">
                    把 AI 與 XR 融入真實場域，打造可落地的沉浸式互動與智慧空間體驗。
                  </p>
                  <ButtonLink
                    href="/contact"
                    className="inline-flex border-2 border-pencil-950 bg-pencil-950 text-white hover:bg-cta hover:border-cta"
                  >
                    預約 Demo →
                  </ButtonLink>
                </div>
              }
              links={
                <>
                  <SwissFooterCategory title="解決方案" index="01">
                    <SwissFooterLink href="/solutions#xr-training">VR/MR 沉浸式訓練</SwissFooterLink>
                    <SwissFooterLink href="/solutions#ar-visualization">AR 視覺化</SwissFooterLink>
                    <SwissFooterLink href="/solutions#smart-space">智慧空間 IoT</SwissFooterLink>
                    <SwissFooterLink href="/solutions#ai-for-sme">中小企業 AI 應用</SwissFooterLink>
                  </SwissFooterCategory>
                  <SwissFooterCategory title="專案與能力" index="02">
                    <SwissFooterLink href="/projects#flight-simulator">飛行模擬系統</SwissFooterLink>
                    <SwissFooterLink href="/projects#flight-training">飛行教育訓練</SwissFooterLink>
                    <SwissFooterLink href="/projects#data-integration">資料介接規劃</SwissFooterLink>
                    <SwissFooterLink href="/projects#ai-agent">AI Agent 系統</SwissFooterLink>
                  </SwissFooterCategory>
                  <SwissFooterCategory title="公司" index="03">
                    <SwissFooterLink href="/about">關於我們</SwissFooterLink>
                    <SwissFooterLink href="/technology">技術核心</SwissFooterLink>
                    <SwissFooterLink href="/contact">聯絡我們</SwissFooterLink>
                  </SwissFooterCategory>
                  <SwissFooterCategory title="法律" index="04">
                    <SwissFooterLink href="/privacy-policy">隱私權政策</SwissFooterLink>
                    <SwissFooterLink href="/terms">服務條款</SwissFooterLink>
                  </SwissFooterCategory>
                </>
              }
              fineprint={
                <>
                  <p>高雄市</p>
                  <p>© 2024 空間動態科技股份有限公司. All rights reserved.</p>
                </>
              }
              socialLinks={
                <>
                  <SwissSocialLink href="https://www.linkedin.com" name="LinkedIn">
                    <LinkedInIcon />
                  </SwissSocialLink>
                  <SwissSocialLink href="https://www.youtube.com" name="YouTube">
                    <YouTubeIcon />
                  </SwissSocialLink>
                </>
              }
            />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
