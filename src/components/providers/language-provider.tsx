'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import zhTw from '../../locales/zh-TW.json'
import en from '../../locales/en.json'
import ja from '../../locales/ja.json'

// Types
export type Language = 'zh-TW' | 'en' | 'ja'

interface LanguageContextValue {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => any
}

// Storage key
const STORAGE_KEY = 'language-preference'

// Translations
const translations: Record<Language, any> = {
    'zh-TW': zhTw,
    en: en,
    ja: ja,
}

// Context with defaults
const LanguageContext = createContext<LanguageContextValue>({
    language: 'zh-TW',
    setLanguage: () => { },
    t: (key: string) => key, // Default t function for context, will be overridden by provider
})

// Get initial language - safe for SSR
function getInitialLanguage(): Language {
    if (typeof window === 'undefined') return 'zh-TW'
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'zh-TW' || stored === 'en' || stored === 'ja') {
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
    const t = (key: string): any => {
        const keys = key.split('.')
        let value: any = translations[language]

        for (const k of keys) {
            value = value?.[k]
        }

        return value !== undefined ? value : key
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
