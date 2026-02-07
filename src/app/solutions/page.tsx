import type { Metadata } from 'next'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissSolutionList } from '@/components/sections/swiss/swiss-solution-list'
import { SwissProcessTimeline } from '@/components/sections/swiss/swiss-process-timeline'
import { SwissFAQ } from '@/components/sections/swiss/swiss-faq'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export const metadata: Metadata = {
    title: '解決方案｜VR/MR 沉浸式訓練、AR 視覺化、智慧空間、AI 導入',
    description:
        '四大方案快速選型：XR 訓練、AR 可視化、IoT 智慧空間與中小企業 AI Agent/Chat。',
}

export default function SolutionsPage() {
    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow="解決方案"
                headline="找到最適合您的解決方案"
                headlineHighlight="解決方案"
                cycleWords={[
                    { text: 'VR 訓練', className: 'text-cta' },
                    { text: 'AR 視覺化', className: 'text-cyan-600' },
                    { text: 'AI 導入', className: 'text-purple-600' },
                    { text: '智慧空間', className: 'text-emerald-600' },
                ]}
                subheadline="從 VR/MR 沉浸式訓練到企業 AI 導入，四大方案快速選型，讓技術為您的業務帶來實質效益。"
                ctaText="瀏覽方案"
                ctaHref="#solutions"
            />

            {/* Solutions */}
            <SwissSolutionList />

            {/* Process */}
            <SwissProcessTimeline />

            {/* FAQs */}
            <SwissFAQ />

            {/* CTA */}
            <SwissCTA
                headline="找到適合的方案了嗎？預約 Demo 讓我們為您提供更詳細的方案說明與建議。"
                ctaText="預約 Demo"
                ctaHref="/contact"
                secondaryText="填寫需求表單"
                secondaryHref="/contact"
            />
        </>
    )
}
