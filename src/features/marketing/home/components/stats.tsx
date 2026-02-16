'use client'

import { useTranslations } from 'next-intl'

export function Stats() {
    const t = useTranslations('pages.home.stats')
    const items = t.raw('items') as Array<{
        number: string
        label: string
        value: string
    }>

    return (
        <div className="bg-gray-900 py-24 sm:py-32 dark:bg-gray-900 border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('title')}</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            {t('eyebrow')}
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {Array.isArray(items) && items.map((stat) => (
                            <div key={stat.number} className="flex flex-col bg-white/5 p-8 dark:bg-white/5">
                                <dt className="text-sm/6 font-semibold text-gray-300">{stat.label}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
