'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ElementType } from 'react'
import { useMotionSettings } from '@/shared/hooks/use-motion-settings'
import { cn } from '@/shared/lib/cn'

interface KineticHeadingProps {
  text: string
  className?: string
  letterClassName?: string
  as?: ElementType
  delay?: number
  stagger?: number
  once?: boolean
}

export function KineticHeading({
  text,
  className,
  letterClassName,
  as: Component = 'h1',
  delay = 0,
  stagger = 0.018,
  once = true,
}: KineticHeadingProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: '-8%' })
  const { reduced } = useMotionSettings()
  const letters = Array.from(text)

  const Tag = Component as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  if (reduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0.95 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: delay,
              staggerChildren: stagger,
            },
          },
        }}
        className="inline-block"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={{
              hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{ y: -2, color: 'var(--color-accent-600)' }}
            className={cn('inline-block will-change-transform', letterClassName)}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
