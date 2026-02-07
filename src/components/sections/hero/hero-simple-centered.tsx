import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../../elements/container'
import { Heading } from '../../elements/heading'
import { Text } from '../../elements/text'

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
    <section className={clsx('py-24 sm:py-32', className)} {...props}>
      <Container className="flex flex-col items-center text-center gap-8">
        {eyebrow}
        <Heading className="max-w-4xl">{headline}</Heading>
        <Text size="lg" className="flex max-w-2xl flex-col gap-4 text-pencil-600 dark:text-pencil-300">
          {subheadline}
        </Text>
        {cta}
      </Container>
    </section>
  )
}
