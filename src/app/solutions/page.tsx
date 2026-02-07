import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/cta/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faq/faqs-two-column-accordion'
import { HeroSimpleCentered } from '@/components/sections/hero/hero-simple-centered'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '解決方案｜VR/MR 沉浸式訓練、AR 視覺化、智慧空間、AI 導入',
    description:
        '四大方案快速選型：XR 訓練、AR 可視化、IoT 智慧空間與中小企業 AI Agent/Chat。',
}

// Solution Card Component
function SolutionCard({
    id,
    icon,
    title,
    description,
    features,
    useCases,
}: {
    id: string
    icon: React.ReactNode
    title: string
    description: string
    features: string[]
    useCases: string[]
}) {
    return (
        <div
            id={id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-pencil-200 bg-white p-8 transition-all hover:border-neon-500/50 dark:border-pencil-800 dark:bg-pencil-900/50"
        >
            <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-neon-500/10 text-neon-600 dark:text-neon-400">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">{title}</h3>
            <p className="mt-3 text-pencil-600 dark:text-pencil-400">{description}</p>

            <div className="mt-6">
                <h4 className="text-sm font-semibold text-pencil-700 dark:text-pencil-200">主要功能</h4>
                <ul className="mt-2 space-y-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-pencil-600 dark:text-pencil-400">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neon-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h4 className="text-sm font-semibold text-pencil-700 dark:text-pencil-200">適用場景</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                    {useCases.map((useCase, index) => (
                        <span key={index} className="rounded-full bg-pencil-100 px-3 py-1 text-xs text-pencil-600 dark:bg-pencil-800 dark:text-pencil-300">
                            {useCase}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex gap-3">
                <ButtonLink href="/contact" size="sm">
                    預約 Demo
                </ButtonLink>
                <PlainButtonLink href="/contact" size="sm">
                    詢問報價
                </PlainButtonLink>
            </div>
        </div>
    )
}

// Icons
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

export default function SolutionsPage() {
    return (
        <>
            {/* Hero */}
            <HeroSimpleCentered
                id="hero"
                headline="解決方案"
                subheadline={
                    <p className="text-pencil-600 dark:text-pencil-300">
                        從 VR/MR 沉浸式訓練到企業 AI 導入，四大方案快速選型，找到最適合您的解決方案。
                    </p>
                }
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/contact" size="lg">
                            預約 Demo
                        </ButtonLink>
                        <PlainButtonLink href="#xr-training" size="lg">
                            瀏覽方案 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />

            {/* Solutions Grid */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <SolutionCard
                            id="xr-training"
                            icon={<VRIcon />}
                            title="VR/MR 沉浸式訓練"
                            description="透過虛擬實境與混合實境技術，打造高擬真度的訓練環境，提升學員理解與操作安全性。"
                            features={[
                                '高擬真度場景模擬',
                                '互動式操作訓練',
                                '即時回饋與評估',
                                '可重複練習，降低實體訓練成本',
                            ]}
                            useCases={['飛行訓練', '工業操作', '醫療訓練', '緊急應變']}
                        />

                        <SolutionCard
                            id="ar-visualization"
                            icon={<ARIcon />}
                            title="AR 視覺化"
                            description="擴增實境將數位資訊疊加到真實環境，讓導覽、維修、展示更加直觀有效。"
                            features={[
                                '現場資訊即時呈現',
                                '3D 模型視覺化',
                                '互動式操作指引',
                                '多語言支援',
                            ]}
                            useCases={['展演導覽', '設備維護', '銷售展示', '教育導覽']}
                        />

                        <SolutionCard
                            id="smart-space"
                            icon={<SmartSpaceIcon />}
                            title="智慧空間 IoT"
                            description="整合 IoT 感測器、互動裝置與可視化平台，讓空間更智能、更高效。"
                            features={[
                                'IoT 感測器整合',
                                '即時數據監控',
                                '自動化控制',
                                '數據分析與報表',
                            ]}
                            useCases={['智慧建築', '展覽館', '商業空間', '工廠監控']}
                        />

                        <SolutionCard
                            id="ai-for-sme"
                            icon={<AIIcon />}
                            title="中小企業 AI 應用"
                            description="為中小企業量身打造的 AI 解決方案，從資料查詢到流程自動化，提升營運效率。"
                            features={[
                                'AI Agent 智能助手',
                                'AI Chat 客服系統',
                                '知識庫查詢系統',
                                '流程自動化',
                            ]}
                            useCases={['客服系統', '知識管理', '資料分析', '流程自動化']}
                        />
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="bg-pencil-50 py-16 sm:py-24 dark:bg-pencil-900/30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-900 dark:text-pencil-100">導入流程</h2>
                        <p className="mt-4 text-pencil-600 dark:text-pencil-400">從需求到交付，我們提供完整的專案服務。</p>
                    </div>

                    <div className="mx-auto mt-16 max-w-3xl">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 h-full w-0.5 bg-pencil-800 lg:left-1/2 lg:-translate-x-1/2" />

                            {/* Timeline items */}
                            {[
                                { step: '1', title: '需求訪談', desc: '深入了解您的目標、場景與需求' },
                                { step: '2', title: 'PoC 驗證', desc: '快速原型驗證可行性與效果' },
                                { step: '3', title: '開發整合', desc: '完整開發與系統整合' },
                                { step: '4', title: '部署驗收', desc: '現場部署與驗收測試' },
                                { step: '5', title: '維運優化', desc: '持續維運與效能優化' },
                            ].map((item, index) => (
                                <div key={index} className="relative mb-8 flex items-start gap-6 lg:mb-12">
                                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-neon-500/20 text-xl font-bold text-neon-600 dark:border-pencil-950 dark:text-neon-400">
                                        {item.step}
                                    </div>
                                    <div className="pt-3">
                                        <h3 className="text-lg font-semibold text-pencil-900 dark:text-pencil-100">{item.title}</h3>
                                        <p className="mt-1 text-pencil-600 dark:text-pencil-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQsTwoColumnAccordion id="faqs" headline="選購常見問題">
                <Faq
                    id="faq-1"
                    question="如何選擇適合的方案？"
                    answer="我們建議先預約 Demo，讓我們了解您的需求與目標場景後，會提供最適合的方案建議。每個方案都可依據您的需求客製化。"
                />
                <Faq
                    id="faq-2"
                    question="需要準備哪些硬體設備？"
                    answer="視方案而定。VR/MR 方案需要 VR 頭盔與相關硬體；AR 方案可使用手機或平板；智慧空間需要 IoT 感測器；AI 方案主要是軟體服務。我們會在方案建議時說明硬體需求。"
                />
                <Faq
                    id="faq-3"
                    question="導入成本大約是多少？"
                    answer="成本依專案規模與複雜度而定。PoC 驗證階段通常較低，完整專案開發則視需求而定。請填寫需求表單或預約 Demo，我們會提供詳細報價。"
                />
                <Faq
                    id="faq-4"
                    question="你們提供維運服務嗎？"
                    answer="是的，我們提供完整的維運服務，包含系統監控、問題排除、版本更新與效能優化。維運方案可依需求選擇。"
                />
            </FAQsTwoColumnAccordion>

            {/* CTA */}
            <CallToActionSimple
                id="cta"
                headline="找到適合的方案了嗎？"
                subheadline={
                    <p>預約 Demo 讓我們為您提供更詳細的方案說明與建議。</p>
                }
                cta={
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <ButtonLink href="/contact" size="lg">
                            預約 Demo
                        </ButtonLink>
                        <PlainButtonLink href="/contact" size="lg">
                            填寫需求表單 <ArrowNarrowRightIcon />
                        </PlainButtonLink>
                    </div>
                }
            />
        </>
    )
}
