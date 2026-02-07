import type { Metadata } from 'next'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissProjectList } from '@/components/sections/swiss/swiss-project-list'
import { SwissCapabilityGrid } from '@/components/sections/swiss/swiss-capability-grid'
import { SwissCooperationModes } from '@/components/sections/swiss/swiss-cooperation-modes'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export const metadata: Metadata = {
    title: '專案與能力｜XR/AI/IoT 系統整合與落地案例',
    description: '飛行模擬、教育訓練、資料介接/推播、AI agent 與 chat 系統等交付能力。',
}

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                headline="用做過的專案建立信任"
                headlineHighlight="專案"
                headlineSuffix="建立信任"
                cycleWords={[
                    { text: '案例', className: 'text-cta' },
                    { text: '成果', className: 'text-emerald-600' },
                    { text: '實績', className: 'text-purple-600' },
                ]}
                subheadline="從飛行模擬到 AI 系統，我們已成功交付多種類型的專案。每一個案例都是我們能力的證明。"
                ctaText="查看專案"
                ctaHref="#projects"
            />

            {/* Projects */}
            <SwissProjectList />

            {/* Capabilities */}
            <SwissCapabilityGrid />

            {/* Cooperation */}
            <SwissCooperationModes />

            {/* CTA */}
            <SwissCTA
                headline="想了解更多專案細節？預約洽談，讓我們為您介紹更多案例與交付成果。"
                ctaText="預約洽談"
                ctaHref="/contact"
                secondaryText="取得報價"
                secondaryHref="/contact"
            />
        </>
    )
}
