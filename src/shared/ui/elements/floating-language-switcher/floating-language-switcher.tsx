'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { STORAGE_KEYS } from '@/shared/config/storage'
import { useDraggable } from '@/shared/hooks/use-draggable'
import { useLanguage } from '@/shared/providers/language-provider'
import type { Language } from '@/shared/i18n/types'
import { FirstTimeTooltip } from './first-time-tooltip'
import { LanguagePanel } from './language-panel'
import { LanguageSwitcherButton } from './language-switcher-button'

const DEFAULT_POSITION = { x: -1, y: -1 }
const ELEMENT_SIZE = { width: 56, height: 56 }

export function FloatingLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipActive, setTooltipActive] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const defaultPos = useMemo(() => {
    if (!mounted) return DEFAULT_POSITION
    return { x: window.innerWidth - 80, y: window.innerHeight - 120 }
  }, [mounted])

  const { position, isDragging, wasDraggedRef, handlers } = useDraggable({
    storageKey: STORAGE_KEYS.floatingLangPosition,
    defaultPosition: defaultPos,
    elementSize: ELEMENT_SIZE,
  })

  const handleToggle = useCallback(() => {
    if (wasDraggedRef.current) {
      wasDraggedRef.current = false
      return
    }
    setIsOpen((prev) => !prev)
    setTooltipActive(false)
  }, [wasDraggedRef])

  const handleSelect = useCallback(
    (lang: Language) => {
      setLanguage(lang)
      setIsOpen(false)
    },
    [setLanguage],
  )

  const handleClose = useCallback(() => setIsOpen(false), [])

  // Avoid SSR/hydration mismatch: render nothing until mounted on client
  if (!mounted) return null

  return (
    <div
      style={{ position: 'fixed', left: position.x, top: position.y, zIndex: 9999 }}
      className="touch-none select-none"
      {...handlers}
    >
      <div className="relative">
        <LanguagePanel isOpen={isOpen} currentLanguage={language} onSelect={handleSelect} onClose={handleClose} />
        <LanguageSwitcherButton
          language={language}
          isOpen={isOpen}
          onToggle={handleToggle}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        />
        {tooltipActive && <FirstTimeTooltip onDismiss={() => setTooltipActive(false)} />}
      </div>
    </div>
  )
}
