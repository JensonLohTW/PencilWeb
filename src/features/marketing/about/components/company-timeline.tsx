import { useTranslations } from 'next-intl'

export function CompanyTimeline() {
    const t = useTranslations('pages.about.timeline')
    const items = [0, 1, 2, 3]

    return (
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {items.map((index) => (
                    <div key={index}>
                        <time dateTime={t(`items.${index}.year`)} className="flex items-center text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
                            <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none fill-current">
                                <circle r={2} cx={2} cy={2} />
                            </svg>
                            {t(`items.${index}.year`)}
                            <div
                                aria-hidden="true"
                                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-200 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 dark:bg-white/15 transition-colors duration-300"
                            />
                        </time>
                        <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">{t(`items.${index}.title`)}</p>
                        <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-400 transition-colors duration-300">{t(`items.${index}.description`)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
