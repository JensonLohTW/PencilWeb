import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'

export default function AboutPage() {
  return (
    <div className="bg-pencil-50 min-h-screen font-sans text-pencil-900 overflow-hidden relative dark:bg-black dark:text-pencil-50">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20 dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Hero */}
      <div className="relative pt-32 pb-20 text-center">
        <div className="inline-block border border-neon-500/50 rounded-full px-4 py-1 text-xs font-mono text-neon-400 mb-6 bg-neon-500/10 backdrop-blur">
            // ORG_STRUCTURE_V1.0
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-pencil-900 mb-6 text-glow-strong tracking-tighter dark:text-white">
          We Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-600 to-accent-600 dark:from-neon-400 dark:to-accent-400">OASIS</span>
        </h1>
        <p className="max-w-2xl mx-auto text-pencil-600 text-lg dark:text-pencil-400">
          空間動態科技致力於整合虛實邊界，創造下一個世代的沉浸式互動體驗。
        </p>
      </div>

      <Container className="pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-black/10 py-12 dark:border-white/10">
          {[
            { label: 'Founded', value: '2023', color: 'neon' },
            { label: 'Projects', value: '15+', color: 'accent' },
            { label: 'Team', value: '12', color: 'white' },
            { label: 'Location', value: 'TW', color: 'white' }
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`text-3xl font-bold font-mono text-${stat.color === 'white' ? 'pencil-900 dark:text-white' : stat.color + '-600 dark:text-' + stat.color + '-400'} mb-2 group-hover:text-glow transition-all`}>
                {stat.value}
              </div>
              <div className="text-xs text-pencil-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline / What We Do */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-2xl font-bold text-pencil-900 mb-8 border-l-4 border-neon-500 pl-4 dark:text-white">
              執行任務 Mission Logs
            </h2>
            <div className="space-y-12 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-neon-500/50 to-transparent" />

              {[
                { year: '2023 Q1', title: 'System Initialization', desc: '公司成立，專注於 XR 軟硬體整合技術研發。' },
                { year: '2023 Q3', title: 'First Deployment', desc: '完成首套軍規級飛行模擬訓練系統交付。' },
                { year: '2024 Q1', title: 'AI Integration', desc: '導入 LLM 技術，開發企業級 AI Agent 解決方案。' },
                { year: '2024 Q4', title: 'Smart Space', desc: '啟動 IoT 智慧空間整合計畫，實現虛實融合願景。' },
              ].map((item) => (
                <div key={item.title} className="relative pl-12 group">
                  <div className="absolute left-0 top-1.5 size-6 rounded-full border border-neon-500 bg-black flex items-center justify-center">
                    <div className="size-2 rounded-full bg-neon-500 shadow-[0_0_10px_var(--color-neon-500)] group-hover:scale-150 transition-transform" />
                  </div>
                  <div className="text-xs font-mono text-neon-600 mb-1 dark:text-neon-500">{item.year}</div>
                  <h3 className="text-xl font-bold text-pencil-900 mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-pencil-600 text-sm leading-relaxed dark:text-pencil-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-2xl p-8 backdrop-blur sm:sticky sm:top-32 dark:bg-white/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-pencil-900 mb-1 dark:text-white">Company Info</h2>
            <div className="text-xs font-mono text-pencil-500 mb-8 tracking-widest">ID_CARD_DATA</div>

            <div className="space-y-6">
              <div className="flex justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-pencil-500 dark:text-pencil-400">Company Name</span>
                <span className="text-pencil-900 font-medium text-right dark:text-white">空間動態科技 (Pencil)</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-pencil-500 dark:text-pencil-400">Headquarters</span>
                <span className="text-pencil-900 font-medium text-right dark:text-white">Kaohsiung, Taiwan</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-pencil-500 dark:text-pencil-400">Core Tech</span>
                <span className="text-pencil-900 font-medium text-right dark:text-white">XR, AI, IoT, Digital Twin</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-pencil-500 dark:text-pencil-400">Contact</span>
                <span className="text-neon-600 font-medium text-right font-mono dark:text-neon-400">contact@pencil.com.tw</span>
              </div>
            </div>

            <div className="mt-8">
              <ButtonLink href="/contact" className="w-full justify-center bg-pencil-900 text-white hover:bg-pencil-800 dark:bg-white dark:text-black dark:hover:bg-pencil-200">
                聯繫我們
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
