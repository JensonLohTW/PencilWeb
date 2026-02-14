'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import styles from './trail-grid.module.css'

interface TrailGridProps {
  className?: string
  color?: string
}

const CELL_SIZE = 42
const MIN_COLS = 8
const MIN_ROWS = 6

function seeded(value: number) {
  const next = Math.sin(value * 12.9898) * 43758.5453
  return next - Math.floor(next)
}

export function TrailGrid({ className, color = 'currentColor' }: TrailGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hoverCellRef = useRef<HTMLElement | null>(null)
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 })

  useEffect(() => {
    const grid = containerRef.current
    if (!grid) return

    let frameId = 0
    const observer = new ResizeObserver(() => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(() => {
        const { width, height } = grid.getBoundingClientRect()
        const next = {
          cols: Math.max(MIN_COLS, Math.floor(width / CELL_SIZE)),
          rows: Math.max(MIN_ROWS, Math.floor(height / CELL_SIZE)),
        }

        setDimensions((prev) => (
          prev.cols === next.cols && prev.rows === next.rows ? prev : next
        ))
      })
    })

    observer.observe(grid)
    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const grid = containerRef.current
    const cols = dimensions.cols
    const rows = dimensions.rows
    if (!grid || cols === 0 || rows === 0) return

    const clearTrail = () => {
      hoverCellRef.current?.removeAttribute('data-hover')
      hoverCellRef.current = null
    }

    let frameId = 0
    let nextX = 0
    let nextY = 0

    const applyTrail = () => {
      frameId = 0
      const rect = grid.getBoundingClientRect()
      const withinX = nextX >= rect.left && nextX <= rect.right
      const withinY = nextY >= rect.top && nextY <= rect.bottom

      if (!withinX || !withinY) {
        clearTrail()
        return
      }

      const xRatio = rect.width > 0 ? (nextX - rect.left) / rect.width : 0
      const yRatio = rect.height > 0 ? (nextY - rect.top) / rect.height : 0
      const col = Math.min(cols - 1, Math.max(0, Math.floor(xRatio * cols)))
      const row = Math.min(rows - 1, Math.max(0, Math.floor(yRatio * rows)))
      const index = row * cols + col
      const cell = grid.children.item(index)

      if (!(cell instanceof HTMLElement)) {
        clearTrail()
        return
      }

      if (cell === hoverCellRef.current) {
        return
      }

      clearTrail()
      cell.setAttribute('data-hover', 'true')
      hoverCellRef.current = cell
    }

    const queueTrail = (event: PointerEvent) => {
      nextX = event.clientX
      nextY = event.clientY
      if (frameId !== 0) {
        return
      }
      frameId = window.requestAnimationFrame(applyTrail)
    }

    const cancelTrail = () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
        frameId = 0
      }
      clearTrail()
    }

    window.addEventListener('pointermove', queueTrail, { passive: true })
    window.addEventListener('pointerleave', cancelTrail)
    window.addEventListener('blur', cancelTrail)

    return () => {
      window.removeEventListener('pointermove', queueTrail)
      window.removeEventListener('pointerleave', cancelTrail)
      window.removeEventListener('blur', cancelTrail)
      cancelTrail()
    }
  }, [dimensions.cols, dimensions.rows])

  const cells = useMemo(() => {
    const total = dimensions.cols * dimensions.rows
    if (total === 0) return []

    return Array.from({ length: total }).map((_, index) => {
      const seed = index + total
      return {
        id: index,
        opacity: Math.max(0.08, seeded(seed) * 0.28),
        grade: Math.floor(seeded(seed + 19) * 12 - 6),
        hue: 16 + Math.floor(seeded(seed + 31) * 20),
      }
    })
  }, [dimensions.cols, dimensions.rows])

  return (
    <div
      ref={containerRef}
      className={clsx(styles.grid, className)}
      style={
        {
          '--cols': dimensions.cols,
          '--rows': dimensions.rows,
          color,
          opacity: dimensions.cols > 0 && dimensions.rows > 0 ? 1 : 0,
          transition: 'opacity 300ms ease',
        } as CSSProperties
      }
    >
      {cells.map((cell) => (
        <div
          key={cell.id}
          aria-hidden="true"
          className={styles.cell}
          style={
            {
              '--opacity': cell.opacity,
              '--grade': cell.grade,
              '--hue': cell.hue,
            } as CSSProperties
          }
        >
          +
        </div>
      ))}
    </div>
  )
}
