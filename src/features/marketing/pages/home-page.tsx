'use client'

import { CTA } from '@/features/marketing/home/components/cta'
import { FeatureGrid } from '@/features/marketing/home/components/feature-grid'
import { Hero } from '@/features/marketing/home/components/hero'
import { LogoCloud } from '@/features/marketing/home/components/logo-cloud'
import { Stats } from '@/features/marketing/home/components/stats'
import { Technology } from '@/features/marketing/home/components/technology'

export default function Page() {
  return (
    <div className="page-gradient">
      <main>
        <Hero />
        <LogoCloud />
        <FeatureGrid />
        <Technology />
        <Stats />
        <CTA />
      </main>
    </div>
  )
}
