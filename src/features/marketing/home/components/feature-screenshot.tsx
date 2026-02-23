'use client'

import { useTranslations } from 'next-intl'
import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    CpuChipIcon,
    SignalIcon
} from '@heroicons/react/20/solid'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

const icons = [CloudArrowUpIcon, LockClosedIcon, ServerIcon, CpuChipIcon, SignalIcon, ServerIcon]

export function FeatureScreenshot() {
    const t = useTranslations('pages.home.technology')
    const list = t.raw('list') as Array<{
        number: string
        title: string
        subtitle: string
    }>

    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <FadeIn>
                                <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{t('title')}</h2>
                                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                                    {t.has('headline') ? t('headline') : t('title')}
                                </p>
                                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                                    {t.has('description') ? t('description') : ''}
                                </p>
                            </FadeIn>
                            <StaggerContainer
                                viewport={{ once: true, amount: 0.5 }}
                                className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 dark:text-gray-400 lg:max-w-none"
                                as="dl"
                            >
                                {Array.isArray(list) && list.map((feature, index) => {
                                    const Icon = icons[index % icons.length]
                                    return (
                                        <StaggerItem key={feature.number} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900 dark:text-white">
                                                <Icon className="absolute left-1 top-1 size-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                                                {feature.title}
                                            </dt>{' '}
                                            <dd className="inline">{feature.subtitle}</dd>
                                        </StaggerItem>
                                    )
                                })}
                            </StaggerContainer>
                        </div>
                    </div>
                    <FadeIn
                        className="flex items-start justify-end lg:order-last"
                        variant="slideInRight"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="glass-card-hover relative w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] dark:bg-gray-800 dark:ring-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 via-orange-500/10 to-transparent"></div>
                            <div className="relative p-8 h-full min-h-[400px] flex items-center justify-center text-gray-300">
                                {/* Placeholder for tech visualization - can be replaced with actual image or 3D canvas later */}
                                <div className="text-center">
                                    <CpuChipIcon className="w-24 h-24 mx-auto text-accent-500/50 mb-4" />
                                    <span className="text-xl font-mono text-accent-300">SYSTEM ARCHITECTURE VISUALIZATION</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    )
}
