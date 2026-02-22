'use client'

import type { TechnologyFlowSectionProps } from '@/features/marketing/technology/types'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { technologyReveal } from './technology-motion'
import { TechnologyFlowGraphic } from './technology-flow-graphic'

export function TechnologyFlowSection({ flow }: TechnologyFlowSectionProps) {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="tech-flow" className="relative grid min-h-screen grid-cols-1 border-b border-pencil-700/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] text-pencil-950 dark:text-white lg:grid-cols-[1fr_1fr]">
      {/* Left Column: Content */}
      <div className="flex flex-col border-r border-pencil-700/10 dark:border-white/10 pb-20">

        {/* Header Block */}
        <motion.div {...technologyReveal(!!reduceMotion)} className="p-8 lg:p-12 xl:p-16">
          <h2 className="text-6xl font-medium uppercase leading-[0.9] tracking-tighter text-pencil-950 dark:text-white sm:text-7xl lg:text-8xl xl:text-[8rem]">
            {/* Split "FORMA ENGINE" style based on flow.title */}
            <span className="block text-pencil-900/90 dark:text-white/90">{flow.title.split(' ')[0]}</span>
            <span className="block text-pencil-950 dark:text-white">{flow.title.split(' ').slice(1).join(' ')}</span>
          </h2>

          <div className="mt-12 flex max-w-sm shrink-0 flex-col font-mono text-[11px] uppercase tracking-widest text-pencil-500 dark:text-[#888]">
            <p className="leading-relaxed normal-case tracking-normal">{flow.description}</p>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          {...technologyReveal(!!reduceMotion, { delay: 0.1 })}
          className="grid grid-cols-2 border-y border-pencil-700/10 dark:border-white/10 font-mono text-[10px] uppercase tracking-widest text-pencil-500 dark:text-[#888] sm:grid-cols-3"
        >
          {flow.stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 lg:px-12 ${index < 2 ? 'border-r border-pencil-700/10 dark:border-white/10' : 'hidden sm:block'
                }`}
            >
              <span className="mb-2 block text-pencil-400 dark:text-[#555]">{stat.label}</span>
              <span className="text-sm font-semibold text-pencil-950 dark:text-white">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Steps List */}
        <div className="flex flex-col">
          {flow.steps.map((step, index) => (
            <motion.button
              key={step.number}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              {...technologyReveal(!!reduceMotion, { delay: 0.2 + index * 0.05 })}
              className={`group flex items-start gap-8 border-b border-pencil-700/10 dark:border-white/10 p-6 text-left transition-colors duration-300 lg:px-12 ${activeIndex === index ? 'bg-pencil-100 dark:bg-white/[0.03]' : 'hover:bg-pencil-50 dark:hover:bg-white/[0.02]'
                }`}
            >
              <span className={`font-mono text-[10px] uppercase tracking-widest ${activeIndex === index ? 'text-cta dark:text-cta' : 'text-pencil-400 dark:text-[#444] group-hover:text-pencil-600 dark:group-hover:text-white/50'
                }`}>
                {step.number}
              </span>
              <div>
                <h3 className={`font-semibold tracking-wide transition-colors duration-200 ${activeIndex === index ? 'text-pencil-950 dark:text-white' : 'text-pencil-600 dark:text-white/80 group-hover:text-pencil-900 dark:group-hover:text-white'
                  }`}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pencil-500 dark:text-[#888]">
                  {step.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Right Column: Graphic */}
      <div className="relative hidden h-[600px] border-pencil-700/10 dark:border-white/10 lg:block lg:h-auto">
        <TechnologyFlowGraphic />
      </div>
    </section>
  )
}
