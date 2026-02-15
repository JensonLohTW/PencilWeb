'use client'

import Link from 'next/link'
import { clsx } from 'clsx/lite'
import {
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface NavbarLinkProps {
  children: ReactNode
  href: string
  index?: string
  className?: string
  onNavigate?: () => void
}

export function SwissNavbarLink({
  children,
  href,
  index,
  className,
  onNavigate,
  onClick,
  ...props
}: NavbarLinkProps & Omit<ComponentProps<'a'>, 'href'>) {
  const router = useRouter()

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0

    if (isModifiedClick || props.target === '_blank') return

    if (href.startsWith('/')) {
      event.preventDefault()
      router.push(href)
      onNavigate?.()
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        'group relative flex items-baseline gap-3 py-2 transition-colors',
        'text-pencil-600 hover:text-pencil-950',
        'dark:text-pencil-400 dark:hover:text-white',
        className,
      )}
      {...props}
    >
      {index && (
        <span className="swiss-mono text-[10px] text-pencil-400 transition-colors group-hover:text-cta dark:text-pencil-500">
          {index}
        </span>
      )}
      <span className="relative text-sm font-medium tracking-tight">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-pencil-950 transition-all duration-300 group-hover:w-full dark:bg-white" />
      </span>
    </Link>
  )
}

export function SwissNavbarLogo({
  href,
  onNavigate,
  onClick,
  ...props
}: { href: string; onNavigate?: () => void } & Omit<ComponentProps<'a'>, 'href'>) {
  const router = useRouter()

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    const isModifiedClick =
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0

    if (isModifiedClick || props.target === '_blank') return

    if (href.startsWith('/')) {
      event.preventDefault()
      router.push(href)
      onNavigate?.()
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props} className="group flex items-center gap-4">
      <div className="relative flex h-10 w-10 items-center justify-center border-2 border-cta transition-all duration-300 group-hover:bg-cta dark:border-white dark:group-hover:bg-white">
        <span className="text-base font-black tracking-tighter text-cta transition-colors group-hover:text-white dark:text-white dark:group-hover:text-cta">
          P
        </span>
        <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-cta" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-cta dark:text-white">Pencil</span>
        <span className="swiss-mono text-[9px] text-cta dark:text-pencil-500">空間動態科技</span>
      </div>
    </Link>
  )
}


import { SwissMobileMenu } from './swiss-mobile-menu'

export function SwissNavbar({
  links,
  logo,
  utilities,
  actions,
  className,
  ...props
}: {
  links: ReactNode
  logo: ReactNode
  utilities: ReactNode
  actions: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof motion.header>, 'children'>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50',
          'border-b-2 border-pencil-950 bg-white/98 backdrop-blur-sm',
          'dark:border-white dark:bg-pencil-950/98',
          className,
        )}
        {...props}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-16">
          <div className="flex shrink-0 items-center">{logo}</div>

          <div className="hidden items-center gap-8 lg:flex">{links}</div>

          <div className="flex shrink-0 items-center gap-4 lg:gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              <div className="flex items-center gap-2">{utilities}</div>
              <div className="h-6 w-px bg-pencil-200 dark:bg-white/20" />
              <div className="flex items-center gap-4">{actions}</div>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
              className="group relative flex h-10 w-10 items-center justify-center border-2 border-pencil-950 transition-colors hover:bg-pencil-950 lg:hidden dark:border-white dark:hover:bg-white"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white dark:bg-white dark:group-hover:bg-pencil-950" />
                <span className="block h-0.5 w-5 bg-pencil-950 transition-colors group-hover:bg-white dark:bg-white dark:group-hover:bg-pencil-950" />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <SwissMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
        utilities={utilities}
        actions={actions}
      />
    </>
  )
}

