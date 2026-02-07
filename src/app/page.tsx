import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

// Icons for solution cards
function VRIcon() {
  return (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
      />
    </svg>
  )
}

function ARIcon() {
  return (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function SmartSpaceIcon() {
  return (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
      />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  )
}

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
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-neon-600 dark:text-neon-400">XR_IMMERSIVE</span>
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-accent-600 dark:text-accent-400">AI_AGENT</span>
              <span className="hud-border-sm rounded px-3 py-1 text-xs font-mono text-pencil-900 dark:text-white">IOT_SENSORS</span>
            </div>
          </div>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ButtonLink href="/contact" size="lg" className="bg-neon-600 hover:bg-neon-500 text-white border-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
              預約 Demo
            </ButtonLink>
            <PlainButtonLink href="/solutions" size="lg" className="text-pencil-900 hover:text-neon-600 font-mono tracking-wide dark:text-white dark:hover:text-neon-400">
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
                  <Link href="/solutions#xr-training" className="flex items-center text-sm font-bold text-neon-400 hover:text-white uppercase tracking-wider font-mono">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                icon={<ARIcon />}
                headline="AR 現場視覺化"
                subheadline="將數位資訊疊加於真實世界，讓設備數據、導覽指引或維修步驟直觀呈現，實現數位孿生應用。"
                cta={
                  <Link href="/solutions#ar-visualization" className="flex items-center text-sm font-bold text-accent-400 hover:text-white uppercase tracking-wider font-mono">
                    Details <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                icon={<SmartSpaceIcon />}
                headline="空間智慧化"
                subheadline="整合 IoT 感測器與互動裝置，賦予空間感知能力。打造會呼吸、能互動的未來建築與展演場域。"
                cta={
                  <Link href="/solutions#smart-space" className="flex items-center text-sm font-bold text-neon-400 hover:text-white uppercase tracking-wider font-mono">
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

      {/* Projects Section */}
      <section id="projects" className="relative py-24 overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-neon-500/5 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-xs font-mono font-bold text-neon-600 uppercase tracking-widest mb-2 dark:text-neon-500">Projects</p>
            <h2 className="text-3xl font-bold tracking-tight text-pencil-900 sm:text-4xl dark:text-white">
              專案實績 Showcase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-neon-500/50 transition-all duration-300 group dark:border-white/5">
              <div className="mb-6 text-neon-600 dark:text-neon-500"><VRIcon /></div>
              <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-neon-600 dark:text-white dark:group-hover:text-neon-400">飛行模擬系統</h3>
              <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                高擬真度飛行模擬器開發，整合六軸動態平台與 VR 視覺，提供軍規級的沉浸式飛行訓練體驗。
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">UNITY</span>
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">VR</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-neon-500/50 transition-all duration-300 group dark:border-white/5">
              <div className="mb-6 text-neon-600 dark:text-neon-500"><VRIcon /></div>
              <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-neon-600 dark:text-white dark:group-hover:text-neon-400">飛行教育訓練</h3>
              <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                結合 LMS 系統與 VR 技術，建立完整的飛行員培訓考核機制，實現訓練數據化與視覺化。
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">LMS</span>
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">DATA</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="glass-panel p-8 rounded-2xl border-black/5 hover:border-accent-500/50 transition-all duration-300 group dark:border-white/5">
              <div className="mb-6 text-accent-600 dark:text-accent-500"><AIIcon /></div>
              <h3 className="text-xl font-bold text-pencil-900 mb-3 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">AI 企業查詢</h3>
              <p className="text-pencil-600 mb-6 text-sm leading-relaxed dark:text-pencil-400">
                基於 RAG 技術的企業級 AI 知識庫，讓員工用自然語言即可查詢複雜的內部規章與技術文件。
              </p>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">LLM</span>
                <span className="text-[10px] font-mono border border-black/10 px-2 py-1 rounded text-pencil-600 dark:border-white/10 dark:text-pencil-500">RAG</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <PlainButtonLink href="/projects" className="text-pencil-600 hover:text-pencil-900 font-mono text-sm tracking-widest uppercase dark:text-pencil-500 dark:hover:text-white">
              // View All Projects
            </PlainButtonLink>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-24 bg-pencil-900 overflow-hidden dark:bg-black">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none opacity-50" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">OASIS 願景</h2>
            <p className="text-pencil-400">整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Tech Stats / Cards */}
            {['XR Core', 'Omni-Move', 'Haptics', 'AI Brain', '5G Link', 'Sensory'].map((item, i) => (
              <div key={i} className="hud-border bg-black/50 p-6 rounded flex flex-col items-center justify-center text-center aspect-square hover:bg-neon-500/10 transition-colors cursor-default">
                <span className="text-xs font-mono text-pencil-500 mb-2">SYSTEM_0{i + 1}</span>
                <span className="font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  )
}
