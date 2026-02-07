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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        {/* Background Effects */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-neon-500 to-accent-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <HeroSimpleCentered
          id="hero"
          headline={
            <span className="text-glow">
              一切空間的動態
              <br className="max-sm:hidden" />
              都來自於 <span className="text-gradient-neon">Pencil</span>
            </span>
          }
          subheadline={
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-8 text-pencil-300 sm:text-xl">
                把 AI 與 XR 融入真實場域，打造可落地的沉浸式互動與智慧空間體驗。
              </p>
              <div className="glass-panel mx-auto flex max-w-fit items-center gap-4 rounded-full px-6 py-2 text-sm text-pencil-200">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neon-500 shadow-[0_0_10px_var(--color-neon-500)]" /> XR
                </span>
                <span className="h-4 w-px bg-pencil-700" />
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-500 shadow-[0_0_10px_var(--color-accent-500)]" /> AI
                </span>
                <span className="h-4 w-px bg-pencil-700" />
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_white]" /> Smart Space
                </span>
              </div>
            </div>
          }
          cta={
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact" size="lg" className="glow-neon border-neon-500/50 bg-neon-500/10 text-neon-400 hover:bg-neon-500/20">
                預約 Demo
              </ButtonLink>
              <PlainButtonLink href="/solutions" size="lg" className="text-pencil-300 hover:text-pencil-100">
                探索解決方案 <ArrowNarrowRightIcon />
              </PlainButtonLink>
            </div>
          }
        />

        {/* Bottom Background Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-neon-500 to-accent-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* Pain → Solution Section (Features) */}
      <div className="relative py-24 sm:py-32">
        <FeaturesThreeColumn
          id="pain-solution"
          eyebrow={<span className="text-accent-400 text-glow">Solutions</span>}
          headline={
            <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
              從教育訓練到智慧空間<br className="hidden sm:inline" /> 全方位 XR × AI 解決方案
            </span>
          }
          subheadline={
            <p className="text-lg leading-8 text-pencil-300">
              無論是提升訓練效率、強化現場資訊呈現、還是讓空間更智能，我們都能為您提供可落地的解決方案。
            </p>
          }
          features={
            <>
              <Feature
                className="glass-card card-hover rounded-2xl p-8"
                icon={<div className="mb-4 inline-flex rounded-lg bg-neon-500/10 p-3 text-neon-400 shadow-[0_0_15px_var(--color-neon-500)_inset]"><VRIcon /></div>}
                headline={<span className="text-xl font-semibold text-white">沉浸式教育訓練</span>}
                subheadline={
                  <p className="mt-4 leading-7 text-pencil-400">
                    透過 <span className="text-neon-400">VR/MR</span> 模擬真實場景，讓學員在零風險環境下反覆練習，提升操作安全性與記憶留存率。
                  </p>
                }
                cta={
                  <Link href="/solutions#xr-training" className="mt-6 flex items-center text-sm font-semibold leading-6 text-neon-400 hover:text-neon-300">
                    了解更多 <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                className="glass-card card-hover rounded-2xl p-8"
                icon={<div className="mb-4 inline-flex rounded-lg bg-accent-500/10 p-3 text-accent-400 shadow-[0_0_15px_var(--color-accent-500)_inset]"><ARIcon /></div>}
                headline={<span className="text-xl font-semibold text-white">AR 現場視覺化</span>}
                subheadline={
                  <p className="mt-4 leading-7 text-pencil-400">
                    將數位資訊疊加於真實世界，讓設備數據、導覽指引或維修步驟直觀呈現，實現<span className="text-accent-400">數位孿生</span>落地應用。
                  </p>
                }
                cta={
                  <Link href="/solutions#ar-visualization" className="mt-6 flex items-center text-sm font-semibold leading-6 text-accent-400 hover:text-accent-300">
                    了解更多 <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                className="glass-card card-hover rounded-2xl p-8"
                icon={<div className="mb-4 inline-flex rounded-lg bg-neon-500/10 p-3 text-neon-400 shadow-[0_0_15px_var(--color-neon-500)_inset]"><SmartSpaceIcon /></div>}
                headline={<span className="text-xl font-semibold text-white">空間智慧化</span>}
                subheadline={
                  <p className="mt-4 leading-7 text-pencil-400">
                    整合 IoT 感測器與互動裝置，賦予空間感知能力。打造會呼吸、能互動的<span className="text-neon-400">未來建築</span>與展演場域。
                  </p>
                }
                cta={
                  <Link href="/solutions#smart-space" className="mt-6 flex items-center text-sm font-semibold leading-6 text-neon-400 hover:text-neon-300">
                    了解更多 <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
              <Feature
                className="glass-card card-hover rounded-2xl p-8"
                icon={<div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 text-white shadow-[0_0_15px_white_inset]"><AIIcon /></div>}
                headline={<span className="text-xl font-semibold text-white">企業 AI 應用</span>}
                subheadline={
                  <p className="mt-4 leading-7 text-pencil-400">
                    專為企業打造的私有化 AI Agent 與 Knowledge Base。從自動化客服到文檔分析，讓 AI 成為您的<span className="text-white">最強大腦</span>。
                  </p>
                }
                cta={
                  <Link href="/solutions#ai-for-sme" className="mt-6 flex items-center text-sm font-semibold leading-6 text-white hover:text-pencil-300">
                    了解更多 <ArrowNarrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
            </>
          }
        />
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/20 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-neon-400 text-glow">Projects</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              專案實績 Showcase
            </h2>
            <p className="mt-4 text-pencil-300 text-lg">
              從飛行模擬到 AI 系統，我們致力於將前瞻技術轉化為實際價值。
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {/* Project Card 1 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-pencil-800 bg-pencil-900/40 p-8 transition-all duration-300 hover:scale-105 hover:border-neon-500/50 hover:bg-pencil-900/60 hover:shadow-2xl hover:shadow-neon-500/20">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-neon-500/10 text-neon-400 shadow-[0_0_15px_var(--color-neon-500)_inset]">
                <VRIcon />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-400 transition-colors">飛行模擬系統</h3>
              <p className="mt-3 flex-1 text-base text-pencil-400 group-hover:text-pencil-300">
                高擬真度飛行模擬器開發，整合六軸動態平台與 VR 視覺，提供軍規級的沉浸式飛行訓練體驗。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">VR</span>
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">Unity</span>
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">硬體整合</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-pencil-800 bg-pencil-900/40 p-8 transition-all duration-300 hover:scale-105 hover:border-neon-500/50 hover:bg-pencil-900/60 hover:shadow-2xl hover:shadow-neon-500/20">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-neon-500/10 text-neon-400 shadow-[0_0_15px_var(--color-neon-500)_inset]">
                <VRIcon />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-400 transition-colors">飛行教育訓練課程</h3>
              <p className="mt-3 flex-1 text-base text-pencil-400 group-hover:text-pencil-300">
                結合 LMS 系統與 VR 技術，建立完整的飛行員培訓考核機制，實現訓練數據化與視覺化。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">LMS</span>
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">VR</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-pencil-800 bg-pencil-900/40 p-8 transition-all duration-300 hover:scale-105 hover:border-accent-500/50 hover:bg-pencil-900/60 hover:shadow-2xl hover:shadow-accent-500/20">
              <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 shadow-[0_0_15px_var(--color-accent-500)_inset]">
                <AIIcon />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">AI Agent 企業查詢系統</h3>
              <p className="mt-3 flex-1 text-base text-pencil-400 group-hover:text-pencil-300">
                基於 RAG 技術的企業級 AI 知識庫，讓員工用自然語言即可查詢複雜的內部規章與技術文件。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">LLM</span>
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">RAG</span>
                <span className="rounded-full border border-pencil-700 bg-pencil-950/50 px-3 py-1 text-xs font-medium text-pencil-300 backdrop-blur-sm">Python</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <PlainButtonLink href="/projects" className="text-pencil-300 hover:text-white">
              查看更多專案 <ChevronIcon />
            </PlainButtonLink>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-pencil-900/20 backdrop-blur-sm -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-accent-400 text-glow">Core Technology</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              OASIS 願景：打造元宇宙互動體驗
            </h2>
            <p className="mt-4 text-pencil-400">
              整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，打造完整的沉浸式體驗堆疊。
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:mt-20 lg:max-w-4xl lg:grid-cols-3">
            {[
              { name: 'XR (VR/MR/XR)', desc: '沉浸式視覺體驗', color: 'neon' },
              { name: 'Omni-Treadmill', desc: '全向移動裝置整合', color: 'pencil' },
              { name: 'Haptics', desc: '觸覺回饋技術', color: 'pencil' },
              { name: 'AI & Big Data', desc: 'NPC、個人化、查詢', color: 'accent' },
              { name: '5G / 6G', desc: '低延遲高速傳輸', color: 'pencil' },
              { name: 'Multi-Sensory', desc: '五感互動體驗', color: 'pencil' },
            ].map((tech, index) => (
              <div
                key={index}
                className={`glass-card group flex flex-col items-center justify-center rounded-xl p-8 text-center transition-all hover:scale-105 hover:bg-pencil-900/80 ${tech.color === 'neon' ? 'hover:border-neon-500/50 hover:shadow-neon-500/20' :
                    tech.color === 'accent' ? 'hover:border-accent-500/50 hover:shadow-accent-500/20' :
                      'hover:border-pencil-500/50'
                  }`}
              >
                <h3 className={`text-lg font-bold text-white ${tech.color === 'neon' ? 'group-hover:text-neon-400' :
                    tech.color === 'accent' ? 'group-hover:text-accent-400' : ''
                  }`}>{tech.name}</h3>
                <p className="mt-2 text-sm text-pencil-400">{tech.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PlainButtonLink href="/technology" className="text-pencil-300 hover:text-white">
              了解技術核心 <ChevronIcon />
            </PlainButtonLink>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <div className="border-t border-pencil-800/50 bg-pencil-950/30">
        <FAQsTwoColumnAccordion id="faqs" headline="常見問題">
          <Faq
            id="faq-1"
            question="你們提供哪些類型的解決方案？"
            answer="我們提供四大類解決方案：VR/MR 沉浸式訓練、AR 視覺化、智慧空間 IoT 整合，以及中小企業 AI 應用導入。每個方案都可依據您的需求客製化。"
          />
          <Faq
            id="faq-2"
            question="導入 XR 或 AI 解決方案需要多長時間？"
            answer="視專案規模而定，一般 PoC 驗證約 1-3 個月，完整專案開發約 3-6 個月。我們會在需求訪談後提供詳細的時程規劃。"
          />
          <Faq
            id="faq-3"
            question="你們服務的產業範圍？"
            answer="我們服務範圍涵蓋教育訓練、航空、製造業、展演館、零售、以及各類需要智慧空間或 AI 應用的中小企業。"
          />
          <Faq
            id="faq-4"
            question="如何開始合作？"
            answer="您可以透過本站預約 Demo 或填寫需求表單，我們會在 2 個工作天內與您聯繫，安排需求訪談與方案建議。"
          />
        </FAQsTwoColumnAccordion>
      </div>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline={<span className="text-glow">準備好讓空間動起來了嗎？</span>}
        subheadline={
          <p className="text-pencil-300">
            無論是 VR 訓練、AR 導覽、智慧空間或 AI 應用，我們都能為您打造可落地的解決方案。
          </p>
        }
        cta={
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" size="lg" className="glow-neon border-neon-500/50 bg-neon-500/10 text-neon-400 hover:bg-neon-500/20">
              預約 Demo
            </ButtonLink>
            <PlainButtonLink href="/contact" size="lg" className="text-pencil-300 hover:text-white">
              填寫需求表單 <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </div>
  )
}
