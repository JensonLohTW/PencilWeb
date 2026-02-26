'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { ArrowUpRight } from 'lucide-react'

// Per-solution icon SVGs
function SolutionIcon({ index }: { index: number }) {
    const icons = [
        // 01: VR/MR
        <svg key="01" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 0 1.5-6 9.75-6s9.75 6 9.75 6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 0 1.5 6 9.75 6s9.75-6 9.75-6" />
            <circle cx="9" cy="12" r="1.5" />
            <circle cx="15" cy="12" r="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12h3" />
        </svg>,
        // 02: AR
        <svg key="02" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
        // 03: IoT
        <svg key="03" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
            <circle cx="12" cy="18.75" r="0.75" fill="currentColor" />
        </svg>,
        // 04: AI
        <svg key="04" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
    ]
    return icons[index % icons.length]
}

const SOLUTION_TAGS = [
    ['VR', 'MR', 'Unity'],
    ['AR', '3D', 'WebXR'],
    ['IoT', 'Sensors', 'Dashboard'],
    ['AI Agent', 'LLM', 'GPT']
]

export function FeatureGrid() {
    const t = useTranslations('pages.home.solutions')
    const items = t.raw('items') as Array<{
        number: string
        title: string
        subtitle: string
        description: string
    }>

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <FadeIn className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{t('eyebrow')}</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                        {t('title')}
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                        {t.has('description') ? t('description') : ''}
                    </p>
                </FadeIn>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <StaggerContainer
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
                        as="dl"
                    >
                        {Array.isArray(items) && items.map((feature, index) => (
                            <StaggerItem
                                key={feature.number}
                                className="group relative flex flex-col rounded-2xl border border-pencil-200/70 bg-white/70 p-8 transition-all duration-300 hover:border-accent-500/30 hover:bg-white hover:shadow-xl hover:shadow-accent-500/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                            >
                                <dt className="flex items-center gap-x-4 text-xl font-bold text-pencil-950 dark:text-white">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/20 dark:text-accent-400 dark:group-hover:bg-accent-500 dark:group-hover:text-white"
                                    >
                                        <SolutionIcon index={index} />
                                    </motion.div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col">
                                    {/* Technology Tags */}
                                    <div className="mb-3 flex flex-wrap gap-1.5">
                                        {SOLUTION_TAGS[index % SOLUTION_TAGS.length].map(tag => (
                                            <span key={tag} className="inline-flex rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="flex-auto text-base/7 text-pencil-600 dark:text-pencil-400">{feature.description}</p>

                                    <p className="mt-8">
                                        <Link
                                            href="/solutions"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                                        >
                                            <span>{t('viewAll')}</span>
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </Link>
                                    </p>
                                </dd>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </div>
    )
}
