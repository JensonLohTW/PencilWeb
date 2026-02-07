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
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,var(--color-pencil-50)_100%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,#000_100%)] pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/20 rounded-full blur-[120px] opacity-40 animate-pulse-glow pointer-events-none" />

      {/* Spotlight Effect */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/5 dark:bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Container className="relative z-20 flex flex-col items-center gap-8 text-center">
        {eyebrow && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000 ease-out">
            {eyebrow}
          </div>
        )}

        <h1 className="glitch-text-effect max-w-5xl text-5xl font-bold tracking-tight text-pencil-900 sm:text-7xl lg:text-8xl animate-in zoom-in-95 duration-1000 ease-out dark:text-white drop-shadow-2xl">
          {headline}
        </h1>

        <div className="max-w-2xl px-4 text-lg leading-8 text-pencil-600 sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 ease-out fill-mode-backwards dark:text-pencil-300 backdrop-blur-sm bg-white/30 dark:bg-black/30 p-6 rounded-2xl border border-white/20 shadow-xl">
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
