import type { SolutionsLogoCloudSectionProps } from '../types'

export function SolutionsLogoCloudSection({ logoCloud }: SolutionsLogoCloudSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {logoCloud.logos.map((logo, index) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={[
              'col-span-2 max-h-12 w-full object-contain opacity-80 transition-opacity hover:opacity-100',
              index < 3 ? 'lg:col-span-1' : '',
              index === 3 ? 'sm:col-start-2 lg:col-span-1' : '',
              index === 4 ? 'col-start-2 sm:col-start-auto lg:col-span-1' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          />
        ))}
      </div>
    </section>
  )
}
