import { Link } from '@/i18n/routing'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx/lite'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { headerNavigation } from './header-data'
import { AnimatePresence, motion } from 'framer-motion'

const DROPDOWN_CLOSE_DELAY_MS = 140

interface DesktopNavProps {
    compact?: boolean
}

export function DesktopNav({ compact = false }: DesktopNavProps) {
    const t = useTranslations()
    const [openItem, setOpenItem] = useState<string | null>(null)
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const clearCloseTimer = () => {
        if (!closeTimerRef.current) return
        clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
    }

    const handleOpen = (nameKey: string) => {
        clearCloseTimer()
        setOpenItem(nameKey)
    }

    const handleCloseWithDelay = (nameKey: string) => {
        clearCloseTimer()
        closeTimerRef.current = setTimeout(() => {
            setOpenItem((current) => (current === nameKey ? null : current))
            closeTimerRef.current = null
        }, DROPDOWN_CLOSE_DELAY_MS)
    }

    useEffect(() => {
        return () => clearCloseTimer()
    }, [])

    return (
        <div className={clsx('hidden items-center whitespace-nowrap lg:flex', compact ? 'lg:gap-x-7' : 'lg:gap-x-10')}>
            {headerNavigation.map((item) =>
                item.type === 'dropdown' ? (
                    <div
                        key={item.nameKey}
                        className="relative"
                        onMouseEnter={() => handleOpen(item.nameKey)}
                        onMouseLeave={() => handleCloseWithDelay(item.nameKey)}
                    >
                        <Link
                            href={item.href || '#'}
                            className="flex items-center gap-x-1 whitespace-nowrap text-lg tracking-wide font-semibold text-pencil-950/40 transition-all duration-300 hover:text-pencil-950 dark:text-white/40 dark:hover:text-white"
                        >
                            {t(item.nameKey)}
                            <ChevronDownIcon aria-hidden="true" className="size-3 flex-none opacity-50" />
                        </Link>

                        <AnimatePresence>
                            {openItem === item.nameKey && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white/98 backdrop-blur-2xl dark:bg-gray-900/98 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] ring-1 ring-gray-900/5 dark:ring-white/10"
                                    onMouseEnter={() => handleOpen(item.nameKey)}
                                    onMouseLeave={() => handleCloseWithDelay(item.nameKey)}
                                >
                                    <div className="p-4 grid grid-cols-2 gap-2">
                                        {item.children?.map((child) => (
                                            <div
                                                key={child.nameKey}
                                                className="group relative flex items-start gap-x-4 rounded-2xl p-4 text-[15px]/6 transition-all duration-200 hover:bg-gray-50/80 dark:hover:bg-white/5 dark:hover:ring-1 dark:hover:ring-white/10"
                                            >
                                                <div className="flex size-12 flex-none items-center justify-center rounded-xl bg-gray-50 group-hover:bg-white ring-1 ring-inset ring-gray-900/5 dark:bg-white/5 dark:group-hover:bg-white/10 dark:ring-white/10 transition-colors duration-200">
                                                    {child.icon && (
                                                        <child.icon
                                                            aria-hidden="true"
                                                            className="size-5 text-gray-500 group-hover:text-pencil-900 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-200"
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
                                                        <p className="mt-1 text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{t(child.descriptionKey)}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <Link
                        key={item.nameKey}
                        href={item.href || '#'}
                        className="whitespace-nowrap text-lg tracking-wide font-semibold text-pencil-950/40 transition-all duration-300 hover:text-pencil-950 dark:text-white/40 dark:hover:text-white"
                    >
                        {t(item.nameKey)}
                    </Link>
                )
            )}
        </div>
    )
}
