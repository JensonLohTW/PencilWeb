'use client'

import { BoltIcon, CalendarDaysIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

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
        <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">{t('eyebrow')}</h2>
                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
                        {t('title')}
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
                        {t.has('description') ? t('description') : ''}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {Array.isArray(items) && items.map((feature, index) => {
                            const Icon = iconMap[index % iconMap.length]
                            return (
                                <div key={feature.number} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
                                        <div className="h-10 w-10 flex-none flex items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500/20">
                                            <Icon className="h-6 w-6 text-white dark:text-indigo-400" aria-hidden="true" />
                                        </div>
                                        {feature.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                                        <p className="flex-auto">{feature.description}</p>
                                        <p className="mt-6">
                                            <Link href="/solutions" className="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">
                                                {t('viewAll')} <span aria-hidden="true">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </div>
                            )
                        })}
                    </dl>
                </div>
            </div>
        </div>
    )
}
