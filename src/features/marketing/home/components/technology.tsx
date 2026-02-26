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
import { cn } from '@/shared/lib/cn'

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
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:auto-rows-min lg:items-start"
                >
                    {Array.isArray(list) && list.map((feature, index) => {
                        const isExpanded = expandedIndex === index
                        const Icon = icons[index % icons.length]
                        return (
                            <StaggerItem
                                key={feature.number}
                                onMouseEnter={() => setExpandedIndex(index)}
                                onMouseLeave={() => setExpandedIndex(null)}
                                className={cn(
                                    "relative rounded-[2.5rem] p-1", // 偵測層 (Detector): 穩定不變的 Hitbox
                                    getBentoClasses(index)
                                )}
                            >
                                {/* 視覺層 (Canvas): 負責呈現位移、發光與特效 */}
                                <motion.div
                                    animate={{
                                        scale: isExpanded ? 1.02 : 1,
                                        y: isExpanded ? -4 : 0,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                                    className={cn(
                                        "relative flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-pencil-200/50 bg-white/40 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5",
                                        "transition-all duration-500",
                                        isExpanded ? "shadow-2xl shadow-accent-500/15 ring-1 ring-accent-500/20" : "shadow-sm hover:shadow-md"
                                    )}
                                >
                                    {/* 動態背景發光 (Adaptive Glow) */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br from-accent-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 pointer-events-none dark:from-accent-500/10",
                                        isExpanded && "opacity-100"
                                    )} />

                                    <div className="relative z-10 flex flex-1 flex-col p-8 lg:p-10">
                                        <div className="flex w-full items-start justify-between">
                                            {/* 磁性圖示環 */}
                                            <motion.div
                                                animate={{
                                                    rotate: isExpanded ? 5 : 0,
                                                    scale: isExpanded ? 1.1 : 1
                                                }}
                                                className={cn(
                                                    "mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500",
                                                    isExpanded ? "bg-accent-500 text-white shadow-lg shadow-accent-500/25" : "bg-accent-100/50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400"
                                                )}
                                            >
                                                <Icon className="h-7 w-7" aria-hidden="true" />
                                            </motion.div>

                                            <div className={cn(
                                                "flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500",
                                                isExpanded ? "bg-accent-50 dark:bg-white/10" : "bg-transparent"
                                            )}>
                                                <ChevronDownIcon
                                                    className={cn(
                                                        "h-5 w-5 transition-transform duration-500",
                                                        isExpanded ? "-rotate-180 text-accent-600 dark:text-accent-400" : "rotate-0 text-pencil-300"
                                                    )}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-500/60 dark:text-accent-400/50">
                                                    {feature.number}
                                                </span>
                                                <h3 className={cn(
                                                    "text-2xl font-bold tracking-tight transition-colors duration-300",
                                                    isExpanded ? "text-accent-600 dark:text-accent-300" : "text-pencil-950 dark:text-white"
                                                )}>
                                                    {feature.title}
                                                </h3>
                                            </div>
                                            <p className="mt-4 text-base/7 text-pencil-600 dark:text-gray-400">
                                                {feature.subtitle}
                                            </p>
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isExpanded && (
                                                <motion.div
                                                    id={`tech-details-${index}`}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        height: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
                                                        opacity: { duration: 0.3 }
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-6">
                                                        <div className="h-px w-12 bg-accent-500/30 mb-6" />
                                                        <motion.p
                                                            initial={{ y: 12, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.1, duration: 0.4 }}
                                                            className="text-base/7 leading-relaxed text-pencil-700 dark:text-gray-300"
                                                        >
                                                            {feature.description}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </div>
        </div>
    )
}
