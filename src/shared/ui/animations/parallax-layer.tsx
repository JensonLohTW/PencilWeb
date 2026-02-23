'use client'

import { motion } from 'framer-motion'
import {
  useRef,
  type CSSProperties,
  type HTMLAttributes,
} from 'react'
import { useParallax } from '@/shared/hooks/use-parallax'
import { useMotionSettings } from '@/shared/hooks/use-motion-settings'
import { cn } from '@/shared/lib/cn'

interface ParallaxLayerProps extends HTMLAttributes<HTMLDivElement> {
  y?: [string | number, string | number]
  style?: CSSProperties
}

export function ParallaxLayer({
  children,
  className,
  y = ['-8%', '8%'],
  style,
  ...attributes
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { reduced } = useMotionSettings()
  const motionY = useParallax(ref, { y })

  if (reduced) {
    return (
      <div ref={ref} className={cn(className)} style={style} {...attributes}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ ...style, y: motionY }}
      aria-hidden={attributes['aria-hidden']}
    >
      {children}
    </motion.div>
  )
}
