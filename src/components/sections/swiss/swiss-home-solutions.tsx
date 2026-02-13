'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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
        <section className="bg-white py-24 sm:py-32 dark:bg-pencil-950">
            <div className="mx-auto max-w-[1800px] px-6 lg:px-16">
                {/* Header Section */}
                <div className="mb-20 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2 lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="swiss-mono mb-6 block text-sm font-medium tracking-wider uppercase text-cta dark:text-pencil-400">
                            {t('pages.home.solutions.eyebrow')}
                        </span>
                        <h2 className="text-5xl font-bold tracking-tight text-cta sm:text-7xl dark:text-white">
                            {t('pages.home.solutions.title')}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-start lg:justify-end"
                    >
                        <a
                            href="/solutions"
                            className="group flex items-center gap-3 text-lg font-medium text-pencil-950 transition-colors hover:text-cta dark:text-white"
                        >
                            <span className="border-b border-pencil-950 pb-0.5 transition-colors group-hover:border-cta dark:border-white">
                                {t('pages.home.solutions.viewAll')}
                            </span>
                            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </motion.div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 gap-px bg-pencil-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-white/10">
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
                                className={cn(
                                    "group relative flex min-h-[420px] flex-col justify-between bg-pencil-50 p-8 transition-all duration-500",
                                    "hover:bg-pencil-950 hover:z-10",
                                    "dark:bg-pencil-900 dark:hover:bg-white"
                                )}
                            >
                                {/* Top: Number & Icon */}
                                <div className="flex w-full items-start justify-between">
                                    <span className={cn(
                                        "swiss-mono text-6xl font-bold tracking-tighter transition-colors duration-500",
                                        "text-pencil-950/10 group-hover:text-white/20",
                                        "dark:text-white/10 dark:group-hover:text-pencil-950/20"
                                    )}>
                                        {solution.number}
                                    </span>

                                    <div className={cn(
                                        "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500",
                                        "border-pencil-200 bg-white text-pencil-950 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white",
                                        "dark:border-white/10 dark:bg-pencil-800 dark:text-white dark:group-hover:border-pencil-950/10 dark:group-hover:bg-pencil-950/5 dark:group-hover:text-pencil-950"
                                    )}>
                                        <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </div>
                                </div>

                                {/* Bottom: Content */}
                                <div className="mt-auto">
                                    <h3 className={cn(
                                        "mb-3 text-2xl font-bold transition-colors duration-500",
                                        "text-pencil-950 group-hover:text-white",
                                        "dark:text-white dark:group-hover:text-pencil-950"
                                    )}>
                                        {solution.title}
                                    </h3>

                                    <div className="h-px w-12 bg-cta mb-4 origin-left transition-all duration-500 group-hover:w-full group-hover:bg-white/30 dark:group-hover:bg-pencil-950/30" />

                                    <p className={cn(
                                        "swiss-mono text-sm uppercase tracking-wide opacity-80 transition-colors duration-500",
                                        "text-pencil-600 group-hover:text-white/80",
                                        "dark:text-pencil-400 dark:group-hover:text-pencil-950/80"
                                    )}>
                                        {solution.subtitle}
                                    </p>

                                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
                                        <div className="overflow-hidden">
                                            <p className={cn(
                                                "mt-4 text-base leading-relaxed transition-colors duration-500",
                                                "text-pencil-600 group-hover:text-white/90",
                                                "dark:text-pencil-300 dark:group-hover:text-pencil-950/80"
                                            )}>
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
