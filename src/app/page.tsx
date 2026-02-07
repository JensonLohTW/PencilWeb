import { SwissHomeHero } from '@/components/sections/swiss/swiss-home-hero'
import { SwissHomeSolutions } from '@/components/sections/swiss/swiss-home-solutions'
import { SwissTrustClients } from '@/components/sections/swiss/swiss-trust-clients'
import { SwissHomeProjects } from '@/components/sections/swiss/swiss-home-projects'
import { SwissHomeTech } from '@/components/sections/swiss/swiss-home-tech'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <SwissHomeHero
        headline="一切空間的動態都來自於 Pencil"
        subheadline="我們將 AI 與 XR 技術注入真實場域，打造可落地的沉浸式互動與智慧空間體驗。"
      />

      {/* Solutions */}
      <SwissHomeSolutions />

      {/* Trust Clients */}
      <SwissTrustClients />

      {/* Projects */}
      <SwissHomeProjects />

      {/* Tech Stack */}
      <SwissHomeTech />

      {/* FAQ */}
      <SwissFAQ />

      {/* CTA */}
      <SwissCTA
        headline="Ready to Launch? 無論是 VR 訓練、AR 導覽、智慧空間或 AI 應用，我們都能為您打造可落地的解決方案。"
        ctaText="立即諮詢"
        ctaHref="/contact"
        secondaryText="探索解決方案"
        secondaryHref="/solutions"
      />
    </>
  )
}
