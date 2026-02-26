'use client'

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Link } from '@/i18n/routing'
import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/shared/lib/cn'
import type { ComponentProps, ComponentType } from 'react'
import type { FeatureIconKey, FeatureItem, SolutionsFeatureSectionProps } from '../types'
import { FadeIn } from '@/components/animations/fade-in'

const iconMap: Record<FeatureIconKey, ComponentType<ComponentProps<'svg'>>> = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  queue: ArrowPathIcon,
  security: FingerPrintIcon,
}

const expandVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    height: 'auto',
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.25, delay: 0.05 },
      clipPath: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
    transition: {
      height: { duration: 0.3, ease: 'easeInOut' },
      opacity: { duration: 0.2 },
      clipPath: { duration: 0.3, ease: 'easeInOut' },
    },
  },
} as const

function SolutionRow({ feature, isExpanded, onToggle }: { feature: FeatureItem; isExpanded: boolean; onToggle: (name: string) => void }) {
  const Icon = iconMap[feature.icon]
  const rowRef = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback(() => {
    onToggle(feature.name)
    if (!isExpanded) {
      setTimeout(() => {
        rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
    }
  }, [feature.name, isExpanded, onToggle])

  return (
    <div
      ref={rowRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300",
        isExpanded
          ? "border-accent-500/30 bg-accent-50/30 dark:border-accent-500/20 dark:bg-accent-500/5 shadow-sm"
          : "border-pencil-200/60 bg-white/50 hover:border-accent-500/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        className="flex w-full items-center gap-x-4 p-5 text-left focus:outline-none"
      >
        <div className={cn(
          "flex size-12 items-center justify-center rounded-xl transition-all duration-300",
          isExpanded
            ? "bg-accent-600 text-white"
            : "bg-accent-600/10 text-accent-600 group-hover:bg-accent-600 group-hover:text-white dark:bg-accent-500/20 dark:text-accent-400 dark:group-hover:bg-accent-500"
        )}>
          <Icon aria-hidden="true" className="size-6" />
        </div>

        <div className="flex flex-1 flex-col">
          <span className={cn(
            "text-lg font-bold transition-colors",
            isExpanded ? "text-accent-700 dark:text-accent-300" : "text-pencil-950 dark:text-white"
          )}>
            {feature.name}
          </span>
          {!isExpanded && (
            <span className="line-clamp-1 text-sm text-pencil-500 dark:text-pencil-400">
              {feature.description}
            </span>
          )}
        </div>

        <ChevronDownIcon
          className={cn(
            "size-5 transition-transform duration-300",
            isExpanded ? "rotate-180 text-accent-600" : "text-pencil-400 group-hover:text-accent-500"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            variants={expandVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-5 pb-6 pt-2">
              <div className="mb-4 h-px w-full bg-accent-500/10 dark:bg-accent-500/20" />
              <p className="text-base leading-relaxed text-pencil-700 dark:text-pencil-300">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                >
                  預約諮詢
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle(feature.name);
                  }}
                  className="text-sm font-semibold text-pencil-600 hover:text-accent-600 dark:text-pencil-400 dark:hover:text-accent-400"
                >
                  隱藏細節
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SolutionsFeatureSection({ features }: SolutionsFeatureSectionProps) {
  const [expandedName, setExpandedName] = useState<string | null>(null)

  const handleToggle = useCallback((name: string) => {
    setExpandedName(prev => prev === name ? null : name)
  }, [])

  return (
    <section id="features" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <FadeIn className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-accent-600 dark:text-accent-400">{features.eyebrow}</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">
          {features.title}
        </p>
        <p className="mt-6 text-lg/8 text-pencil-600 dark:text-pencil-400">{features.description}</p>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 gap-6">
          {features.items.map((feature) => (
            <SolutionRow
              key={feature.name}
              feature={feature}
              isExpanded={expandedName === feature.name}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
