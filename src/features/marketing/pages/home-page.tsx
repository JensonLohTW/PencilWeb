'use client'

import { Hero } from '@/features/marketing/home/components/hero'
import { LogoCloud } from '@/features/marketing/home/components/logo-cloud'
import { FeatureGrid } from '@/features/marketing/home/components/feature-grid'
import { FeatureScreenshot } from '@/features/marketing/home/components/feature-screenshot'
import { Stats } from '@/features/marketing/home/components/stats'
import { CTA } from '@/features/marketing/home/components/cta'

export default function Page() {
  return (
    <div className="page-gradient">
      <main>
        <Hero />
        <LogoCloud />
        <FeatureGrid />
        <FeatureScreenshot />
        <Stats />
        <CTA />
      </main>
    </div>
  )
}

