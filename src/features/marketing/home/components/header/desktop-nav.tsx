import { Link } from '@/i18n/routing'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { headerNavigation } from './header-data'

export function DesktopNav() {
    const t = useTranslations()
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <div className="hidden lg:flex lg:gap-x-12">
            {headerNavigation.map((item) =>
                item.type === 'dropdown' ? (
                    <div
                        key={item.nameKey}
                        className="relative"
                        onMouseEnter={() => setOpenItem(item.nameKey)}
                        onMouseLeave={() =>
                            setOpenItem((current) => (current === item.nameKey ? null : current))
                        }
                    >
                        <Link
                            href={item.href || '#'}
                            className="flex items-center gap-x-1 text-sm/6 font-medium text-pencil-950 hover:text-pencil-600 dark:text-white dark:hover:text-gray-300 transition-colors"
                        >
                            {t(item.nameKey)}
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-500" />
                        </Link>

                        {openItem === item.nameKey && (
                            <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
                                <div className="p-4">
                                    {item.children?.map((child) => (
                                        <div
                                            key={child.nameKey}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
                                        >
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                                {child.icon && (
                                                    <child.icon
                                                        aria-hidden="true"
                                                        className="size-6 text-gray-600 group-hover:text-pencil-900 dark:text-gray-400 dark:group-hover:text-white"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex-auto">
                                                <Link
                                                    href={child.href || '#'}
                                                    className="block font-semibold text-pencil-950 dark:text-white"
                                                >
                                                    {t(child.nameKey)}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                {child.descriptionKey && (
                                                    <p className="mt-1 text-gray-500 dark:text-gray-400">{t(child.descriptionKey)}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        key={item.nameKey}
                        href={item.href || '#'}
                        className="text-sm/6 font-medium text-pencil-950 hover:text-pencil-600 dark:text-white dark:hover:text-gray-300 transition-colors"
                    >
                        {t(item.nameKey)}
                    </Link>
                )
            )}
        </div>
    )
}
