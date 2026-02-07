import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/cta/call-to-action-simple'
import { HeroSimpleCentered } from '@/components/sections/hero/hero-simple-centered'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '技術核心｜XR（VR/AR/MR）裝置整合 × AI × 5G/6G × 五感互動',
    description:
        '以 XR 為基礎，整合 haptic、全向跑步機、AI 與高速網路，打造可落地的沉浸式互動系統。',
}

// Tech Module Component
function TechModule({
    icon,
    title,
    description,
    features,
}: {
    icon: React.ReactNode
    title: string
    description: string
    features: string[]
}) {
    return (
        <div className="rounded-2xl border border-pencil-200 bg-white p-8 transition-all hover:border-neon-500/50 dark:border-pencil-800 dark:bg-pencil-900/50">
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-neon-500/10 text-neon-600 dark:text-neon-400">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">{title}</h3>
            <p className="mt-3 text-pencil-600 dark:text-pencil-400">{description}</p>
            <ul className="mt-4 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-pencil-600 dark:text-pencil-300">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon-500" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    )

}

// Icons
function XRIcon() {
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

function TreadmillIcon() {
    return (
        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
        </svg>
    )
}

function HapticIcon() {
    return (
        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15"
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
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
        </svg>
    )
}

function NetworkIcon() {
    return (
        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
        </svg>
    )
}

function SensesIcon() {
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

export default function TechnologyPage() {
    return (
        <>
            {/* Hero */}
            <HeroSimpleCentered
                id="hero"
                headline="技術核心"
                subheadline={
                    <p className="text-pencil-600 dark:text-pencil-300">
                        以 OASIS 為願景，整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，
                        <br />
                        打造真正可落地的沉浸式互動體驗。
                    </p>
                }
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/solutions" size="lg">
                            查看應用場景
                        </ButtonLink>
                        <PlainButtonLink href="/contact" size="lg">
                            洽談技術合作 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />

            {/* Tech Modules */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold text-neon-600 dark:text-neon-400">六大技術模組</p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">核心技術堆疊</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">
                            我們整合多種技術，打造完整的沉浸式體驗生態系統。
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                        <TechModule
                            icon={<XRIcon />}
                            title="XR（VR/MR/XR）"
                            description="虛擬實境、混合實境與擴增實境技術整合，提供沉浸式視覺體驗。"
                            features={['VR 頭盔整合', 'MR 透視模式', 'AR 空間定位', '跨平台支援']}
                        />

                        <TechModule
                            icon={<TreadmillIcon />}
                            title="全向跑步機"
                            description="移動裝置整合，讓使用者在虛擬世界中自由行走。"
                            features={['全向移動追蹤', '步態分析', '安全防護', '多人協同']}
                        />

                        <TechModule
                            icon={<HapticIcon />}
                            title="觸覺回饋"
                            description="Haptic 裝置整合，提供觸覺反饋增強沉浸感。"
                            features={['觸覺背心', '手套回饋', '力回饋裝置', '溫度模擬']}
                        />

                        <TechModule
                            icon={<AIIcon />}
                            title="AI 與大數據"
                            description="人工智慧與資料分析，提供智能化互動體驗。"
                            features={['AI NPC 行為', '個人化推薦', '語音識別', '數據分析']}
                        />

                        <TechModule
                            icon={<NetworkIcon />}
                            title="5G/6G"
                            description="低延遲高頻寬網路，確保即時互動體驗。"
                            features={['低延遲傳輸', '高頻寬串流', '邊緣運算', '多人同步']}
                        />

                        <TechModule
                            icon={<SensesIcon />}
                            title="五感互動"
                            description="嗅覺、味覺等感官技術研究，邁向完整沉浸體驗。"
                            features={['嗅覺裝置', '環境模擬', '多感官整合', '研究前瞻']}
                        />
                    </div>
                </div>
            </section>

            {/* System Integration */}
            <section className="bg-pencil-50 py-16 sm:py-24 dark:bg-pencil-900/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">系統整合流程</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">
                            從硬體到平台，我們提供完整的系統整合能力。
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-4xl">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                            {['資料來源', 'API 整合', '後端處理', '前端呈現', '裝置輸出'].map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="rounded-xl border border-pencil-200 bg-white p-4 text-center dark:border-pencil-800 dark:bg-pencil-950/50">
                                        <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-full bg-neon-500/20 text-sm font-bold text-neon-600 dark:text-neon-400">
                                            {index + 1}
                                        </div>
                                        <p className="text-sm font-medium text-pencil-700 dark:text-pencil-200">{step}</p>
                                    </div>
                                    {index < 4 && (
                                        <div className="absolute right-0 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 translate-x-full bg-pencil-300 dark:bg-pencil-700 sm:block" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">可靠性與交付</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">
                            我們確保每個專案都能穩定落地、持續運作。
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
                        {[
                            {
                                title: '品質測試',
                                desc: '完整的功能測試、效能測試與壓力測試',
                                icon: '✓',
                            },
                            {
                                title: '裝置相容',
                                desc: '跨平台、跨裝置相容性驗證',
                                icon: '⚙',
                            },
                            {
                                title: '持續維護',
                                desc: '系統監控、問題排除、版本更新',
                                icon: '🔄',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-pencil-200 bg-white p-6 text-center dark:border-pencil-800 dark:bg-pencil-900/50"
                            >
                                <div className="mb-4 text-3xl">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-pencil-900 dark:text-pencil-100">{item.title}</h3>
                                <p className="mt-2 text-sm text-pencil-600 dark:text-pencil-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CallToActionSimple
                id="cta"
                headline="想了解更多技術細節？"
                subheadline={<p>我們的技術團隊可以為您提供更深入的技術諮詢與方案建議。</p>}
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/contact" size="lg">
                            洽談技術合作
                        </ButtonLink>
                        <PlainButtonLink href="/solutions" size="lg">
                            查看應用場景 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />
        </>
    )
}
