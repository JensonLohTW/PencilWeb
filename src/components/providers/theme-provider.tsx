'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

// Types
export type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
    theme: Theme
    resolvedTheme: ResolvedTheme
    setTheme: (theme: Theme) => void
}

// Storage key
const STORAGE_KEY = 'theme-preference'

// Context with default value to prevent undefined errors
const ThemeContext = createContext<ThemeContextValue>({
    theme: 'light',
    resolvedTheme: 'light',
    setTheme: () => { },
})

// Helper to get system preference
function getSystemTheme(): ResolvedTheme {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Helper to resolve theme
function resolveTheme(theme: Theme): ResolvedTheme {
    if (theme === 'system') return getSystemTheme()
    return theme
}

// Get initial theme (lazy init) - safe for SSR
function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'light'
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
            return stored
        }
    } catch {
        // localStorage might not be available
    }
    return 'light'
}

// Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>('light')
    const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')
    const [mounted, setMounted] = useState(false)

    // Initialize from localStorage after mount
    useEffect(() => {
        const stored = getInitialTheme()
        setThemeState(stored)
        setResolvedTheme(resolveTheme(stored))
        setMounted(true)
    }, [])

    // Apply theme class to document
    useEffect(() => {
        if (!mounted) return
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(resolvedTheme)
    }, [resolvedTheme, mounted])

    // Listen for system theme changes
    useEffect(() => {
        if (!mounted) return
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            if (theme === 'system') {
                setResolvedTheme(getSystemTheme())
            }
        }
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme, mounted])

    // Set theme function
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme)
        setResolvedTheme(resolveTheme(newTheme))
        try {
            localStorage.setItem(STORAGE_KEY, newTheme)
        } catch {
            // localStorage might not be available
        }
    }

    // Always provide context - children must always have access
    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Hook
export function useTheme() {
    return useContext(ThemeContext)
}
