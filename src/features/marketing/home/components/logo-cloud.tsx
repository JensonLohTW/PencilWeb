'use client'

import { useTranslations } from 'next-intl'

export function LogoCloud() {
    const t = useTranslations('pages.home.clients')
    // We use key mapping here to retrieve the array from locales
    // Note: next-intl doesn't strongly type array access via t(), 
    // so we iterate a known number of times or use raw if configured.
    // Given standard setup, we can access specific indicies or just map a static list to keys if keys are "0", "1", etc.
    // But we defined "list" as an array object in JSON.
    // To keep it simple and safe without t.raw(), we can use:

    const clients = t.raw('list') as Array<{ name: string; sector: string }>

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900 dark:text-white">
                    {t('title')}
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                    {Array.isArray(clients) && clients.map((client, index) => (
                        <div key={index} className="col-span-1 flex flex-col items-center justify-center gap-1 group">
                            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                {client.name}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {client.sector}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
