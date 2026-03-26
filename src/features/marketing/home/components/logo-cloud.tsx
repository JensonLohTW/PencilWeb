'use client'

import { FadeIn } from '@/components/animations/fade-in'
import { useTranslations } from 'next-intl'
import { SectorNetworkCanvas } from './sector-network-canvas'

// 左欄：技術輸入層  dots = 信號強度（最多 4）
const TECH_INPUTS = [
  { label: 'XR', dots: 4 },
  { label: 'AI / LLM', dots: 4 },
  { label: 'IoT', dots: 3 },
  { label: '5G / 6G', dots: 3 },
  { label: 'Haptic', dots: 2 },
  { label: 'Digital Twin', dots: 2 },
]

// 右欄：服務成果
const OUTCOMES = ['沉浸式訓練', '智慧空間', 'AI 協作', 'AR 視覺導覽']

// 點陣：最多 4 個，前 count 個亮
function Dots({ count, total = 4 }: { count: number; total?: number }) {
  return (
    <span className="flex items-center gap-[3px]">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`inline-block size-[6px] rounded-full ${i < count ? 'bg-[#2f9b62] dark:bg-[#46b67a]' : 'bg-[#c8ceca] dark:bg-white/20'}`}
        />
      ))}
    </span>
  )
}

export function LogoCloud() {
  const t = useTranslations('pages.home.clients')

  return (
    <section className="relative overflow-hidden bg-[#eef0ee] py-16 sm:py-20 dark:bg-[#0d1210]">
      {/* 中央淡綠光暈，與三欄統一背景 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_50%_50%,rgba(43,150,95,0.08)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_48%_42%_at_50%_50%,rgba(70,182,122,0.12)_0%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* 欄位標頭 */}
        <div className="mb-4 grid grid-cols-3 text-xs font-bold tracking-widest text-[#a3aaa4] uppercase select-none dark:text-[#6f7a73]">
          <span>技術輸入層</span>
          <span className="text-center">
            {t('eyebrow')} · {t('title')}
          </span>
          <span className="text-right">服務成果</span>
        </div>

        {/* 三欄主體 */}
        <FadeIn>
          <div className="grid min-h-[380px] grid-cols-[160px_1fr_160px] overflow-hidden rounded-xl border border-[#d7dcd8] bg-[#eef1ee] lg:grid-cols-[200px_1fr_200px] dark:border-[#27312b] dark:bg-[#101611]">
            {/* 左欄 */}
            <div className="flex flex-col justify-center gap-6 border-r border-[#d7dcd8] px-6 py-8 dark:border-[#27312b]">
              {TECH_INPUTS.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-medium tracking-wide text-[#919992] dark:text-[#87928b]">
                    {item.label}
                  </span>
                  <Dots count={item.dots} />
                </div>
              ))}
            </div>

            {/* 中欄：Canvas 節點圖 */}
            <div className="relative">
              <SectorNetworkCanvas className="absolute inset-0" />
              {/* 右下角統計 */}
              <div className="pointer-events-none absolute right-5 bottom-4 text-right">
                <p className="font-mono text-xs font-medium tracking-wide text-[#9da49f] dark:text-[#6f7a73]">
                  6 應用領域 → 4 服務成果
                </p>
                <div className="mt-2 ml-auto h-[3px] w-28 overflow-hidden rounded-full bg-[#d5dbd6] dark:bg-[#27312b]">
                  <div className="h-full w-[68%] rounded-full bg-[#48a66f] dark:bg-[#46b67a]" />
                </div>
              </div>
              {/* 版本號 */}
              <div className="pointer-events-none absolute bottom-4 left-5">
                <p className="font-mono text-xs font-medium tracking-wide text-[#b4bab6] dark:text-[#5e6862]">
                  — Fig. 1.1
                </p>
              </div>
            </div>

            {/* 右欄 */}
            <div className="flex flex-col justify-center gap-6 border-l border-[#d7dcd8] px-6 py-8 dark:border-[#27312b]">
              {OUTCOMES.map((label) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="size-2.5 shrink-0 rounded-full bg-[#2f9b62] shadow-[0_0_8px_rgba(47,155,98,0.4)] dark:bg-[#46b67a] dark:shadow-[0_0_10px_rgba(70,182,122,0.4)]" />
                  <span className="font-mono text-sm font-medium tracking-wide text-[#8e968f] dark:text-[#829087]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
