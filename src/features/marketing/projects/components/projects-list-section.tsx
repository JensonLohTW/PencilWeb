'use client'

import type { ProjectsListSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'

export function ProjectsListSection({ projectList }: ProjectsListSectionProps) {
  const reduceMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState(projectList.allFilterLabel)

  const filterOptions = useMemo(
    () => [projectList.allFilterLabel, ...projectList.filters],
    [projectList.allFilterLabel, projectList.filters],
  )

  const filteredItems = useMemo(() => {
    if (activeFilter === projectList.allFilterLabel) {
      return projectList.items
    }

    return projectList.items.filter((item) => item.category === activeFilter)
  }, [activeFilter, projectList.allFilterLabel, projectList.items])

  return (
    <section id="project-list" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-10 flex flex-col gap-6 border-b border-pencil-200 pb-8 lg:flex-row lg:items-end lg:justify-between dark:border-white/10"
        >
          <div>
            <p className="swiss-mono text-xs font-semibold uppercase tracking-[0.18em] text-cta">{projectList.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
              {projectList.title}
            </h2>
          </div>
          <p className="swiss-mono text-xs uppercase tracking-[0.16em] text-pencil-500 dark:text-pencil-400">
            {projectList.items.length} {projectList.countLabel}
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setActiveFilter(option)}
              className={
                activeFilter === option
                  ? 'rounded-full border border-pencil-950 bg-pencil-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white dark:border-white dark:bg-white dark:text-pencil-950'
                  : 'rounded-full border border-pencil-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-pencil-600 transition-colors hover:border-cta hover:text-cta dark:border-white/20 dark:text-pencil-300'
              }
            >
              {option}
            </button>
          ))}
        </div>

        <div className="space-y-7">
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              id={item.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              className="rounded-2xl border border-pencil-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-pencil-900"
            >
              <div className="grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)_15rem]">
                <div className="overflow-hidden rounded-xl border border-pencil-200 dark:border-white/10">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <span className="swiss-mono text-xs text-pencil-500 dark:text-pencil-400">{item.number}</span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-pencil-950 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-pencil-600 dark:text-pencil-300">{item.category}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-pencil-200 px-3 py-1 text-xs text-pencil-600 dark:border-white/10 dark:text-pencil-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-pencil-600 dark:text-pencil-300">{item.summary}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-xl border border-pencil-200 bg-pencil-50/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="swiss-mono text-[10px] uppercase tracking-[0.18em] text-pencil-500 dark:text-pencil-400">
                      {projectList.outcomeLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-pencil-900 dark:text-white">{item.outcome}</p>
                  </div>
                  <div className="rounded-xl border border-pencil-200 bg-pencil-50/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="swiss-mono text-[10px] uppercase tracking-[0.18em] text-pencil-500 dark:text-pencil-400">
                      {projectList.timelineLabel}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-pencil-900 dark:text-white">{item.timeline}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
