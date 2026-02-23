'use client'

import Image from 'next/image'
import type { ProjectsTestimonialsSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'

function chunk<T>(items: T[], size: number): T[][] {
  const result: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size))
  }
  return result
}

export function ProjectsTestimonialsSection({ testimonials }: ProjectsTestimonialsSectionProps) {
  const reduceMotion = useReducedMotion()
  const columns = chunk(testimonials.items, 2)

  return (
    <section className="border-y border-pencil-200 bg-pencil-50 px-6 py-24 lg:px-16 dark:border-white/10 dark:bg-pencil-950/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-3xl"
        >
          <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{testimonials.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
            {testimonials.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.1fr_minmax(0,1fr)]">
          <motion.figure
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="glass-card-hover rounded-2xl border border-pencil-200 bg-white shadow-sm dark:border-white/10 dark:bg-pencil-900"
          >
            <blockquote className="p-8 text-lg font-medium leading-relaxed text-pencil-900 sm:p-10 sm:text-xl dark:text-white">
              <p>{`“${testimonials.featured.quote}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-4 border-t border-pencil-200 px-8 py-5 dark:border-white/10 sm:px-10">
              <Image
                src={testimonials.featured.author.imageUrl}
                alt={testimonials.featured.author.name}
                width={44}
                height={44}
                className="size-11 rounded-full border border-pencil-200 object-cover dark:border-white/10"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-pencil-900 dark:text-white">{testimonials.featured.author.name}</p>
                <p className="truncate text-sm text-pencil-600 dark:text-pencil-300">@{testimonials.featured.author.handle}</p>
              </div>
              {testimonials.featured.author.logoUrl ? (
                <Image
                  src={testimonials.featured.author.logoUrl}
                  alt={`${testimonials.featured.author.name} company logo`}
                  width={120}
                  height={32}
                  className="h-8 w-auto opacity-80 dark:opacity-70"
                />
              ) : null}
            </figcaption>
          </motion.figure>

          <div className="grid gap-6 sm:grid-cols-2">
            {columns.map((column, columnIndex) => (
              <div key={`column-${columnIndex}`} className="space-y-6">
                {column.map((item, itemIndex) => (
                  <motion.figure
                    key={`${item.author.handle}-${itemIndex}`}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : columnIndex * 0.08 + itemIndex * 0.05,
                    }}
                    className="glass-card-hover rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-pencil-900"
                  >
                    <blockquote className="text-sm leading-relaxed text-pencil-700 dark:text-pencil-200">
                      <p>{`“${item.quote}”`}</p>
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <Image
                        src={item.author.imageUrl}
                        alt={item.author.name}
                        width={36}
                        height={36}
                        className="size-9 rounded-full border border-pencil-200 object-cover dark:border-white/10"
                      />
                      <div>
                        <p className="text-sm font-semibold text-pencil-900 dark:text-white">{item.author.name}</p>
                        <p className="text-xs text-pencil-500 dark:text-pencil-300">@{item.author.handle}</p>
                      </div>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
