import type { SolutionsCtaSectionProps } from '../types'
import { FadeIn } from '@/components/animations/fade-in'
import { SolutionsLink } from './solutions-link'

export function SolutionsCtaSection({ cta }: SolutionsCtaSectionProps) {
  return (
    <section className="relative -z-10 mt-32 px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:top-auto sm:right-[calc(50%-6rem)] sm:bottom-0 sm:translate-y-0 sm:justify-end"
      >
        <div
          className="aspect-1108/632 w-277 flex-none bg-linear-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
          style={{
            clipPath:
              'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
          }}
        />
      </div>

      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-5xl dark:text-white">
          {cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-pencil-600 dark:text-pencil-300">{cta.description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <SolutionsLink
            href={cta.primaryAction.href}
            className="rounded-md bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950"
          >
            {cta.primaryAction.label}
          </SolutionsLink>
          <SolutionsLink
            href={cta.secondaryAction.href}
            className="text-sm/6 font-semibold text-pencil-950 transition-colors hover:text-cta dark:text-white dark:hover:text-cta"
          >
            {cta.secondaryAction.label} <span aria-hidden="true">→</span>
          </SolutionsLink>
        </div>
      </FadeIn>
    </section>
  )
}
