'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/shared/providers/language-provider'

// Tech stack items - these are language-independent
const techStack = [
    { number: '01', title: 'XR', subtitle: 'VR/MR/AR' },
    { number: '02', title: 'AI', subtitle: 'LLM/Agent' },
    { number: '03', title: 'IoT', subtitle: 'Sensors' },
    { number: '04', title: '5G/6G', subtitle: 'Network' },
    { number: '05', title: 'Haptic', subtitle: 'Feedback' },
    { number: '06', title: 'Digital Twin', subtitle: 'Simulation' },
]

export function SwissHomeTech() {
    const { t } = useLanguage()

    return (
        <section className="border-t border-pencil-200 bg-white px-6 py-24 lg:px-16 dark:bg-pencil-950 dark:border-white/10">
            {/* Section Header */}
            <div className="mb-16 flex items-end justify-between border-b border-pencil-200 pb-6 dark:border-white/10">
                <div>
                    <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">{t('nav.technology')}</p>
                    <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
                        {t('pages.home.technology.title')}
                    </h2>
                </div>
                <Link
                    href="/technology"
                    className="hidden items-center gap-2 border-b border-pencil-950 pb-1 text-sm font-medium text-pencil-950 transition-colors hover:border-cta hover:text-cta md:inline-flex dark:text-white dark:border-white"
                >
                    {t('common.learnMore')} <span>→</span>
                </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        {/* Number */}
                        <span className="swiss-mono text-pencil-600 dark:text-pencil-500">{tech.number}</span>

                        {/* Title */}
                        <h3 className="mt-2 text-2xl font-bold text-pencil-950 transition-colors group-hover:text-cta lg:text-3xl dark:text-white">
                            {tech.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="swiss-mono mt-1 text-pencil-500 dark:text-pencil-400">{tech.subtitle}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
