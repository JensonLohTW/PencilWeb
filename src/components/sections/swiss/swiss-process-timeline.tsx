'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'

interface ProcessStep {
    number: string
    title: string
    description: string
}

export function SwissProcessTimeline() {
    const { t } = useLanguage()

    // Get process steps from translations
    const stepsData = t('pages.solutions.process.steps')
    const steps = Array.isArray(stepsData) ? (stepsData as ProcessStep[]) : []

    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16">
                <p className="swiss-mono mb-2 text-pencil-500">{t('pages.solutions.process.eyebrow')}</p>
                <h2 className="text-4xl font-bold tracking-tight text-pencil-950 lg:text-5xl dark:text-white">
                    {t('pages.solutions.process.title')}
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-8 hidden h-px bg-pencil-200 lg:block dark:bg-white/20" />

                {/* Steps */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Number Circle */}
                            <div className="relative z-10 mb-6 flex size-16 items-center justify-center border-2 border-pencil-200 bg-white transition-colors group-hover:border-cta dark:bg-pencil-950 dark:border-white/30">
                                <span className="swiss-mono text-lg text-pencil-950 group-hover:text-cta dark:text-white">
                                    {step.number}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-pencil-950 dark:text-white">{step.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-pencil-400">{step.description}</p>

                            {/* Connector Arrow (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="absolute right-0 top-8 hidden -translate-y-1/2 translate-x-1/2 text-pencil-300 lg:block dark:text-white/30">
                                    →
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
