'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useRef, useState, type ComponentProps } from 'react'
import { useTheme, type Theme } from '@/shared/providers/theme-provider'

// Icons
function SunIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364-6.364l-1.06 1.06m-10.608 10.608l-1.06 1.06m12.728 0l-1.06-1.06M6.696 6.696l-1.06-1.06M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    )
}

function MoonIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
        </svg>
    )
}

function MonitorIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
            />
        </svg>
    )
}

// Theme options
const themeOptions: { value: Theme; labelZh: string; labelEn: string; icon: typeof SunIcon }[] = [
    { value: 'light', labelZh: '明亮模式', labelEn: 'Light', icon: SunIcon },
    { value: 'dark', labelZh: '暗色模式', labelEn: 'Dark', icon: MoonIcon },
    { value: 'system', labelZh: '跟隨系統', labelEn: 'System', icon: MonitorIcon },
]

export function ThemeToggle({ className, ...props }: ComponentProps<'div'>) {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])
    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    const CurrentIcon = mounted && resolvedTheme === 'dark' ? MoonIcon : SunIcon

    return (
        <div ref={menuRef} className={clsx('relative', className)} {...props}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="切換主題"
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={clsx(
                    'inline-flex items-center justify-center rounded-full p-2 transition-colors',
                    'text-pencil-500 hover:text-pencil-950 hover:bg-pencil-100',
                    'dark:text-pencil-400 dark:hover:text-white dark:hover:bg-white/10'
                )}
            >
                <CurrentIcon className="size-5" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    role="menu"
                    aria-orientation="vertical"
                    className={clsx(
                        'absolute right-0 top-full mt-2 w-40 p-1 z-50',
                        'rounded-lg border shadow-lg',
                        'bg-white border-pencil-200',
                        'dark:bg-pencil-900 dark:border-pencil-700',
                        'animate-in fade-in slide-in-from-top-1 zoom-in-95 duration-200'
                    )}
                >
                    {themeOptions.map((option) => {
                        const Icon = option.icon
                        const isActive = theme === option.value
                        return (
                            <button
                                key={option.value}
                                type="button"
                                role="menuitem"
                                onClick={() => {
                                    setTheme(option.value)
                                    setIsOpen(false)
                                }}
                                className={clsx(
                                    'flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors rounded-md',
                                    isActive
                                        ? 'bg-pencil-100 text-pencil-950 dark:bg-white/10 dark:text-white'
                                        : 'text-pencil-600 hover:bg-pencil-50 dark:text-pencil-400 dark:hover:bg-white/5'
                                )}
                            >
                                <Icon className="size-4" />
                                <span>{option.labelZh}</span>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
