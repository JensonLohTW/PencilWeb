'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ViewfinderCircleIcon,
    SparklesIcon,
    SignalIcon,
    WifiIcon,
    HandRaisedIcon,
    CubeTransparentIcon,
    ChevronDownIcon
} from '@heroicons/react/24/outline'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

const icons = [
    ViewfinderCircleIcon, // 01 XR
    SparklesIcon,         // 02 AI
    SignalIcon,           // 03 IoT
    WifiIcon,             // 04 5G/6G
    HandRaisedIcon,       // 05 Haptic
    CubeTransparentIcon   // 06 Digital Twin
]

const getBentoClasses = (index: number) => {
    switch (index) {
        case 0: return 'lg:col-span-2 lg:row-span-2 md:col-span-2' // XR: Large square
        case 1: return 'lg:col-span-1 lg:row-span-2 md:col-span-1' // AI: Tall rectangle
        case 2: return 'lg:col-span-1 lg:row-span-1 md:col-span-1' // IoT: Small square
        case 3: return 'lg:col-span-1 lg:row-span-1 md:col-span-1' // 5G/6G: Small square
        case 4: return 'lg:col-span-2 lg:row-span-1 md:col-span-2' // Haptic: Wide rectangle
        case 5: return 'lg:col-span-2 lg:row-span-1 md:col-span-2' // Digital Twin: Wide rectangle
        default: return 'lg:col-span-1'
    }
}

export function Technology() {
    const t = useTranslations('pages.home.technology')
    const list = t.raw('list') as Array<{
        number: string
        title: string
        subtitle: string
        description?: string
    }>

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <div className="overflow-hidden bg-pencil-50 py-24 sm:py-32 dark:bg-pencil-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <FadeIn className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{t('title')}</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                        {t.has('headline') ? t('headline') : t('title')}
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                        {t.has('description') ? t('description') : ''}
                    </p>
                </FadeIn>

                <StaggerContainer
                    viewport={{ once: true, amount: 0.2 }}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:grid-rows-3"
                >
                    {Array.isArray(list) && list.map((feature, index) => {
                        const isExpanded = expandedIndex === index
                        const Icon = icons[index % icons.length]
                        return (
                            <StaggerItem
                                key={feature.number}
                                className={`glass-card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-pencil-200/60 bg-white/60 backdrop-blur-md transition-all duration-300 hover:border-accent-500/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-accent-400/30 ${getBentoClasses(index)} ${isExpanded ? 'shadow-lg shadow-accent-500/10' : 'hover:-translate-y-1'}`}
                            >
                                {/* 背景微光暈 */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5 via-accent-50/30 to-accent-100/40 dark:via-transparent dark:to-accent-900/20 pointer-events-none" />

                                <div className="relative z-10 flex flex-1 flex-col">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="flex flex-1 flex-col p-8 pt-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-500"
                                        aria-expanded={isExpanded}
                                        aria-controls={`tech-details-${index}`}
                                    >
                                        <div className="flex w-full items-start justify-between">
                                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100/50 dark:bg-accent-500/10 ring-1 ring-accent-500/20 shrink-0">
                                                <Icon className="h-6 w-6 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                                            </div>
                                            <div className="flex h-12 w-12 items-center justify-center -mr-2 -mt-2">
                                                <div className={`flex items-center justify-center rounded-full p-2 transition-colors ${isExpanded ? 'bg-accent-50 dark:bg-accent-500/10' : 'group-hover:bg-pencil-100 dark:group-hover:bg-white/5'}`}>
                                                    <ChevronDownIcon
                                                        className={`h-5 w-5 transform transition-all duration-300 ease-in-out ${isExpanded ? '-rotate-180 text-accent-600 dark:text-accent-400' : 'rotate-0 text-pencil-400 dark:text-pencil-500 group-hover:text-accent-600 dark:group-hover:text-accent-400'}`}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-4">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-sm text-pencil-400 dark:text-pencil-500">{feature.number}</span>
                                                <h3 className={`text-xl font-semibold tracking-tight transition-colors ${isExpanded ? 'text-accent-600 dark:text-accent-400' : 'text-pencil-950 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400'}`}>
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="mt-2 text-base/6 text-pencil-600 dark:text-gray-400">
                                                {feature.subtitle}
                                            </p>
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                id={`tech-details-${index}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden px-8"
                                            >
                                                <div className="pb-8 pt-2">
                                                    <div className="h-px w-full bg-pencil-200/50 dark:bg-white/10 mb-4" />
                                                    <p className="text-base/7 text-pencil-600 dark:text-gray-300">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </div>
        </div>
    )
}
