'use client'

import { BoltIcon, CalendarDaysIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

const iconMap = [BoltIcon, CalendarDaysIcon, UsersIcon, GlobeAltIcon]

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
                        {Array.isArray(items) && items.map((feature, index) => {
                            const Icon = iconMap[index % iconMap.length]
                            return (
                                <StaggerItem key={feature.number} className="glass-card-hover flex flex-col rounded-2xl border border-pencil-200/70 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                                        <div className="h-10 w-10 flex-none flex items-center justify-center rounded-lg bg-accent-600 dark:bg-accent-500/20">
                                            <Icon className="h-6 w-6 text-white dark:text-accent-400" aria-hidden="true" />
                                        </div>
                                        {feature.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <Link href="/solutions" className="text-sm/6 font-semibold text-accent-600 dark:text-accent-400">
                                                {t('viewAll')} <span aria-hidden="true">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </StaggerItem>
                            )
                        })}
                    </StaggerContainer>
                </div>
            </div>
        </div>
    )
}
