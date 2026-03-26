'use client'

import { Link } from '@/i18n/routing'
import { FooterNavigationConfig } from '@/shared/config/navigation'
import { useLanguage } from '@/shared/providers/language-provider'
import { ContactInteractiveItem } from '@/shared/ui/components/contact-interactive-item'
import { LanguageToggle } from '@/shared/ui/elements/language-toggle'
import { ThemeToggle } from '@/shared/ui/elements/theme-toggle'
import { FacebookIcon } from '@/shared/ui/icons/social/facebook-icon'
import { GitHubIcon } from '@/shared/ui/icons/social/github-icon'
import { InstagramIcon } from '@/shared/ui/icons/social/instagram-icon'
import { LinkedInIcon } from '@/shared/ui/icons/social/linkedin-icon'
import { XIcon } from '@/shared/ui/icons/social/x-icon'
import { YouTubeIcon } from '@/shared/ui/icons/social/youtube-icon'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { JSX, useState } from 'react'

const IconMap: Record<string, (props: React.ComponentProps<'svg'>) => JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  github: GitHubIcon,
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
}

export function ModernFooter({ navigation }: { navigation: FooterNavigationConfig }) {
  const { t } = useLanguage()
  const [isHovered, setHovered] = useState(false)

  return (
    <footer className="border-t border-white/10 bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center border-2 border-white">
                <span className="text-xs font-black text-white">P</span>
              </div>
              <span className="font-mono text-white">SYSTEM.ONLINE</span>
            </div>
            <p className="text-sm/6 text-balance text-gray-400">{t('home.hero.subheadline')}</p>
            <div className="flex flex-col gap-2 pt-2">
              <ContactInteractiveItem
                icon={Mail}
                label="Email"
                value="hank.kao@pencillink.com"
                href="mailto:hank.kao@pencillink.com"
                forceDark
              />
              <ContactInteractiveItem
                icon={Phone}
                label="Phone"
                value="0952-291-195"
                href="tel:0952-291-195"
                forceDark
              />
            </div>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => {
                const Icon = IconMap[item.iconName]
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    {Icon ? (
                      <Icon className="size-6" aria-hidden="true" />
                    ) : (
                      <span className="text-xs">{item.name}</span>
                    )}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('/') ? (
                        <Link
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="inline-block text-sm/6 text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-cta"
                        >
                          {t(item.name)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 px-8 pt-8 pb-8 sm:mt-20 sm:flex-row lg:mt-24"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <p className="relative z-10 text-center text-sm/6 text-gray-400 sm:text-left">
            &copy; {new Date().getFullYear()} Pencil Spatial Dynamics. All rights reserved.
          </p>
          <div className="relative z-10 flex items-center space-x-4">
            <LanguageToggle className="!text-gray-400 hover:!bg-white/10 hover:!text-orange-500" />
            <ThemeToggle className="!text-gray-400 hover:!bg-white/10 hover:!text-orange-500" />
          </div>

          {/* Hidden Easter Egg */}
          <motion.div
            className="pointer-events-none absolute right-0 bottom-0 left-0 flex h-12 justify-center overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pb-1 font-display text-4xl font-bold tracking-widest text-white/5 uppercase">Pencil</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
