'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import type { ProjectsHeroSectionProps } from '@/features/marketing/projects/types'
import { FadeIn } from '@/components/animations/fade-in'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParticleField } from '@/shared/ui/animations/particle-field'

function renderAction(
  href: string,
  label: string,
  className: string,
) {
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

export function ProjectsHeroSection({ hero }: ProjectsHeroSectionProps) {

  return (
    <section className="relative isolate overflow-hidden border-b border-pencil-200 px-6 pb-24 pt-24 lg:px-16 lg:pt-32 dark:border-white/10">
      <ParticleField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(12,10,9,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(12,10,9,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 dark:bg-[linear-gradient(rgba(248,250,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.06)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-neon-100/40 to-transparent dark:from-neon-950/20" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <FadeIn>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-pencil-300 bg-white/80 px-4 py-1.5 text-sm text-pencil-700 backdrop-blur-sm dark:border-white/20 dark:bg-pencil-900/70 dark:text-pencil-300">
            <span className="font-semibold text-cta">{hero.announcement.label}</span>
            <span className="h-4 w-px bg-pencil-300 dark:bg-white/20" />
            {renderAction(hero.announcement.href, hero.announcement.linkLabel, 'font-medium hover:text-cta')}
          </div>

          <KineticHeading
            as="h1"
            text={hero.title}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-pencil-950 sm:text-6xl lg:text-7xl dark:text-white"
          />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pencil-600 sm:text-xl dark:text-pencil-300">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {renderAction(
              hero.primaryAction.href,
              hero.primaryAction.label,
              'inline-flex items-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neon-700',
            )}
            {renderAction(
              hero.secondaryAction.href,
              hero.secondaryAction.label,
              'inline-flex items-center gap-2 text-sm font-semibold text-pencil-900 transition-colors hover:text-cta dark:text-white dark:hover:text-neon-300',
            )}
          </div>
        </FadeIn>

        <FadeIn
          variant="slideInRight"
          delay={0.1}
          className="mx-auto w-full max-w-[22rem]"
        >
          <div className="relative rounded-[2rem] border border-pencil-300 bg-pencil-900 p-4 shadow-2xl shadow-pencil-950/15 dark:border-white/15 dark:bg-black">
            <div className="overflow-hidden rounded-[1.5rem] border border-pencil-700 dark:border-white/10">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                className="h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
