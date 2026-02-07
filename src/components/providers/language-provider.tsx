'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// Types
export type Language = 'zh-TW' | 'en'

interface LanguageContextValue {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

// Storage key
const STORAGE_KEY = 'language-preference'

// Translations
const translations: Record<Language, Record<string, string>> = {
    'zh-TW': {
        'nav.solutions': '解決方案',
        'nav.projects': '專案與能力',
        'nav.technology': '技術核心',
        'nav.about': '關於我們',
        'nav.contact': '聯絡我們',
        'nav.demo': '預約 Demo',
        'theme.light': '明亮模式',
        'theme.dark': '暗色模式',
        'theme.system': '跟隨系統',
        'language.label': '語言',
    },
    en: {
        'nav.solutions': 'Solutions',
        'nav.projects': 'Projects',
        'nav.technology': 'Technology',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.demo': 'Book Demo',
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.system': 'System',
        'language.label': 'Language',
    },
}

// Default translation function
const defaultT = (key: string): string => translations['zh-TW'][key] ?? key

// Context with defaults
const LanguageContext = createContext<LanguageContextValue>({
    language: 'zh-TW',
    setLanguage: () => { },
    t: defaultT,
})

// Get initial language - safe for SSR
function getInitialLanguage(): Language {
    if (typeof window === 'undefined') return 'zh-TW'
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'zh-TW' || stored === 'en') {
            return stored
        }
    } catch {
        // localStorage might not be available
    }
    return 'zh-TW'
}

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('zh-TW')
    const [mounted, setMounted] = useState(false)

    // Initialize from localStorage after mount
    useEffect(() => {
        const stored = getInitialLanguage()
        setLanguageState(stored)
        setMounted(true)
    }, [])

    // Update html lang attribute
    useEffect(() => {
        if (!mounted) return
        document.documentElement.lang = language
    }, [language, mounted])

    // Set language function
    const setLanguage = (newLang: Language) => {
        setLanguageState(newLang)
        try {
            localStorage.setItem(STORAGE_KEY, newLang)
        } catch {
            // localStorage might not be available
        }
    }

    // Translation function
    const t = (key: string): string => {
        return translations[language][key] ?? key
    }

    // Always provide context
    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Hook
export function useLanguage() {
    return useContext(LanguageContext)
}
