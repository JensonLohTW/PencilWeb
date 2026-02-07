import Link from 'next/link'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

export function NavbarLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'group relative inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-300',
        'text-pencil-600 hover:text-pencil-900 dark:text-pencil-300 dark:hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon-500 transition-all duration-300 group-hover:w-full box-shadow-[0_0_8px_var(--color-neon-500)]" />
    </Link>
  )
}

export function NavbarLogo({ className, href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link href={href} {...props} className={clsx('inline-flex items-center gap-2 group', className)}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded bg-pencil-100 border border-pencil-200 group-hover:border-neon-500 transition-colors duration-300 dark:bg-pencil-900 dark:border-pencil-700">
        <span className="text-lg font-bold text-pencil-900 group-hover:text-neon-400 dark:text-white">P</span>
      </div>
      <span className="text-xl font-bold tracking-tight text-pencil-900 group-hover:text-glow transition-all duration-300 dark:text-white">Pencil</span>
    </Link>
  )
}

export function NavbarWithLinksActionsAndCenteredLogo({
  links,
  logo,
  actions,
  className,
  ...props
}: {
  links: ReactNode
  logo: ReactNode
  actions: ReactNode
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('fixed top-4 left-4 right-4 z-50 flex justify-center', className)} {...props}>
      <nav className="glass-pro hud-border w-full max-w-7xl rounded-2xl px-6 py-3 transition-all duration-300 hover:border-neon-500/30">
        <div className="flex items-center justify-between">
          {/* Desktop Links (Left) */}
          <div className="hidden lg:flex items-center gap-8">
            {links}
          </div>

          {/* Logo (Center - or Left on Mobile) */}
          <div className="flex items-center">
            {logo}
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {actions}
            </div>

            {/* Mobile Menu Button */}
            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center rounded p-2 text-pencil-600 hover:bg-black/5 hover:text-pencil-900 transition-colors dark:text-pencil-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dialog */}
        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-white/80 backdrop:backdrop-blur-sm bg-transparent w-full h-full m-0 max-w-none max-h-none dark:backdrop:bg-black/80">
            <ElDialogPanel className="fixed inset-0 bg-white/95 p-6 flex flex-col gap-8 dark:bg-pencil-950/95">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-pencil-900 dark:text-white">Menu</div>
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Close menu"
                  className="rounded p-2 text-pencil-500 hover:text-pencil-900 hover:bg-black/5 dark:text-pencil-400 dark:hover:text-white dark:hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-6 text-center">
                {/* Mobile Links styling needs to be handled via the passed 'links' prop or context, 
                     but since 'links' is passed as a fragment of NavbarLinks, we rely on their internal styling 
                     or add global styles for mobile menu specific overrides if needed. 
                     For Pro Max, we assume the component is flexible enough or we'd refactor 'links' to be data driven.
                     Current approach: Render as is, NavbarLink might need adjustment for mobile readability if it was desktop optimized.
                 */}
                <div className="flex flex-col gap-6 [&>a]:text-2xl [&>a]:py-2 border-t border-b border-black/10 py-6 dark:border-white/10">
                  {links}
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  {actions}
                </div>
              </div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
