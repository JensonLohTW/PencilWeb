'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

interface SolutionItem {
    number: string
    title: string
    subtitle: string
    description: string
}

export function SwissHomeSolutions() {
    const { t } = useLanguage()

    // Get solutions from translations
    const solutionsData = t('pages.home.solutions.items')
    const solutions = Array.isArray(solutionsData) ? (solutionsData as SolutionItem[]) : []

    return (
        <section className="px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500 dark:text-pencil-400">{t('pages.home.solutions.eyebrow')}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
                        {t('pages.home.solutions.title')}
                    </h2>
                </div>
                <a href="/solutions" className="swiss-mono hidden text-pencil-400 transition-colors hover:text-cta md:block dark:text-pencil-500">
                    {t('pages.home.solutions.viewAll')} →
                </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-px bg-pencil-200 md:grid-cols-2 lg:grid-cols-4 dark:bg-white/10">
                {solutions.map((solution, index) => {
                    const solutionId = `solution-${solution.number}`

                    return (
                        <motion.a
                            key={solution.number}
                            href={`/solutions#${solutionId}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-pencil-50 p-8 transition-colors hover:bg-white dark:bg-pencil-900 dark:hover:bg-pencil-800"
                        >
                            {/* Number Badge */}
                            <span className="swiss-mono mb-6 text-5xl font-bold text-pencil-200 transition-colors group-hover:text-cta dark:text-white/20">
                                {solution.number}
                            </span>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold text-pencil-950 transition-colors group-hover:text-cta dark:text-white">
                                    {solution.title}
                                </h3>
                                <p className="swiss-mono text-sm text-pencil-400 dark:text-pencil-500">{solution.subtitle}</p>
                                <p className="mt-2 text-sm leading-relaxed text-pencil-600 dark:text-pencil-400">{solution.description}</p>
                            </div>

                            {/* Arrow */}
                            <span className="mt-6 text-2xl text-pencil-300 transition-all group-hover:translate-x-2 group-hover:text-cta dark:text-pencil-600">
                                →
                            </span>
                        </motion.a>
                    )
                })}
            </div>
        </section>
    )
}
