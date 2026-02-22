import { SolutionsLink } from './solutions-link'
import type { SolutionsHeroSectionProps } from '../types'
import { FadeIn } from '@/components/animations/fade-in'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'
import { ParticleField } from '@/shared/ui/animations/particle-field'
import { SolutionsImageCarousel } from './solutions-image-carousel'

export function SolutionsHeroSection({ hero }: SolutionsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-14">
      <ParticleField className="opacity-60" />
      <ParallaxLayer
        aria-hidden="true"
        y={['-3%', '6%']}
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent-200 to-accent-400 opacity-20 dark:opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
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
              <KineticHeading
                as="h1"
                text={hero.title}
                className="text-5xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-7xl dark:text-white"
              />
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
            </FadeIn>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <FadeIn delay={0.2}>
              <SolutionsImageCarousel />
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
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-accent-200 to-accent-400 opacity-20 dark:opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </ParallaxLayer>
    </section>
  )
}
