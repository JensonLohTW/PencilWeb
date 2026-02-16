import type { ComponentProps } from 'react'
import { cn } from '@/shared/lib/cn'

interface TechnologySectionShellProps extends ComponentProps<'section'> {
  innerClassName?: string
}

export function TechnologySectionShell({ children, className, innerClassName, ...props }: TechnologySectionShellProps) {
  return (
    <section className={cn('px-6 py-24 lg:px-16', className)} {...props}>
      <div className={cn('mx-auto max-w-7xl', innerClassName)}>{children}</div>
    </section>
  )
}
