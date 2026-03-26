import { AboutHero } from '../about/components/about-hero'
import { AboutStats } from '../about/components/about-stats'
import { CompanyTimeline } from '../about/components/company-timeline'
import { JobOpenings } from '../about/components/job-openings'
import { PartnerLogos } from '../about/components/partner-logos'
import { TeamSection } from '../about/components/team-section'

export default function AboutPage() {
  return (
    <div className="page-gradient min-h-screen transition-colors duration-300">
      <main className="isolate">
        <AboutHero />
        <CompanyTimeline />
        <PartnerLogos />
        <TeamSection />
        <AboutStats />
        <JobOpenings />
      </main>
    </div>
  )
}
