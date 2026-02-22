'use client'

import { useTranslations } from 'next-intl'
import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

export function Stats() {
    const t = useTranslations('pages.home.stats')
    const items = t.raw('items') as Array<{
        number: string
        label: string
        value: string
    }>

    return (
        <div className="py-24 sm:py-32 border-t border-pencil-200 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <FadeIn className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-pencil-950 sm:text-4xl dark:text-white">{t('title')}</h2>
                        <p className="mt-4 text-lg leading-8 text-pencil-600 dark:text-gray-300">
                            {t('eyebrow')}
                        </p>
                    </FadeIn>
                    <StaggerContainer
                        as="dl"
                        viewport={{ once: true, amount: 0.5 }}
                        className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {Array.isArray(items) && items.map((stat) => (
                            <StaggerItem key={stat.number} className="glass-card-hover flex flex-col border border-pencil-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
                                <dt className="text-sm/6 font-semibold text-pencil-600 dark:text-gray-300">{stat.label}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-pencil-950 dark:text-white">{stat.value}</dd>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </div>
    )
}
