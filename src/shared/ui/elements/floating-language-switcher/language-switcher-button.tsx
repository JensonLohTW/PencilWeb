'use client'

import { clsx } from 'clsx/lite'
import { motion } from 'framer-motion'
import { useMotionContext } from '@/shared/providers/motion-provider'
import type { Language } from '@/shared/i18n/types'

const languageLabels: Record<Language, string> = {
  'zh-TW': '中',
  en: 'EN',
  'zh-CN': '简',
  ja: 'JP',
  ko: 'KR',
  fr: 'FR',
  th: 'TH',
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.257.26-2.453.727-3.418"
      />
    </svg>
  )
}

interface LanguageSwitcherButtonProps {
  language: Language
  isOpen: boolean
  onToggle: () => void
  className?: string
  style?: React.CSSProperties
}

export function LanguageSwitcherButton({ language, isOpen, onToggle, className, style }: LanguageSwitcherButtonProps) {
  const { settings } = useMotionContext()

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label="Switch language"
      aria-expanded={isOpen}
      aria-haspopup="true"
      whileHover={settings.enabled ? { scale: 1.08 } : undefined}
      whileTap={settings.enabled ? { scale: 0.95 } : undefined}
      style={style}
      className={clsx(
        'relative flex items-center justify-center gap-1.5',
        'size-12 sm:size-14 rounded-full cursor-pointer',
        'bg-white/70 backdrop-blur-xl border border-pencil-200/60',
        'shadow-lg shadow-pencil-900/5',
        'dark:bg-pencil-900/70 dark:border-white/10 dark:shadow-black/20',
        'transition-colors hover:border-accent-400/50 dark:hover:border-accent-400/30',
        'select-none touch-none',
        className,
      )}
    >
      <GlobeIcon className="size-4 text-pencil-500 dark:text-pencil-400 sm:size-5" />
      <span className="text-[10px] font-semibold text-pencil-700 dark:text-pencil-300 sm:text-xs">
        {languageLabels[language]}
      </span>
    </motion.button>
  )
}
