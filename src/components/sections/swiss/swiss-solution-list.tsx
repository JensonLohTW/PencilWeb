'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/providers/language-provider'
import { ArrowUpRight, Plus, Minus, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Solution {
    id: string
    number: string
    title: string
    subtitle: string
    description: string
    features: string[]
    useCases: string[]
}

export function SwissSolutionList() {
    const { t } = useLanguage()
    const [expandedId, setExpandedId] = useState<string | null>(null)

    // Get solutions from translations
    const solutionsData = t('pages.solutions.list.items')
    const solutions = Array.isArray(solutionsData) ? (solutionsData as Solution[]) : []

    return (
        <section id="solutions" className="relative min-h-screen bg-pencil-50 px-6 py-32 lg:px-16 dark:bg-pencil-950">
            {/* Background Texture/Grid (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="mx-auto max-w-[1800px]">
                {/* Section Header: Classical Typography */}
                <div className="mb-24 flex flex-col items-start justify-between gap-8 border-t border-pencil-950/10 pt-8 lg:flex-row lg:items-end dark:border-white/10">
                    <div className="max-w-2xl">
                        <span className="swiss-mono mb-6 block text-sm tracking-widest text-pencil-500 dark:text-pencil-400">
                            {t('pages.solutions.list.eyebrow')} — ARCHIVE
                        </span>
                        <h2 className="font-serif text-6xl font-medium tracking-tight text-pencil-950 lg:text-8xl dark:text-white">
                            {t('pages.solutions.list.title')}
                        </h2>
                    </div>
                    <div className="swiss-mono hidden max-w-xs text-right text-xs leading-relaxed text-pencil-500 lg:block dark:text-pencil-400">
                        {t('pages.solutions.list.subtitle')}
                        <br />
                        EST. 2024 / CATALOGUE NO. 01
                    </div>
                </div>

                {/* The Archive List */}
                <div className="flex flex-col">
                    {solutions.map((solution, index) => {
                        const isExpanded = expandedId === solution.id

                        return (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "group relative border-t border-pencil-950/10 transition-all duration-500 last:border-b dark:border-white/10",
                                    isExpanded ? "bg-white dark:bg-pencil-900" : "hover:bg-white/50 dark:hover:bg-white/5"
                                )}
                            >
                                {/* Summary Row */}
                                <div
                                    onClick={() => setExpandedId(isExpanded ? null : solution.id)}
                                    className="flex cursor-pointer flex-col gap-8 py-12 lg:flex-row lg:items-baseline lg:gap-16 lg:py-16"
                                >
                                    {/* Serif Number */}
                                    <span className="font-serif text-4xl text-pencil-300 transition-colors group-hover:text-cta lg:text-5xl dark:text-pencil-600">
                                        {solution.number}
                                    </span>

                                    {/* Title & Subtitle */}
                                    <div className="flex flex-1 flex-col gap-2 lg:flex-row lg:items-baseline lg:gap-8">
                                        <h3 className={cn(
                                            "font-serif text-3xl font-medium transition-colors duration-300 lg:text-5xl",
                                            isExpanded ? "text-cta" : "text-pencil-950 group-hover:text-pencil-800 dark:text-white"
                                        )}>
                                            {solution.title}
                                        </h3>
                                        <span className="swiss-mono text-sm text-pencil-400 dark:text-pencil-500">
                                            {solution.subtitle}
                                        </span>
                                    </div>

                                    {/* Indicator */}
                                    <div className="flex items-center justify-end pr-4">
                                        <div className={cn(
                                            "flex h-12 w-12 items-center justify-center rounded-full border border-pencil-200 transition-all duration-300 dark:border-white/10",
                                            isExpanded ? "bg-cta border-cta rotate-90" : "group-hover:border-cta group-hover:text-cta"
                                        )}>
                                            {isExpanded ?
                                                <Minus className="h-5 w-5 text-white" /> :
                                                <Plus className="h-5 w-5" />
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content: The Blueprint */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-1 gap-12 pb-16 pt-4 lg:grid-cols-12 lg:gap-24 lg:pl-[120px]">
                                                {/* Description Column */}
                                                <div className="lg:col-span-5">
                                                    <p className="font-serif text-xl leading-relaxed text-pencil-600 dark:text-pencil-300">
                                                        {solution.description}
                                                    </p>

                                                    <div className="mt-12">
                                                        <Link
                                                            href="/contact"
                                                            className="group/btn inline-flex items-center gap-4 text-lg font-medium text-pencil-950 transition-colors hover:text-cta dark:text-white"
                                                        >
                                                            <span className="border-b border-pencil-950 pb-1 transition-colors group-hover/btn:border-cta dark:border-white">
                                                                {t('pages.solutions.list.bookDemo')}
                                                            </span>
                                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Details Column (Grid Lines) */}
                                                <div className="lg:col-span-7">
                                                    <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
                                                        {/* Features */}
                                                        <div className="relative">
                                                            <div className="swiss-mono mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pencil-400 dark:text-pencil-500">
                                                                <span className="h-px w-4 bg-cta" />
                                                                {t('pages.solutions.list.mainFeatures')}
                                                            </div>
                                                            <ul className="space-y-4">
                                                                {solution.features?.map((feature, idx) => (
                                                                    <li key={idx} className="flex items-baseline gap-4 text-pencil-600 dark:text-pencil-300">
                                                                        <span className="swiss-mono text-xs text-pencil-300 dark:text-pencil-600">0{idx + 1}</span>
                                                                        <span>{feature}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* Use Cases */}
                                                        <div className="relative">
                                                            <div className="swiss-mono mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pencil-400 dark:text-pencil-500">
                                                                <span className="h-px w-4 bg-pencil-300 dark:bg-pencil-600" />
                                                                {t('pages.solutions.list.useCases')}
                                                            </div>
                                                            <ul className="space-y-4">
                                                                {solution.useCases?.map((useCase, idx) => (
                                                                    <li key={idx} className="flex items-baseline gap-4 text-pencil-600 dark:text-pencil-300">
                                                                        <span className="swiss-mono text-xs text-pencil-300 dark:text-pencil-600">A{idx + 1}</span>
                                                                        <span>{useCase}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
