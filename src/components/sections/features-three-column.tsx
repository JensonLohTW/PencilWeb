'use client'

import { clsx } from 'clsx/lite'

import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'

export function Feature({
  icon,
  headline,
  subheadline,
  cta,
  className,
  ...props
}: {
  icon?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-black/5 bg-black/5 p-8 transition-all duration-300 dark:border-white/5 dark:bg-white/5',
        'hover:-translate-y-1 hover:border-cta/30 hover:bg-white dark:hover:bg-white/10',
        'shadow-sm hover:shadow-lg hover:shadow-cta/5',
        className
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }}
      {...props}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(196, 104, 47, 0.1), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      {/* Holographic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none dark:from-white/5" />

      <div className="relative z-10 flex items-start text-pencil-950 dark:text-white">
        {icon && (
          <div className="mb-2 flex size-12 shrink-0 items-center justify-center rounded-lg bg-pencil-100 text-cta shadow-inner dark:bg-black/20 dark:text-cta group-hover:bg-cta group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-pencil-900 group-hover:text-glow-neon transition-all dark:text-white">{headline}</h3>
        <div className="mt-2 text-pencil-600 text-sm leading-relaxed group-hover:text-pencil-900 transition-colors dark:text-pencil-400 dark:group-hover:text-pencil-200">
          {subheadline}
        </div>
      </div>

      {cta && <div className="relative z-10 mt-auto pt-4">{cta}</div>}
    </div>
  )
}


export function FeaturesThreeColumn({
  features,
  className,
  ...props
}: {
  demo?: ReactNode
  features: ReactNode
} & Omit<ComponentProps<typeof Section>, 'children'>) {
  return (
    <Section className={clsx('relative', className)} {...props}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features}
      </div>
    </Section>
  )
}
