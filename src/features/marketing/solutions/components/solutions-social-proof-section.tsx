import type { SolutionsSocialProofSectionProps } from '../types'
import { SolutionsLink } from './solutions-link'
import { FadeIn } from '@/components/animations/fade-in'

export function SolutionsSocialProofSection({ socialProof }: SolutionsSocialProofSectionProps) {
  return (
    <section className="mx-auto mt-16 flex max-w-7xl justify-center px-6 lg:px-8">
      <FadeIn className="relative rounded-full bg-white/80 px-4 py-1.5 text-sm/6 text-pencil-600 inset-ring inset-ring-pencil-900/10 dark:bg-pencil-900/60 dark:text-pencil-300 dark:inset-ring-white/10">
        <span className="hidden md:inline">{socialProof.text}</span>
        <SolutionsLink href={socialProof.linkHref} className="font-semibold text-cta transition-colors hover:text-pencil-950 dark:hover:text-white">
          <span aria-hidden="true" className="absolute inset-0" /> {socialProof.linkLabel}{' '}
          <span aria-hidden="true">→</span>
        </SolutionsLink>
      </FadeIn>
    </section>
  )
}
