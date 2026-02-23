import { Link } from '@/i18n/routing'
import type { ReactNode } from 'react'

interface SolutionsLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function SolutionsLink({ href, className, children }: SolutionsLinkProps) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  const isExternal = href.startsWith('http://') || href.startsWith('https://')
  return (
    <a href={href} className={className} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  )
}
