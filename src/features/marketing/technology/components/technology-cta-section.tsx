'use client'

import { FadeIn } from '@/components/animations/fade-in'
import type { TechnologyCtaSectionProps } from '@/features/marketing/technology/types'
import { Link } from '@/i18n/routing'

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

export function TechnologyCtaSection({ cta }: TechnologyCtaSectionProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-pencil-950 sm:text-5xl dark:text-white">
            {cta.title}
          </h2>
          <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">{cta.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {renderAction(
              cta.primaryAction.href,
              cta.primaryAction.label,
              'rounded-md bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-pencil-950 dark:hover:bg-white dark:hover:text-pencil-950',
            )}
            {renderAction(
              cta.secondaryAction.href,
              cta.secondaryAction.label,
              'text-sm/6 font-semibold text-pencil-950 transition-colors hover:text-cta dark:text-white dark:hover:text-cta',
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
