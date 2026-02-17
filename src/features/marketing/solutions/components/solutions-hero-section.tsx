import { SolutionsLink } from './solutions-link'
import type { SolutionsHeroSectionProps } from '../types'

export function SolutionsHeroSection({ hero }: SolutionsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent-200 to-accent-400 opacity-20 dark:opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-7xl dark:text-white">
              {hero.title}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-pencil-600 sm:text-xl/8 dark:text-pencil-300">
              {hero.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SolutionsLink
                href={hero.primaryAction.href}
                className="rounded-md bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950"
              >
                {hero.primaryAction.label}
              </SolutionsLink>
              <SolutionsLink
                href={hero.secondaryAction.href}
                className="text-sm/6 font-semibold text-pencil-950 transition-colors hover:text-cta dark:text-white dark:hover:text-cta"
              >
                {hero.secondaryAction.label} <span aria-hidden="true">→</span>
              </SolutionsLink>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-pencil-900/5 p-2 ring-1 ring-pencil-900/10 ring-inset dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                className="w-304 rounded-md bg-white shadow-xl ring-1 ring-pencil-900/10 dark:bg-pencil-900 dark:ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-accent-200 to-accent-400 opacity-20 dark:opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
