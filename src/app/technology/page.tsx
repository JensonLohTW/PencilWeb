import type { Metadata } from 'next'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissTechModules } from '@/components/sections/swiss/swiss-tech-modules'
import { SwissSystemFlow } from '@/components/sections/swiss/swiss-system-flow'
import { SwissQualityAssurance } from '@/components/sections/swiss/swiss-quality-assurance'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export const metadata: Metadata = {
    title: '技術核心｜XR（VR/AR/MR）裝置整合 × AI × 5G/6G × 五感互動',
    description:
        '以 XR 為基礎，整合 haptic、全向跑步機、AI 與高速網路，打造可落地的沉浸式互動系統。',
}

export default function TechnologyPage() {
    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow="技術核心"
                headline="打造可落地的沉浸式互動體驗"
                headlineHighlight="沉浸式"
                cycleWords={[
                    { text: '真實感', className: 'text-cta font-serif italic' },
                    { text: '互動性', className: 'text-cyan-600 font-mono' },
                    { text: '智能化', className: 'text-purple-600' },
                ]}
                subheadline="以 OASIS 為願景，整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，讓技術為您的業務創造實質價值。"
                ctaText="查看技術模組"
                ctaHref="#tech-modules"
            />

            {/* Tech Modules */}
            <SwissTechModules />

            {/* System Integration Flow */}
            <SwissSystemFlow />

            {/* Quality Assurance */}
            <SwissQualityAssurance />

            {/* CTA */}
            <SwissCTA
                headline="想了解更多技術細節？我們的技術團隊可以為您提供更深入的技術諮詢與方案建議。"
                ctaText="洽談技術合作"
                ctaHref="/contact"
                secondaryText="查看應用場景"
                secondaryHref="/solutions"
            />
        </>
    )
}
