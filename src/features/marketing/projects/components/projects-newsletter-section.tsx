'use client'

import type { ProjectsNewsletterSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'

export function ProjectsNewsletterSection({ newsletter }: ProjectsNewsletterSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-6 py-24 lg:px-16">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-pencil-900 bg-pencil-950 px-6 py-16 sm:px-12 lg:px-16 dark:border-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{newsletter.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-pencil-300 sm:text-lg">{newsletter.description}</p>
        </div>

        <form className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="projects-newsletter-email" className="sr-only">
            Email
          </label>
          <input
            id="projects-newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={newsletter.emailPlaceholder}
            className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-pencil-300 focus:border-neon-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-pencil-900 transition-colors hover:bg-pencil-100"
          >
            {newsletter.submitLabel}
          </button>
        </form>
      </motion.div>
    </section>
  )
}
