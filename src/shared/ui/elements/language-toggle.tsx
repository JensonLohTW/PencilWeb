'use client'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { useLanguage } from '@/shared/providers/language-provider'
import type { Language } from '@/shared/i18n/types'

// Language display
const languageLabels: Record<Language, { short: string; full: string }> = {
    'zh-TW': { short: '中', full: '中文' },
    en: { short: 'EN', full: 'English' },
    ja: { short: 'JP', full: '日本語' },
}

export function LanguageToggle({ className, ...props }: ComponentProps<'button'>) {
    const { language, setLanguage } = useLanguage()

    // Toggle language
    const handleToggle = () => {
        const nextLang = language === 'zh-TW' ? 'en' : language === 'en' ? 'ja' : 'zh-TW'
        setLanguage(nextLang)
    }

    const current = languageLabels[language]

    return (
        <button
            type="button"
            onClick={handleToggle}
            aria-label={`切換語言`}
            className={clsx(
                'swiss-mono inline-flex items-center justify-center px-2 py-1.5 rounded transition-colors',
                'text-pencil-500 hover:text-pencil-950 hover:bg-pencil-100',
                'dark:text-pencil-400 dark:hover:text-white dark:hover:bg-white/10',
                className
            )}
            {...props}
        >
            <span className="text-xs font-medium">{current.short}</span>
        </button>
    )
}
