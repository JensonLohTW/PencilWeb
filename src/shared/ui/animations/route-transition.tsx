'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePathname } from '@/i18n/routing'
import { MOTION_TRANSITION_DURATION_MS } from '@/shared/config/motion'
import { useMotionSettings } from '@/shared/hooks/use-motion-settings'
import { cn } from '@/shared/lib/cn'

interface RouteTransitionProps {
  children: ReactNode
  className?: string
}

export function RouteTransition({
  children,
  className,
}: RouteTransitionProps) {
  const pathname = usePathname()
  const { transitions } = useMotionSettings()

  if (!transitions) {
    return (
      <div className={cn(className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: MOTION_TRANSITION_DURATION_MS / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
