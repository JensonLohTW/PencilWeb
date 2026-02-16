import { useTranslations } from 'next-intl'

export function JobOpenings() {
    const t = useTranslations('pages.about.jobs')
    const jobs = [0, 1, 2]

    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-32">
            <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
                <div className="w-full lg:max-w-lg lg:flex-auto">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white transition-colors duration-300">
                        {t('headline')}
                    </h2>
                    <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {t('description')}
                    </p>
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                        className="mt-16 aspect-[6/5] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-gray-200 lg:aspect-auto lg:h-[34.5rem] shadow-2xl shadow-indigo-500/10 dark:outline-white/10 transition-colors duration-300"
                    />
                </div>
                <div className="w-full lg:max-w-xl lg:flex-auto">
                    <h3 className="sr-only">Job openings</h3>
                    <ul className="-my-8 divide-y divide-gray-200 dark:divide-gray-800 transition-colors duration-300">
                        {jobs.map((index) => (
                            <li key={index} className="py-8">
                                <dl className="relative flex flex-wrap gap-x-3">
                                    <dt className="sr-only">Role</dt>
                                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
                                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            {t(`items.${index}.role`)}
                                            <span aria-hidden="true" className="absolute inset-0" />
                                        </a>
                                    </dd>
                                    <dt className="sr-only">Description</dt>
                                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600 dark:text-gray-400 transition-colors duration-300">{t(`items.${index}.description`)}</dd>
                                    <dt className="sr-only">Salary</dt>
                                    <dd className="mt-4 text-base/7 font-semibold text-gray-900 dark:text-white transition-colors duration-300">{t(`items.${index}.salary`)}</dd>
                                    <dt className="sr-only">Location</dt>
                                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                                        <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-current">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        {t(`items.${index}.location`)}
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex border-t border-gray-200 pt-8 dark:border-gray-800 transition-colors duration-300">
                        <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                            {t('viewAll')} <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
