'use client'

import { Link } from '@/i18n/routing'
import { FooterNavigationConfig } from '@/shared/config/navigation'
import { useLanguage } from '@/shared/providers/language-provider'
import { FacebookIcon } from '@/shared/ui/icons/social/facebook-icon'
import { GitHubIcon } from '@/shared/ui/icons/social/github-icon'
import { InstagramIcon } from '@/shared/ui/icons/social/instagram-icon'
import { LinkedInIcon } from '@/shared/ui/icons/social/linkedin-icon'
import { XIcon } from '@/shared/ui/icons/social/x-icon'
import { YouTubeIcon } from '@/shared/ui/icons/social/youtube-icon'
import { JSX } from 'react'

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

    return (
        <footer className="bg-gray-900 border-t border-white/10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center border-2 border-white">
                                <span className="text-xs font-black text-white">P</span>
                            </div>
                            <span className="font-mono text-white">SYSTEM.ONLINE</span>
                        </div>
                        <p className="text-balance text-sm/6 text-gray-400">
                            {t('home.hero.subheadline')}
                        </p>
                        <div className="flex gap-x-6">
                            {navigation.social.map((item) => {
                                const Icon = IconMap[item.iconName]
                                return (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        <span className="sr-only">{item.name}</span>
                                        {Icon ? <Icon className="size-6" aria-hidden="true" /> : <span className="text-xs">{item.name}</span>}
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
                                                <Link href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                                                    {t(item.name)}
                                                </Link>
                                            ) : (
                                                <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
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
                                                <Link href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                                                    {t(item.name)}
                                                </Link>
                                            ) : (
                                                <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
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
                                                <Link href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                                                    {t(item.name)}
                                                </Link>
                                            ) : (
                                                <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
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
                                                <Link href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
                                                    {t(item.name)}
                                                </Link>
                                            ) : (
                                                <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white transition-colors">
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
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 pl-8">
                    <p className="text-sm/6 text-gray-400">&copy; {new Date().getFullYear()} Pencil Spatial Dynamics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
