import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Container } from '@/components/elements/container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於空間動態科技｜高雄｜XR × AI × 智慧空間團隊',
  description: '成立於 2024 年，專注 VR/AR/MR 與智慧空間、AI 應用落地，打造下一代互動體驗。',
}

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        headline={<span className="text-glow">關於<br />空間動態科技</span>}
        subheadline={
          <div className="flex flex-col gap-6 text-lg">
            <p className="text-pencil-300">
              成立於 2024 年 3 月，我們是一支專注於 <span className="text-neon-400 font-bold">XR × AI × 智慧空間</span> 的技術團隊。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-base">
              <div className="glass-panel px-6 py-3 rounded-full border-l-4 border-neon-500">
                使命：<span className="text-white font-semibold">提升互動體驗</span>
              </div>
              <div className="glass-panel px-6 py-3 rounded-full border-l-4 border-accent-500">
                願景：<span className="text-white font-semibold">讓一級玩家走入生活</span>
              </div>
            </div>
          </div>
        }
        cta={
          <ButtonLink href="/contact" size="lg" className="glow-neon">
            聯絡我們
          </ButtonLink>
        }
      />

      {/* What We Do */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pencil-950/50 to-transparent pointer-events-none" />
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">我們做什麼</h2>
            <p className="mt-4 text-pencil-300 text-lg">三大主軸，打造完整的沉浸式互動體驗。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'VR 虛擬實境',
                desc: '透過 VR 技術打造高擬真度的沉浸式訓練與體驗環境，適用於教育訓練、模擬操作與娛樂體驗。',
                icon: '🎮',
                color: 'text-neon-400',
                border: 'hover:border-neon-500'
              },
              {
                title: 'AR 擴增實境',
                desc: '將數位資訊精準疊加到真實環境，讓導覽、展示與維修輔助更加直觀且高效。',
                icon: '👁️',
                color: 'text-accent-400',
                border: 'hover:border-accent-500'
              },
              {
                title: '智慧空間',
                desc: '整合 IoT 物聯網與互動技術，讓空間能感知、會思考，創造更智能、更高效的場域應用。',
                icon: '🏢',
                color: 'text-blue-400',
                border: 'hover:border-blue-500'
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 card-hover group ${item.border}`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-4 ${item.color}`}>{item.title}</h3>
                <p className="text-pencil-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">發展歷程</h2>
            <p className="mt-4 text-pencil-300">一步一腳印，持續突破技術邊界。</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-pencil-800 ml-4 md:ml-0 md:pl-0 space-y-12">
              {[
                { date: '2024.03', title: '公司成立', desc: '空間動態科技 (Spatial Dynamics) 正式於高雄成立，確立 XR × AI 發展方向。' },
                { date: '2024.Q2', title: '首批專案落地', desc: '成功承接並交付首個飛行模擬與教育訓練專案，驗證技術實力。' },
                { date: '2024.Q3', title: 'AI 核心導入', desc: '自主研發 AI Agent 架構，開始整合 Chat 系統與自動化流程。' },
                { date: '2024.Q4', title: '技術能力擴展', desc: '完成多源資料介接模組與主動推播系統，強化智慧空間整合能力。' },
              ].map((item, index) => (
                <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 md:gap-8 items-center group">
                  {/* Date Bubble (Mobile: Left, Desktop: Middle) */}
                  <div className="absolute -left-[9px] md:relative md:left-auto md:col-span-1 md:flex md:justify-end md:pr-8">
                    <div className="w-5 h-5 rounded-full bg-pencil-950 border-4 border-neon-500 group-hover:scale-125 transition-transform duration-300 z-10" />
                  </div>

                  {/* Date Text (Desktop only - implied in layout) */}
                  <div className="hidden md:block md:col-span-1 text-right text-neon-400 font-bold text-xl tracking-wider">
                    {item.date}
                  </div>

                  {/* Content Card */}
                  <div className="md:col-span-3 glass-card p-6 rounded-xl border border-white/5 hover:border-neon-500/30 transition-colors">
                    <span className="md:hidden text-neon-400 font-bold text-sm mb-2 block">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-pencil-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-pencil-950/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">公司資訊</h2>
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pencil-800 flex items-center justify-center text-2xl">🏢</div>
                  <div>
                    <p className="text-sm text-pencil-400">公司名稱</p>
                    <p className="text-lg text-white font-semibold">空間動態科技股份有限公司</p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pencil-800 flex items-center justify-center text-2xl">📅</div>
                  <div>
                    <p className="text-sm text-pencil-400">成立時間</p>
                    <p className="text-lg text-white font-semibold">2024 年 3 月</p>
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pencil-800 flex items-center justify-center text-2xl">📍</div>
                  <div>
                    <p className="text-sm text-pencil-400">所在地</p>
                    <p className="text-lg text-white font-semibold">高雄市</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden glass-card flex items-center justify-center border border-white/10">
              {/* Map placeholder or Office Image */}
              <div className="text-center">
                <div className="text-6xl mb-4">🌏</div>
                <p className="text-pencil-300">Based in Kaohsiung,<br />Serving the World.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CallToActionSimple
        id="cta"
        headline="想與我們合作？"
        subheadline={<p className="text-pencil-300">無論是技術諮詢、專案開發或合作提案，歡迎隨時聯繫我們。</p>}
        cta={
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/contact" size="lg" className="glow-neon w-full sm:w-auto">
              聯絡我們
            </ButtonLink>
            <PlainButtonLink href="/pricing" size="lg" className="text-pencil-300 hover:text-white group">
              查看解決方案 <ChevronIcon className="group-hover:translate-x-1 transition-transform" />
            </PlainButtonLink>
          </div>
        }
      />
    </div>
  )
}
