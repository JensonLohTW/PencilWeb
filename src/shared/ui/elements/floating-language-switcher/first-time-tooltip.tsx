'use client'

import { clsx } from 'clsx/lite'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { STORAGE_KEYS } from '@/shared/config/storage'
import { useMotionContext } from '@/shared/providers/motion-provider'

function readDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.floatingLangTooltipDismissed) === 'true'
  } catch {
    return false
  }
}

function persistDismiss() {
  try {
    localStorage.setItem(STORAGE_KEYS.floatingLangTooltipDismissed, 'true')
  } catch {
    /* ignored */
  }
}

interface FirstTimeTooltipProps {
  onDismiss: () => void
}

export function FirstTimeTooltip({ onDismiss }: FirstTimeTooltipProps) {
  const { settings } = useMotionContext()
  const [dismissed, setDismissed] = useState(true) // SSR-safe default: dismissed
  const [visible, setVisible] = useState(false)

  // Hydrate dismissed state from localStorage after mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDismissed(readDismissed())
  }, [])

  // Show tooltip after delay if not dismissed
  useEffect(() => {
    if (dismissed) return
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [dismissed])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    persistDismiss()
    onDismiss()
  }

  return (
    <>
      {/* Pulsing ring behind button */}
      {!dismissed && settings.enabled && (
        <span
          aria-hidden="true"
          className={clsx(
            'absolute inset-0 rounded-full',
            'animate-ping bg-accent-400/20 dark:bg-accent-500/15',
          )}
          style={{ animationDuration: '2s', animationIterationCount: 6 }}
        />
      )}

      {/* Tooltip bubble */}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            initial={settings.enabled ? { opacity: 0, x: 12, scale: 0.9 } : undefined}
            animate={settings.enabled ? { opacity: 1, x: 0, scale: 1 } : undefined}
            exit={settings.enabled ? { opacity: 0, x: 12, scale: 0.9 } : undefined}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 22 }}
            onClick={handleDismiss}
            className={clsx(
              'absolute right-full top-1/2 mr-3 -translate-y-1/2 cursor-pointer',
              'whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium',
              'bg-pencil-900 text-white shadow-lg',
              'dark:bg-white dark:text-pencil-900',
            )}
          >
            Click to switch language
            <span
              aria-hidden="true"
              className={clsx(
                'absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 rotate-45',
                'size-2 bg-pencil-900 dark:bg-white',
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
