import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import type { ComponentProps, ComponentType } from 'react'
import type { FeatureIconKey, SolutionsFeatureSectionProps } from '../types'

const iconMap: Record<FeatureIconKey, ComponentType<ComponentProps<'svg'>>> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  queue: ArrowPathIcon,
  security: FingerPrintIcon,
}

export function SolutionsFeatureSection({ features }: SolutionsFeatureSectionProps) {
  return (
    <section id="features" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-cta">{features.eyebrow}</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-pencil-950 sm:text-5xl lg:text-balance dark:text-white">
          {features.title}
        </p>
        <p className="mt-6 text-lg/8 text-pencil-700 dark:text-pencil-300">{features.description}</p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.items.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-pencil-950 dark:text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-cta">
                    <Icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-pencil-600 dark:text-pencil-300">{feature.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
