import type { Metadata } from 'next'
import { SwissHeroEnhanced } from '@/components/sections/swiss/swiss-hero-enhanced'
import { SwissStatsGrid } from '@/components/sections/swiss/swiss-stats-grid'
import { SwissTimeline } from '@/components/sections/swiss/swiss-timeline'
import { SwissCompanyInfo } from '@/components/sections/swiss/swiss-company-info'
import { SwissCTA } from '@/components/sections/swiss/swiss-cta'

export const metadata: Metadata = {
  title: '關於我們｜空間動態科技 Pencil',
  description:
    '空間動態科技致力於整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，打造下一個世代的沉浸式互動體驗。',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <SwissHeroEnhanced
        eyebrow="關於我們"
        headline="We Build The OASIS"
        headlineHighlight="OASIS"
        cycleWords={[
          { text: 'FUTURE', className: 'text-cta font-mono tracking-widest' },
          { text: 'DREAM', className: 'text-purple-600 font-serif italic' },
          { text: 'REALITY', className: 'text-emerald-600 font-bold' },
        ]}
        subheadline="空間動態科技致力於整合 XR 裝置、AI 大數據、5G/6G 網路與五感技術，打造下一個世代的沉浸式互動體驗。"
        ctaText="了解更多"
        ctaHref="#stats"
        centered
      />

      {/* Stats */}
      <div id="stats">
        <SwissStatsGrid />
      </div>

      {/* Timeline */}
      <SwissTimeline />

      {/* Company Info */}
      <SwissCompanyInfo />

      {/* CTA */}
      <SwissCTA
        headline="想加入我們的團隊，或與我們合作？"
        ctaText="聯繫我們"
        ctaHref="/contact"
        secondaryText="查看專案"
        secondaryHref="/projects"
      />
    </>
  )
}
