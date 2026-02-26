'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/animations/fade-in'
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
const OUTCOMES = [
    '沉浸式訓練',
    '智慧空間',
    'AI 協作',
    'AR 視覺導覽',
]

// 點陣：最多 4 個，前 count 個亮
function Dots({ count, total = 4 }: { count: number; total?: number }) {
    return (
        <span className="flex gap-[3px] items-center">
            {Array.from({ length: total }, (_, i) => (
                <span
                    key={i}
                    className={`inline-block size-[5px] rounded-full ${i < count ? 'bg-accent-500' : 'bg-white/12'}`}
                />
            ))}
        </span>
    )
}

export function LogoCloud() {
    const t = useTranslations('pages.home.clients')

    return (
        <section className="relative overflow-hidden bg-[#0e0b08] py-16 sm:py-20">
            {/* 品牌漸層光暈 */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 52%, rgba(234,88,12,0.07) 0%, transparent 100%)' }}
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* 欄位標頭 */}
                <div className="mb-3 grid grid-cols-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/22 select-none">
                    <span>技術輸入層</span>
                    <span className="text-center">{t('eyebrow')} · {t('title')}</span>
                    <span className="text-right">服務成果</span>
                </div>

                {/* 三欄主體 */}
                <FadeIn>
                    <div className="grid grid-cols-[160px_1fr_160px] lg:grid-cols-[200px_1fr_200px] min-h-[380px] rounded-xl border border-white/7 overflow-hidden">

                        {/* 左欄 */}
                        <div className="border-r border-white/7 px-5 py-6 flex flex-col justify-center gap-5">
                            {TECH_INPUTS.map(item => (
                                <div key={item.label} className="flex items-center justify-between gap-3">
                                    <span className="font-mono text-[11px] text-white/55 tracking-wide">{item.label}</span>
                                    <Dots count={item.dots} />
                                </div>
                            ))}
                        </div>

                        {/* 中欄：Canvas 節點圖 */}
                        <div className="relative">
                            <SectorNetworkCanvas className="absolute inset-0" />
                            {/* 右下角統計 */}
                            <div className="absolute bottom-3 right-4 text-right pointer-events-none">
                                <p className="font-mono text-[9px] text-white/22 tracking-wide">6 應用領域 → 4 服務成果</p>
                                <div className="mt-1 h-[2px] w-24 ml-auto rounded-full bg-white/10 overflow-hidden">
                                    <div className="h-full w-[68%] rounded-full bg-accent-500" />
                                </div>
                            </div>
                            {/* 版本號 */}
                            <div className="absolute bottom-3 left-4 pointer-events-none">
                                <p className="font-mono text-[9px] text-white/15 tracking-wide">— Fig. 1.1</p>
                            </div>
                        </div>

                        {/* 右欄 */}
                        <div className="border-l border-white/7 px-5 py-6 flex flex-col justify-center gap-5">
                            {OUTCOMES.map(label => (
                                <div key={label} className="flex items-center gap-2.5">
                                    <span className="size-2 shrink-0 rounded-full bg-accent-500 shadow-[0_0_6px_rgba(234,88,12,0.7)]" />
                                    <span className="font-mono text-[11px] text-white/70 tracking-wide">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
