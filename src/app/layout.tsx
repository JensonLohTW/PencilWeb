import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { LinkedInIcon } from '@/components/icons/social/linkedin-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
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
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+TC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/solutions">解決方案</NavbarLink>
                <NavbarLink href="/projects">專案與能力</NavbarLink>
                <NavbarLink href="/technology">技術核心</NavbarLink>
                <NavbarLink href="/about">關於我們</NavbarLink>
                <NavbarLink href="/contact" className="sm:hidden">
                  聯絡我們
                </NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <span className="text-xl font-bold text-gradient-neon">Pencil</span>
              </NavbarLogo>
            }
            actions={
              <>
                <PlainButtonLink href="/contact" className="max-sm:hidden">
                  聯絡我們
                </PlainButtonLink>
                <ButtonLink href="/contact">預約 Demo</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-pencil-100">準備好了嗎？</h3>
                <p className="text-pencil-400">
                  把 AI 與 XR 融入真實場域，打造可落地的沉浸式互動與智慧空間體驗。
                </p>
                <ButtonLink href="/contact">預約 Demo</ButtonLink>
              </div>
            }
            links={
              <>
                <FooterCategory title="解決方案">
                  <FooterLink href="/solutions#xr-training">VR/MR 沉浸式訓練</FooterLink>
                  <FooterLink href="/solutions#ar-visualization">AR 視覺化</FooterLink>
                  <FooterLink href="/solutions#smart-space">智慧空間 IoT</FooterLink>
                  <FooterLink href="/solutions#ai-for-sme">中小企業 AI 應用</FooterLink>
                </FooterCategory>
                <FooterCategory title="專案與能力">
                  <FooterLink href="/projects#flight-simulator">飛行模擬系統</FooterLink>
                  <FooterLink href="/projects#flight-training">飛行教育訓練</FooterLink>
                  <FooterLink href="/projects#data-integration">資料介接規劃</FooterLink>
                  <FooterLink href="/projects#ai-agent">AI Agent 系統</FooterLink>
                </FooterCategory>
                <FooterCategory title="公司">
                  <FooterLink href="/about">關於我們</FooterLink>
                  <FooterLink href="/technology">技術核心</FooterLink>
                  <FooterLink href="/contact">聯絡我們</FooterLink>
                </FooterCategory>
                <FooterCategory title="法律">
                  <FooterLink href="/privacy-policy">隱私權政策</FooterLink>
                  <FooterLink href="/terms">服務條款</FooterLink>
                </FooterCategory>
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
                <SocialLink href="https://www.linkedin.com" name="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
                <SocialLink href="https://www.youtube.com" name="YouTube">
                  <YouTubeIcon />
                </SocialLink>
              </>
            }
          />
        </>
      </body>
    </html>
  )
}
