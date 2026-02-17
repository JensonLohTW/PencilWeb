'use client'

import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { PARTICLE_COUNT } from '@/shared/config/motion'
import { useMotionSettings } from '@/shared/hooks/use-motion-settings'
import { cn } from '@/shared/lib/cn'

interface ParticleFieldProps {
  className?: string
  colorClassName?: string
}

interface ParticleSpec {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
  drift: number
}

function seeded(index: number) {
  const next = Math.sin(index * 12.9898) * 43758.5453
  return next - Math.floor(next)
}

function resolveParticleCount(viewportWidth: number) {
  if (viewportWidth < 768) {
    return PARTICLE_COUNT.mobile
  }
  if (viewportWidth < 1024) {
    return PARTICLE_COUNT.tablet
  }
  return PARTICLE_COUNT.desktop
}

export function ParticleField({
  className,
  colorClassName = 'bg-accent-400/50',
}: ParticleFieldProps) {
  const { particles } = useMotionSettings()
  const [viewportWidth, setViewportWidth] = useState(1280)

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth)

    updateWidth()
    window.addEventListener('resize', updateWidth, { passive: true })
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const specs = useMemo<ParticleSpec[]>(() => {
    const count = resolveParticleCount(viewportWidth)

    return Array.from({ length: count }, (_, index) => {
      const seed = index + count
      return {
        id: index,
        left: seeded(seed + 3) * 100,
        top: seeded(seed + 9) * 100,
        size: 3 + seeded(seed + 17) * 5,
        duration: 6 + seeded(seed + 27) * 8,
        delay: seeded(seed + 39) * 2.8,
        drift: -14 + seeded(seed + 51) * 28,
      }
    })
  }, [viewportWidth])

  if (!particles) {
    return null
  }

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {specs.map((spec) => (
        <motion.span
          key={spec.id}
          className={cn('absolute rounded-full blur-[0.6px]', colorClassName)}
          style={{
            left: `${spec.left}%`,
            top: `${spec.top}%`,
            width: spec.size,
            height: spec.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, spec.drift, 0],
            opacity: [0.25, 0.75, 0.25],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: spec.duration,
            delay: spec.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
