import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/cta/call-to-action-simple'
import { HeroSimpleCentered } from '@/components/sections/hero/hero-simple-centered'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '專案與能力｜XR/AI/IoT 系統整合與落地案例',
    description: '飛行模擬、教育訓練、資料介接/推播、AI agent 與 chat 系統等交付能力。',
}

// Project Card Component
function ProjectCard({
    id,
    icon,
    title,
    description,
    deliverables,
    tags,
}: {
    id: string
    icon: React.ReactNode
    title: string
    description: string
    deliverables: string[]
    tags: string[]
}) {
    return (
        <div
            id={id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-pencil-200 bg-white p-8 transition-all hover:border-neon-500/50 hover:shadow-lg hover:shadow-neon-500/10 dark:border-pencil-800 dark:bg-pencil-900/50"
        >
            <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-neon-500/10 text-neon-600 dark:text-neon-400">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-pencil-900 dark:text-pencil-100">{title}</h3>
            <p className="mt-2 flex-1 text-sm text-pencil-600 dark:text-pencil-400">{description}</p>

            <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-pencil-500">交付項目</h4>
                <ul className="mt-2 space-y-1">
                    {deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-pencil-600 dark:text-pencil-300">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="rounded-full bg-pencil-100 px-3 py-1 text-xs text-pencil-600 dark:bg-pencil-800 dark:text-pencil-300">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )

}

// Icons
function SimulatorIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
        </svg>
    )
}

function TrainingIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
        </svg>
    )
}

function DataIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
        </svg>
    )
}

function AIIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
        </svg>
    )
}

function PushIcon() {
    return (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
        </svg>
    )
}

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <HeroSimpleCentered
                id="hero"
                headline="專案與能力"
                subheadline={
                    <p className="text-pencil-600 dark:text-pencil-300">
                        用「做過什麼、怎麼做、交付什麼」建立信任。
                        <br />
                        從飛行模擬到 AI 系統，我們已成功交付多種類型的專案。
                    </p>
                }
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/contact" size="lg">
                            洽談合作
                        </ButtonLink>
                        <PlainButtonLink href="#projects" size="lg">
                            查看專案 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />

            {/* Projects Grid */}
            <section id="projects" className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">已完成專案</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">以下是我們已成功交付的專案類型。</p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                        <ProjectCard
                            id="flight-simulator"
                            icon={<SimulatorIcon />}
                            title="飛行模擬系統"
                            description="高擬真度飛行模擬器開發，提供沉浸式飛行訓練體驗與評估系統。"
                            deliverables={['模擬器硬體整合', 'VR 場景開發', '訓練評估系統']}
                            tags={['VR', '模擬器', '飛行']}
                        />

                        <ProjectCard
                            id="flight-training"
                            icon={<TrainingIcon />}
                            title="飛行教育訓練"
                            description="結合 VR 技術的飛行教育訓練課程設計與系統開發。"
                            deliverables={['課程設計', 'VR 訓練模組', '學員管理系統']}
                            tags={['教育訓練', 'VR', '課程']}
                        />

                        <ProjectCard
                            id="data-integration"
                            icon={<DataIcon />}
                            title="專案資料介接流程規劃"
                            description="企業資料整合與 API 介接規劃，建立資料交換標準與流程。"
                            deliverables={['介接需求分析', 'API 設計', '資料流程規劃']}
                            tags={['資料介接', 'API', '流程']}
                        />

                        <ProjectCard
                            id="data-push"
                            icon={<PushIcon />}
                            title="產業數據主動推播規劃"
                            description="產業數據平台的主動推播機制設計與實作。"
                            deliverables={['推播機制設計', '訂閱管理', '通知系統']}
                            tags={['推播', '數據', '通知']}
                        />

                        <ProjectCard
                            id="ai-agent"
                            icon={<AIIcon />}
                            title="AI Agent 查詢 / AI Chat 系統"
                            description="企業級 AI Agent 與 Chat 系統開發，提升客服與知識管理效率。"
                            deliverables={['AI Agent 開發', 'Chat 介面', '知識庫整合']}
                            tags={['AI', 'Chat', 'Agent']}
                        />
                    </div>
                </div>
            </section>

            {/* Capability Matrix */}
            <section className="bg-pencil-50 py-16 sm:py-24 dark:bg-pencil-900/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">能力矩陣</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">我們的核心能力涵蓋以下領域，可依需求組合。</p>
                    </div>

                    <div className="mx-auto mt-16 max-w-4xl">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {[
                                { category: 'XR', items: ['內容開發', '互動設計', '裝置整合'] },
                                { category: 'AI', items: ['Agent 開發', 'Chat 系統', '查詢系統'] },
                                { category: '資料', items: ['介接規劃', '推播系統', 'API 開發'] },
                                { category: 'IoT', items: ['感測整合', '控制系統', '可視化'] },
                            ].map((group, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-pencil-200 bg-white p-6 dark:border-pencil-800 dark:bg-pencil-950/50"
                                >
                                    <h3 className="text-lg font-bold text-neon-600 dark:text-neon-400">{group.category}</h3>
                                    <ul className="mt-4 space-y-2">
                                        {group.items.map((item, idx) => (
                                            <li key={idx} className="text-sm text-pencil-600 dark:text-pencil-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cooperation Modes */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">合作方式</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">我們提供多種合作模式，滿足不同階段的需求。</p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
                        {[
                            {
                                title: '顧問規劃',
                                desc: '需求分析、可行性評估、技術規劃',
                                icon: '📋',
                            },
                            {
                                title: 'PoC 驗證',
                                desc: '快速原型、概念驗證、效果評估',
                                icon: '🧪',
                            },
                            {
                                title: '專案開發',
                                desc: '完整開發、系統整合、部署上線',
                                icon: '🛠️',
                            },
                            {
                                title: '維運優化',
                                desc: '持續維運、效能優化、版本更新',
                                icon: '🔧',
                            },
                        ].map((mode, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-pencil-200 bg-white p-6 text-center transition-all hover:border-neon-500/50 dark:border-pencil-800 dark:bg-pencil-900/50"
                            >
                                <div className="mb-4 text-4xl">{mode.icon}</div>
                                <h3 className="text-lg font-semibold text-pencil-900 dark:text-pencil-100">{mode.title}</h3>
                                <p className="mt-2 text-sm text-pencil-600 dark:text-pencil-400">{mode.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CallToActionSimple
                id="cta"
                headline="想了解更多專案細節？"
                subheadline={<p>預約洽談，讓我們為您介紹更多案例與交付成果。</p>}
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/contact" size="lg">
                            預約洽談
                        </ButtonLink>
                        <PlainButtonLink href="/contact" size="lg">
                            取得報價 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />
        </>
    )
}
