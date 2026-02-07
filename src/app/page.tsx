import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

import { VRIcon } from '@/components/icons/vr-icon'
import { ARIcon } from '@/components/icons/ar-icon'
import { SmartSpaceIcon } from '@/components/icons/smart-space-icon'
import { AIIcon } from '@/components/icons/ai-icon'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import { TechnologyHudGrid } from '@/components/sections/technology-hud-grid'
import { TrustClients } from '@/components/sections/trust-clients'
import { TestimonialsMarquee } from '@/components/sections/testimonials-marquee'
import { FaqSimple } from '@/components/sections/faq-simple'


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

      {/* Pain → Solution Section (Features) */}
      <div className="relative py-24 sm:py-32 bg-white dark:bg-pencil-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pencil-100/50 via-white to-white opacity-50 dark:from-pencil-900/50 dark:via-black dark:to-black" />

        <FeaturesThreeColumn
          id="solutions"
          headline={null} // FeaturesThreeColumn might expect headline, but we handle layout manually or pass content
          features={
            <>
              <div className="md:col-span-2 lg:col-span-3 text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-pencil-900 sm:text-4xl text-glow mb-4 dark:text-white">
                  從教育訓練到智慧空間<br className="hidden sm:inline" /> 全方位 XR × AI 解決方案
                </h2>
                <p className="text-lg leading-8 text-pencil-600 max-w-2xl mx-auto dark:text-pencil-400">
                  無論是提升訓練效率、強化現場資訊呈現、還是讓空間更智能，我們都能為您提供可落地的解決方案。
                </p>
              </div>

              <Feature
                icon={<VRIcon />}
                headline="沉浸式教育訓練"
                subheadline="透過 VR/MR 模擬真實場景，讓學員在零風險環境下反覆練習，提升操作安全性與記憶留存率。"
                cta={
                  <Link href="/solutions#xr-training" className="flex items-center text-sm font-bold text-cta hover:text-white uppercase tracking-wider font-mono">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                icon={<ARIcon />}
                headline="AR 現場視覺化"
                subheadline="將數位資訊疊加於真實世界，讓設備數據、導覽指引或維修步驟直觀呈現，實現數位孿生應用。"
                cta={
                  <Link href="/solutions#ar-visualization" className="flex items-center text-sm font-bold text-cta hover:text-white uppercase tracking-wider font-mono">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                icon={<SmartSpaceIcon />}
                headline="空間智慧化"
                subheadline="整合 IoT 感測器與互動裝置，賦予空間感知能力。打造會呼吸、能互動的未來建築與展演場域。"
                cta={
                  <Link href="/solutions#smart-space" className="flex items-center text-sm font-bold text-cta hover:text-white uppercase tracking-wider font-mono">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                icon={<AIIcon />}
                headline="企業 AI 應用"
                subheadline="專為企業打造的私有化 AI Agent 與 Knowledge Base。從自動化客服到文檔分析，讓 AI 成為您的最強大腦。"
                cta={
                  <Link href="/solutions#ai-for-sme" className="flex items-center text-sm font-bold text-pencil-900 hover:text-pencil-600 uppercase tracking-wider font-mono dark:text-white dark:hover:text-pencil-300">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
            </>
          }
        />
      </div>

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
