'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface Position {
  x: number
  y: number
}

interface UseDraggableOptions {
  storageKey: string
  defaultPosition: Position
  /** Size of the draggable element for boundary clamping */
  elementSize?: { width: number; height: number }
}

function readPosition(key: string, fallback: Position): Position {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const parsed = JSON.parse(raw) as Position
    if (typeof parsed.x === 'number' && typeof parsed.y === 'number') return parsed
  } catch {
    /* ignored */
  }
  return fallback
}

function clampToViewport(pos: Position, elSize: { width: number; height: number }): Position {
  const maxX = window.innerWidth - elSize.width
  const maxY = window.innerHeight - elSize.height
  return {
    x: Math.max(0, Math.min(pos.x, maxX)),
    y: Math.max(0, Math.min(pos.y, maxY)),
  }
}

export function useDraggable({ storageKey, defaultPosition, elementSize = { width: 56, height: 56 } }: UseDraggableOptions) {
  const [position, setPosition] = useState<Position>(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef<Position | null>(null)
  const wasDraggedRef = useRef(false)

  // Hydrate from localStorage
  useEffect(() => {
    const stored = readPosition(storageKey, defaultPosition)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPosition(clampToViewport(stored, elementSize))
  }, [storageKey, defaultPosition, elementSize])

  // Re-clamp on window resize
  useEffect(() => {
    const handleResize = () => setPosition((prev) => clampToViewport(prev, elementSize))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [elementSize])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y }
    wasDraggedRef.current = false
    setIsDragging(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }, [position])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragStartRef.current) return
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y
      if (Math.abs(dx - position.x) > 3 || Math.abs(dy - position.y) > 3) {
        wasDraggedRef.current = true
      }
      const next = clampToViewport({ x: dx, y: dy }, elementSize)
      setPosition(next)
    },
    [position, elementSize],
  )

  const handlePointerUp = useCallback(() => {
    dragStartRef.current = null
    setIsDragging(false)
    try {
      localStorage.setItem(storageKey, JSON.stringify(position))
    } catch {
      /* ignored */
    }
  }, [storageKey, position])

  return {
    position,
    isDragging,
    wasDraggedRef: wasDraggedRef,
    handlers: { onPointerDown: handlePointerDown, onPointerMove: handlePointerMove, onPointerUp: handlePointerUp },
  }
}
