import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { CallToActionSimple } from '@/components/sections/cta/call-to-action-simple'
import { SolutionsGrid } from '@/components/sections/features/solutions-grid'
import { HeroSimpleCentered } from '@/components/sections/hero/hero-simple-centered'

import { ProjectsGrid } from '@/components/sections/features/projects-grid'
import { TechnologyHudGrid } from '@/components/sections/features/technology-hud-grid'
import { TrustClients } from '@/components/sections/social-proof/trust-clients'
import { TestimonialsMarquee } from '@/components/sections/social-proof/testimonials-marquee'
import { FaqSimple } from '@/components/sections/faq/faq-simple'


export default function Page() {
  return (
    <div className="overflow-hidden bg-pencil-50 text-pencil-950 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <HeroSimpleCentered
        id="hero"
        eyebrow={
          <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-pencil-600 border border-black/10 dark:text-pencil-300 dark:border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-500"></span>
            </span>
            Pencil XR Solutions
          </div>
        }
        headline={
          <span className="text-glow-strong">
            一切空間的動態
            <br className="max-sm:hidden" />
            都來自於 <span className="text-gradient-neon">Pencil</span>
          </span>
        }
        subheadline={
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-pencil-600 sm:text-xl font-light tracking-wide dark:text-pencil-300">
              我們將 AI 與 XR 技術注入真實場域，<br className="hidden sm:inline" />打造可落地的沉浸式互動與智慧空間體驗。
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-cta dark:text-cta">XR_IMMERSIVE</span>
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-cta dark:text-cta">AI_AGENT</span>
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-pencil-900 dark:text-white">IOT_SENSORS</span>
            </div>
          </div>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ButtonLink href="/contact" size="lg" className="bg-cta hover:bg-cta/90 text-white border-0 shadow-[0_0_20px_rgba(196,104,47,0.4)] hover:shadow-[0_0_30px_rgba(196,104,47,0.6)] transition-all">
              預約 Demo
            </ButtonLink>
            <PlainButtonLink href="/solutions" size="lg" className="text-pencil-900 hover:text-cta font-mono tracking-wide dark:text-white dark:hover:text-cta">
              探索解決方案 &gt;
            </PlainButtonLink>
          </div>
        }
      />

      {/* Pro Max Solutions Section */}
      <SolutionsGrid className="bg-white dark:bg-pencil-950" />

      <TrustClients />

      <ProjectsGrid />

      <TechnologyHudGrid />

      <TestimonialsMarquee />

      <FaqSimple />

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline={<span className="text-glow-strong text-4xl sm:text-5xl">Ready to Launch?</span>}
        subheadline={
          <p className="text-pencil-600 text-lg max-w-xl mx-auto mt-6 dark:text-pencil-300">
            無論是 VR 訓練、AR 導覽、智慧空間或 AI 應用，我們都能為您打造可落地的解決方案。
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <ButtonLink href="/contact" size="lg" className="bg-pencil-900 text-white hover:bg-pencil-800 font-bold px-8 dark:bg-white dark:text-black dark:hover:bg-pencil-200">
              立即諮詢
            </ButtonLink>
          </div>
        }
      />
    </div >
  )
}
