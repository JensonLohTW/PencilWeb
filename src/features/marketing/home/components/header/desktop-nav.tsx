import { Link, usePathname } from '@/i18n/routing'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { isPathActive } from './nav-utils'
import { clsx } from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { headerNavigation } from './header-data'

const DROPDOWN_CLOSE_DELAY_MS = 140

interface DesktopNavProps {
  compact?: boolean
}

export function DesktopNav({ compact = false }: DesktopNavProps) {
  const t = useTranslations()
  const pathname = usePathname()
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
              aria-current={isPathActive(pathname, item.href) ? 'page' : undefined}
              className={clsx(
                'flex items-center gap-x-1 rounded-full px-4 py-2 text-lg font-semibold tracking-wide whitespace-nowrap transition-all duration-300',
                isPathActive(pathname, item.href)
                  ? 'bg-pencil-900/5 text-pencil-950 dark:bg-white/10 dark:text-white'
                  : 'text-pencil-950/60 hover:bg-pencil-900/5 hover:text-pencil-950 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white',
              )}
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
                  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-xl overflow-hidden rounded-3xl bg-white/98 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 backdrop-blur-2xl dark:bg-gray-900/98 dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] dark:ring-white/10"
                  onMouseEnter={() => handleOpen(item.nameKey)}
                  onMouseLeave={() => handleCloseWithDelay(item.nameKey)}
                >
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {item.children?.map((child) => (
                      <div
                        key={child.nameKey}
                        className="group relative flex items-start gap-x-4 rounded-2xl p-4 text-[15px]/6 transition-all duration-200 hover:bg-gray-50/80 dark:hover:bg-white/5 dark:hover:ring-1 dark:hover:ring-white/10"
                      >
                        <div className="flex size-12 flex-none items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-900/5 transition-colors duration-200 ring-inset group-hover:bg-white dark:bg-white/5 dark:ring-white/10 dark:group-hover:bg-white/10">
                          {child.icon && (
                            <child.icon
                              aria-hidden="true"
                              className="size-5 text-gray-500 transition-colors duration-200 group-hover:text-pencil-900 dark:text-gray-400 dark:group-hover:text-white"
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
                            <p className="mt-1 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                              {t(child.descriptionKey)}
                            </p>
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
            aria-current={isPathActive(pathname, item.href) ? 'page' : undefined}
            className={clsx(
              'rounded-full px-4 py-2 text-lg font-semibold tracking-wide whitespace-nowrap transition-all duration-300',
              isPathActive(pathname, item.href)
                ? 'bg-pencil-900/5 text-pencil-950 dark:bg-white/10 dark:text-white'
                : 'text-pencil-950/60 hover:bg-pencil-900/5 hover:text-pencil-950 dark:text-white/60 dark:hover:bg-white/5 dark:hover:text-white',
            )}
          >
            {t(item.nameKey)}
          </Link>
        ),
      )}
    </div>
  )
}
