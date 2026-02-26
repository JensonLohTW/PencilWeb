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
                    className={`inline-block size-[5px] rounded-full ${i < count ? 'bg-[#2f9b62] dark:bg-[#46b67a]' : 'bg-[#c8ceca] dark:bg-white/20'}`}
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
                <div className="mb-3 grid grid-cols-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a3aaa4] select-none dark:text-[#6f7a73]">
                    <span>技術輸入層</span>
                    <span className="text-center">{t('eyebrow')} · {t('title')}</span>
                    <span className="text-right">服務成果</span>
                </div>

                {/* 三欄主體 */}
                <FadeIn>
                    <div className="grid grid-cols-[160px_1fr_160px] lg:grid-cols-[200px_1fr_200px] min-h-[380px] rounded-xl border border-[#d7dcd8] bg-[#eef1ee] overflow-hidden dark:border-[#27312b] dark:bg-[#101611]">

                        {/* 左欄 */}
                        <div className="border-r border-[#d7dcd8] px-5 py-6 flex flex-col justify-center gap-5 dark:border-[#27312b]">
                            {TECH_INPUTS.map(item => (
                                <div key={item.label} className="flex items-center justify-between gap-3">
                                    <span className="font-mono text-[11px] text-[#919992] tracking-wide dark:text-[#87928b]">{item.label}</span>
                                    <Dots count={item.dots} />
                                </div>
                            ))}
                        </div>

                        {/* 中欄：Canvas 節點圖 */}
                        <div className="relative">
                            <SectorNetworkCanvas className="absolute inset-0" />
                            {/* 右下角統計 */}
                            <div className="absolute bottom-3 right-4 text-right pointer-events-none">
                                <p className="font-mono text-[9px] text-[#9da49f] tracking-wide dark:text-[#6f7a73]">6 應用領域 → 4 服務成果</p>
                                <div className="mt-1 h-[2px] w-24 ml-auto rounded-full bg-[#d5dbd6] overflow-hidden dark:bg-[#27312b]">
                                    <div className="h-full w-[68%] rounded-full bg-[#48a66f] dark:bg-[#46b67a]" />
                                </div>
                            </div>
                            {/* 版本號 */}
                            <div className="absolute bottom-3 left-4 pointer-events-none">
                                <p className="font-mono text-[9px] text-[#b4bab6] tracking-wide dark:text-[#5e6862]">— Fig. 1.1</p>
                            </div>
                        </div>

                        {/* 右欄 */}
                        <div className="border-l border-[#d7dcd8] px-5 py-6 flex flex-col justify-center gap-5 dark:border-[#27312b]">
                            {OUTCOMES.map(label => (
                                <div key={label} className="flex items-center gap-2.5">
                                    <span className="size-2 shrink-0 rounded-full bg-[#2f9b62] shadow-[0_0_6px_rgba(47,155,98,0.35)] dark:bg-[#46b67a] dark:shadow-[0_0_8px_rgba(70,182,122,0.32)]" />
                                    <span className="font-mono text-[11px] text-[#8e968f] tracking-wide dark:text-[#829087]">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
