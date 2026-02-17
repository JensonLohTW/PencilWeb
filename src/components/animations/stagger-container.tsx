'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { transitions, variants, viewportConfig } from '@/config/animations'
import { cn } from '@/shared/lib/cn'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
  viewport?: {
    once?: boolean
    amount?: number | 'some' | 'all'
    margin?: string
  }
  as?: 'div' | 'dl'
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  viewport = viewportConfig,
  as = 'div',
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: shouldReduceMotion ? 0 : delay,
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
      },
    },
  }

  if (as === 'dl') {
    return (
      <motion.dl
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={containerVariants}
        className={cn(className)}
      >
        {children}
      </motion.dl>
    )
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemBaseProps {
  children: ReactNode
  className?: string
  variant?: keyof typeof variants
  as?: 'div' | 'article'
}

export function StaggerItem({
  children,
  className,
  variant = 'fadeInUp',
  as = 'div',
}: StaggerItemBaseProps) {
  const selectedVariant = variants[variant]

  const animationVariants = {
    hidden: selectedVariant.initial,
    visible: {
      ...selectedVariant.animate,
      transition: {
        duration: transitions.duration.normal,
        ease: transitions.ease.smooth,
      },
    },
  }

  if (as === 'article') {
    return (
      <motion.article
        variants={animationVariants}
        className={cn(className)}
      >
        {children}
      </motion.article>
    )
  }

  return (
    <motion.div
      variants={animationVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
