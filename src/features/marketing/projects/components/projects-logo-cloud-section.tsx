'use client'

import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import type { ProjectsLogoCloudSectionProps } from '@/features/marketing/projects/types'
import Image from 'next/image'

export function ProjectsLogoCloudSection({ logoCloud }: ProjectsLogoCloudSectionProps) {
  return (
    <section className="px-6 py-20 lg:px-16">
      <StaggerContainer className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-8 opacity-70 sm:grid-cols-3 lg:grid-cols-5">
        {logoCloud.logos.map((logo) => (
          <StaggerItem key={logo.name} className="flex items-center justify-center">
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width}
              height={logo.height}
              className="max-h-12 w-full object-contain"
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
