import Link from 'next/link'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../../elements/container'
import { ArrowNarrowRightIcon } from '../../icons/arrow-narrow-right-icon'

export function FooterCategory({ title, children, ...props }: { title: ReactNode } & ComponentProps<'div'>) {
  return (
    <div {...props}>
      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cta mb-4 border-b border-cta/20 pb-2 inline-block">
        &gt; {title}
      </h3>
      <ul role="list" className="flex flex-col gap-3 font-mono text-sm">
        {children}
      </ul>
    </div>
  )
}

export function FooterLink({ href, className, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <li>
      <Link
        href={href}
        {...props}
        className={clsx(
          'text-pencil-600 hover:text-cta hover:translate-x-1 transition-all duration-200 inline-block dark:text-pencil-400 dark:hover:text-cta',
          className
        )}
      />
    </li>
  )
}

export function SocialLink({
  href,
  name,
  className,
  ...props
}: {
  href: string
  name: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={name}
      className={clsx('text-pencil-400 hover:text-cta transition-colors *:size-5 dark:hover:text-cta', className)}
      {...props}
    />
  )
}

export function NewsletterForm({
  headline,
  subheadline,
  className,
  ...props
}: {
  headline: ReactNode
  subheadline: ReactNode
} & ComponentProps<'form'>) {
  return (
    <form className={clsx('flex max-w-sm flex-col gap-4', className)} {...props}>
      <div className="font-mono text-cta text-sm dark:text-cta">root@pencil:~/subscribe $</div>
      <div className="text-pencil-900 font-bold text-lg dark:text-white">{headline}</div>
      <div className="text-pencil-600 text-sm font-mono dark:text-pencil-400">{subheadline}</div>
      <div className="flex items-center border border-pencil-200 bg-white p-1 rounded group focus-within:border-cta transition-colors dark:border-pencil-700 dark:bg-pencil-900/50">
        <span className="pl-3 text-cta font-mono text-sm dark:text-cta">&gt;</span>
        <input
          type="email"
          placeholder="input_email"
          aria-label="Email"
          className="flex-1 bg-transparent px-3 py-2 text-pencil-900 placeholder-pencil-400 focus:outline-none font-mono text-sm dark:text-white dark:placeholder-pencil-600"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="bg-pencil-200 text-pencil-900 p-2 rounded hover:bg-cta hover:text-white transition-colors dark:bg-pencil-800 dark:text-white"
        >
          <ArrowNarrowRightIcon className="size-4" />
        </button>
      </div>
    </form>
  )
}

export function FooterWithNewsletterFormCategoriesAndSocialIcons({
  cta, // Note: We might re-purpose CTA or hide it if it doesn't fit Terminal style, but here we adapt it.
  links,
  fineprint,
  socialLinks,
  className,
  ...props
}: {
  cta: ReactNode
  links: ReactNode
  fineprint: ReactNode
  socialLinks?: ReactNode
} & ComponentProps<'footer'>) {
  return (
    <footer className={clsx('relative border-t border-black/5 bg-pencil-50 dark:border-white/10 dark:bg-black', className)} {...props}>
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <Container className="relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Branding & CTA Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-white border border-black/5 p-6 rounded-lg font-mono dark:bg-pencil-900/50 dark:border-white/10">
              <div className="flex gap-2 mb-4">
                <div className="size-3 rounded-full bg-red-500 opacity-50" />
                <div className="size-3 rounded-full bg-yellow-500 opacity-50" />
                <div className="size-3 rounded-full bg-green-500 opacity-50" />
              </div>
              <div className="text-pencil-600 mb-6 dark:text-pencil-300">
                {cta}
              </div>
            </div>
            {socialLinks && <div className="flex gap-6 mt-auto">{socialLinks}</div>}
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {links}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-pencil-500 dark:border-white/10">
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
            {fineprint}
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-cta animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
