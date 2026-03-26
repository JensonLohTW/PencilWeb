'use client'

import { FadeIn } from '@/components/animations/fade-in'
import type { TechnologyHeroSectionProps } from '@/features/marketing/technology/types'
import { Link } from '@/i18n/routing'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'
import { ParticleField } from '@/shared/ui/animations/particle-field'

function renderAction(href: string, label: string, className: string) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export function TechnologyHeroSection({ hero }: TechnologyHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-14">
      <ParticleField className="opacity-60" />
      <ParallaxLayer
        aria-hidden="true"
        y={['-3%', '6%']}
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent-200 to-accent-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-10"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </ParallaxLayer>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <p className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{hero.eyebrow}</p>
              <KineticHeading
                as="h1"
                text={hero.title}
                className="mt-4 text-5xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-7xl dark:text-white"
              />
              <p className="mt-8 text-lg font-medium text-pretty text-pencil-600 sm:text-xl/8 dark:text-pencil-300">
                {hero.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {renderAction(
                  hero.primaryAction.href,
                  hero.primaryAction.label,
                  'rounded-md bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950',
                )}
                {renderAction(
                  hero.secondaryAction.href,
                  hero.secondaryAction.label,
                  'text-sm/6 font-semibold text-pencil-950 transition-colors hover:text-cta dark:text-white dark:hover:text-cta',
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <ParallaxLayer
        aria-hidden="true"
        y={['2%', '-4%']}
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-accent-200 to-accent-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:opacity-10"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </ParallaxLayer>
    </section>
  )
}
