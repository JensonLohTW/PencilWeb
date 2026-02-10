'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/providers/language-provider'

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
        <section id="solutions" className="border-t border-pencil-200 px-6 py-24 lg:px-16">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6">
                <div>
                    <p className="swiss-mono mb-2 text-pencil-500">{t('pages.solutions.list.eyebrow')}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl">
                        {t('pages.solutions.list.title')}
                    </h2>
                </div>
                <p className="swiss-mono hidden text-pencil-400 md:block">{t('pages.solutions.list.subtitle')}</p>
            </div>

            {/* Solution List */}
            <div className="space-y-0">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.id}
                        id={solution.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group border-b border-pencil-200"
                    >
                        {/* Main Row */}
                        <div
                            className="flex cursor-pointer items-center gap-8 py-8 transition-colors hover:bg-pencil-50 lg:gap-16"
                            onClick={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
                        >
                            {/* Number */}
                            <span className="swiss-mono w-12 text-pencil-400 transition-colors group-hover:text-cta">
                                {solution.number}
                            </span>

                            {/* Title */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-pencil-900 transition-colors group-hover:text-cta lg:text-3xl">
                                    {solution.title}
                                </h3>
                                <p className="swiss-mono mt-1 text-pencil-400">{solution.subtitle}</p>
                            </div>

                            {/* Expand Icon */}
                            <span
                                className={`text-2xl text-pencil-300 transition-transform group-hover:text-cta ${expandedId === solution.id ? 'rotate-45' : ''
                                    }`}
                            >
                                +
                            </span>
                        </div>

                        {/* Expanded Content */}
                        {expandedId === solution.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden border-t border-pencil-100 bg-pencil-50 px-6 py-8 lg:px-16"
                            >
                                {/* Description */}
                                <p className="mb-8 text-lg text-pencil-600">{solution.description}</p>

                                <div className="grid gap-8 md:grid-cols-2">
                                    {/* Features */}
                                    <div>
                                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-pencil-400">
                                            {t('pages.solutions.list.mainFeatures')}
                                        </h4>
                                        <ul className="space-y-2">
                                            {solution.features?.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cta" />
                                                    <span className="text-pencil-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Use Cases */}
                                    <div>
                                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-pencil-400">
                                            {t('pages.solutions.list.useCases')}
                                        </h4>
                                        <ul className="space-y-2">
                                            {solution.useCases?.map((useCase, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                                                    <span className="text-pencil-600">{useCase}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 border-b-2 border-pencil-950 pb-1 font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta"
                                    >
                                        {t('pages.solutions.list.bookDemo')} <span>→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
