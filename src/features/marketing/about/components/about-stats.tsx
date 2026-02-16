import { useTranslations } from 'next-intl'
import { clsx } from 'clsx'

export function AboutStats() {
    const t = useTranslations('pages.about.stats')
    const stats = [0, 1, 2]

    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white transition-colors duration-300">
                    {t('headline')}
                </h2>
                <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    {t('description')}
                </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                {stats.map((index) => (
                    <div
                        key={index}
                        className={clsx(
                            "flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 ring-1 ring-inset transition-colors duration-300",
                            index === 0 ? "bg-gray-50 ring-gray-200 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start hover:bg-gray-100 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10" :
                                index === 1 ? "bg-gray-900 ring-gray-800 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 hover:bg-gray-800 dark:bg-gray-700 dark:ring-white/10 dark:hover:bg-gray-600" :
                                    "bg-indigo-600 ring-indigo-500 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 hover:bg-indigo-500 dark:ring-white/10"
                        )}
                    >
                        <p className={clsx(
                            "flex-none text-3xl font-bold tracking-tight transition-colors duration-300",
                            index === 0 ? "text-gray-900 dark:text-white" : "text-white"
                        )}>
                            {t(`items.${index}.value`)}
                        </p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className={clsx(
                                "text-lg font-semibold tracking-tight transition-colors duration-300",
                                index === 0 ? "text-gray-900 dark:text-white" : "text-white"
                            )}>
                                {t(`items.${index}.label`)}
                            </p>
                            <p className={clsx(
                                "mt-2 text-base/7 transition-colors duration-300",
                                index === 0 ? "text-gray-600 dark:text-gray-300" :
                                    index === 1 ? "text-gray-300" : "text-indigo-100"
                            )}>
                                {t(`items.${index}.description`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
