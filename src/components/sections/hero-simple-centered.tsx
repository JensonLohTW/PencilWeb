import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function HeroSimpleCentered({
  eyebrow,
  headline,
  subheadline,
  cta,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-32', className)} {...props}>
      {/* Cinematic Background Elements can also be injected here if not in page.tsx */}

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        {eyebrow && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000 ease-out">
            {eyebrow}
          </div>
        )}

        <h1 className="glitch-text-effect max-w-5xl text-5xl font-bold tracking-tight text-pencil-900 sm:text-7xl lg:text-8xl animate-in zoom-in-95 duration-1000 ease-out dark:text-white">
          {headline}
        </h1>

        <div className="max-w-2xl px-4 text-lg leading-8 text-pencil-600 sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 ease-out fill-mode-backwards dark:text-pencil-300">
          {subheadline}
        </div>

        {cta && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 ease-out fill-mode-backwards">
            {cta}
          </div>
        )}
      </Container>
    </section>
  )
}
