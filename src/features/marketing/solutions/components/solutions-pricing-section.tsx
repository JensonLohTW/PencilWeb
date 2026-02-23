import { CheckIcon } from '@heroicons/react/20/solid'
import type { SolutionsPricingSectionProps } from '../types'
import { SolutionsLink } from './solutions-link'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function SolutionsPricingSection({ pricing, buyPlanLabel }: SolutionsPricingSectionProps) {
  return (
    <section id="pricing" className="py-24 sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-cta">{pricing.eyebrow}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-5xl dark:text-white">
            {pricing.title}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="mx-auto mt-6 max-w-2xl text-center text-lg/8 text-pretty text-pencil-600 sm:text-xl/8 dark:text-pencil-300">
          {pricing.description}
        </FadeIn>

        <StaggerContainer
          viewport={{ once: true, amount: 0.2 }}
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {pricing.tiers.map((tier, tierIdx) => (
            <StaggerItem
              as="article"
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 && '-mr-px lg:rounded-r-none',
                tierIdx === pricing.tiers.length - 1 && '-ml-px lg:rounded-l-none',
                'glass-card-hover flex flex-col justify-between rounded-3xl bg-white p-8 inset-ring inset-ring-pencil-200 dark:bg-pencil-900 dark:inset-ring-white/10 xl:p-10',
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-cta' : 'text-pencil-950 dark:text-white',
                      'text-lg/8 font-semibold',
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-cta/10 px-2.5 py-1 text-xs/5 font-semibold text-cta">
                      {pricing.mostPopularLabel}
                    </p>
                  ) : null}
                </div>

                <p className="mt-4 text-sm/6 text-pencil-600 dark:text-pencil-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-pencil-950 dark:text-white">{tier.priceMonthly}</span>
                  <span className="text-sm/6 font-semibold text-pencil-600 dark:text-pencil-300">{pricing.perMonthLabel}</span>
                </p>

                <ul role="list" className="mt-8 space-y-3 text-sm/6 text-pencil-600 dark:text-pencil-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-cta" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <SolutionsLink
                href={tier.href}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-cta text-white shadow-xs hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950'
                    : 'text-cta inset-ring inset-ring-cta/30 hover:inset-ring-cta/60 dark:text-white dark:inset-ring-white/25',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold transition-colors',
                )}
              >
                {buyPlanLabel}
              </SolutionsLink>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
