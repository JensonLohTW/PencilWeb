'use client'

import { clsx } from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useMotionContext } from '@/shared/providers/motion-provider'
import type { Language } from '@/shared/i18n/types'

interface LanguageOption {
  code: Language
  label: string
  nativeLabel: string
}

const languages: LanguageOption[] = [
  { code: 'zh-TW', label: '繁體中文', nativeLabel: '中文' },
  { code: 'en', label: 'English', nativeLabel: 'EN' },
  { code: 'ja', label: '日本語', nativeLabel: 'JP' },
]

const panelVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.9, y: 8, transition: { duration: 0.15 } },
}

interface LanguagePanelProps {
  isOpen: boolean
  currentLanguage: Language
  onSelect: (lang: Language) => void
  onClose: () => void
  className?: string
}

export function LanguagePanel({ isOpen, currentLanguage, onSelect, onClose, className }: LanguagePanelProps) {
  const { settings } = useMotionContext()
  const panelRef = useRef<HTMLDivElement>(null)

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen, onClose])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          role="menu"
          aria-orientation="vertical"
          variants={settings.enabled ? panelVariants : undefined}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={clsx(
            'absolute bottom-full right-0 mb-3 w-44 p-1.5',
            'rounded-xl border shadow-xl',
            'bg-white/80 backdrop-blur-xl border-pencil-200/60',
            'dark:bg-pencil-900/80 dark:border-white/10 dark:shadow-black/30',
            className,
          )}
        >
          {languages.map((lang) => {
            const isActive = currentLanguage === lang.code
            return (
              <button
                key={lang.code}
                type="button"
                role="menuitem"
                onClick={() => onSelect(lang.code)}
                className={clsx(
                  'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors',
                  isActive
                    ? 'bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-400'
                    : 'text-pencil-600 hover:bg-pencil-50 dark:text-pencil-400 dark:hover:bg-white/5',
                )}
              >
                <span className="font-mono text-xs font-semibold tracking-wider opacity-60">{lang.nativeLabel}</span>
                <span className="font-medium">{lang.label}</span>
                {isActive && (
                  <span className="ml-auto size-1.5 rounded-full bg-accent-500" aria-hidden="true" />
                )}
              </button>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
