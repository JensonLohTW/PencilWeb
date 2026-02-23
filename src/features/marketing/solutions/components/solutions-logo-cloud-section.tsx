import Image from 'next/image'
import type { SolutionsLogoCloudSectionProps } from '../types'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'

export function SolutionsLogoCloudSection({ logoCloud }: SolutionsLogoCloudSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <StaggerContainer
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        {logoCloud.logos.map((logo, index) => (
          <StaggerItem
            key={logo.name}
            className={[
              'col-span-2 opacity-80 transition-opacity hover:opacity-100',
              index < 3 ? 'lg:col-span-1' : '',
              index === 3 ? 'sm:col-start-2 lg:col-span-1' : '',
              index === 4 ? 'col-start-2 sm:col-start-auto lg:col-span-1' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
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
