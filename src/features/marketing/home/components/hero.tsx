'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'
import { ParticleField } from '@/shared/ui/animations/particle-field'

export function Hero() {
    const t = useTranslations('pages.home.hero')

    return (
        <div className="relative isolate overflow-hidden">
            <ParticleField className="opacity-65" />
            <svg
                aria-hidden="true"
                className="absolute inset-0 -z-10 size-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                        width={200}
                        height={200}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
                    <path
                        d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <ParallaxLayer
                aria-hidden="true"
                y={['-5%', '8%']}
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                />
            </ParallaxLayer>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <StaggerContainer className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8" viewport={{ once: true, amount: 0.5 }}>
                    <StaggerItem>
                        <div className="flex items-center gap-x-2">
                            <div className="rounded-md bg-accent-500/10 p-2 ring-1 ring-inset ring-accent-500/20">
                                <svg className="h-8 w-8 text-accent-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <span className="text-sm/6 font-semibold text-accent-600 dark:text-accent-400">{t('eyebrow')}</span>
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <KineticHeading
                            as="h1"
                            text={t('headline')}
                            className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white"
                        />
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400">
                            {t('subheadline')}
                        </p>
                    </StaggerItem>
                    <StaggerItem>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/solutions"
                                className="rounded-md bg-accent-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                            >
                                {t('cta')}
                            </Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </div>
    )
}
