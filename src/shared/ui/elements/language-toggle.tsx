'use client'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { useLanguage } from '@/shared/providers/language-provider'
import type { Language } from '@/shared/i18n/types'

// Language display
const languageLabels: Record<Language, { short: string; full: string }> = {
    'zh-TW': { short: '中', full: '中文' },
    en: { short: 'EN', full: 'English' },
    'zh-CN': { short: '简', full: '简体中文' },
    ja: { short: 'JP', full: '日本語' },
    ko: { short: 'KR', full: '한국어' },
    fr: { short: 'FR', full: 'Francais' },
    th: { short: 'TH', full: 'ไทย' },
}

export function LanguageToggle({ className, ...props }: ComponentProps<'button'>) {
    const { language, setLanguage } = useLanguage()

    // Toggle language
    const handleToggle = () => {
    const order: Language[] = ['zh-TW', 'en', 'zh-CN', 'ja', 'ko', 'fr', 'th']
        const idx = order.indexOf(language)
        const nextLang = order[(idx + 1) % order.length]
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
