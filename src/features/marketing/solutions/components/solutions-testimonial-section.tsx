import Image from 'next/image'
import type { SolutionsTestimonialSectionProps } from '../types'
import { FadeIn } from '@/components/animations/fade-in'

export function SolutionsTestimonialSection({ testimonial }: SolutionsTestimonialSectionProps) {
  return (
    <section className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
      <FadeIn className="relative overflow-hidden bg-pencil-950 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
        <Image
          src={testimonial.backgroundImage.src}
          alt={testimonial.backgroundImage.alt}
          fill
          className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
        />
        <div className="absolute inset-0 bg-pencil-950/90 mix-blend-multiply" />

        <div aria-hidden="true" className="absolute -top-56 -left-80 transform-gpu blur-3xl">
          <div
            className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-2xl lg:mx-0">
          <Image
            src={testimonial.logo.src}
            alt={testimonial.logo.alt}
            width={160}
            height={48}
            className="h-12 w-auto"
          />
          <figure>
            <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
              <p>{`“${testimonial.quote}”`}</p>
            </blockquote>
            <figcaption className="mt-6 text-base text-white">
              <div className="font-semibold">{testimonial.authorName}</div>
              <div className="mt-1">{testimonial.authorRole}</div>
            </figcaption>
          </figure>
        </div>
      </FadeIn>
    </section>
  )
}
