'use client'

import type { ProjectsLogoCloudSectionProps } from '@/features/marketing/projects/types'
import { motion, useReducedMotion } from 'framer-motion'

export function ProjectsLogoCloudSection({ logoCloud }: ProjectsLogoCloudSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-6 py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 lg:grid-cols-5">
        {logoCloud.logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
            className="flex items-center justify-center"
          >
            <img
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              className="max-h-12 w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
