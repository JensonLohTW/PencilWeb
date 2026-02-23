'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useRef, useState, type ComponentProps } from 'react'
import type { MotionPreference } from '@/shared/config/motion'
import { useMotionSettings } from '@/shared/hooks/use-motion-settings'
import { useTranslations } from 'next-intl'

const labels: Record<MotionPreference, string> = {
  system: 'S',
  on: 'ON',
  off: 'OFF',
}

const preferences: MotionPreference[] = ['system', 'on', 'off']

export function MotionToggle({ className, ...props }: ComponentProps<'div'>) {
  const t = useTranslations('motion')
  const { preference, setPreference } = useMotionSettings()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} className={clsx('relative', className)} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t('label')}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className={clsx(
          'swiss-mono inline-flex min-w-12 items-center justify-center rounded-full px-2 py-1.5 text-xs transition-colors',
          'text-pencil-500 hover:bg-pencil-100 hover:text-pencil-950',
          'dark:text-pencil-400 dark:hover:bg-white/10 dark:hover:text-white',
        )}
      >
        {labels[preference]}
      </button>

      {isOpen ? (
        <div
          role="menu"
          className={clsx(
            'absolute right-0 top-full z-50 mt-2 w-36 rounded-lg border p-1 shadow-lg',
            'border-pencil-200 bg-white',
            'dark:border-pencil-700 dark:bg-pencil-900',
          )}
        >
          {preferences.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitem"
              onClick={() => {
                setPreference(option)
                setIsOpen(false)
              }}
              className={clsx(
                'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
                option === preference
                  ? 'bg-pencil-100 text-pencil-950 dark:bg-white/10 dark:text-white'
                  : 'text-pencil-600 hover:bg-pencil-50 dark:text-pencil-300 dark:hover:bg-white/5',
              )}
            >
              <span>{t(option)}</span>
              <span className="swiss-mono text-[10px]">{labels[option]}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
