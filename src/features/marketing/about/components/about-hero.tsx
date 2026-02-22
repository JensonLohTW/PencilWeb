import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'
import { ParticleField } from '@/shared/ui/animations/particle-field'
import { PointCloudBust } from '@/shared/ui/animations/point-cloud-bust'

export function AboutHero() {
    const t = useTranslations('pages.about.hero')
    return (
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-accent-100/20 pt-14 dark:from-accent-950/20 transition-colors duration-300">
            {/* <PointCloudBust /> - Temporarily hidden per user request */}
            <ParticleField className="opacity-50" />
            <ParallaxLayer
                aria-hidden="true"
                y={['-4%', '7%']}
                className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-accent-600/10 ring-1 ring-accent-50 sm:-mr-80 lg:-mr-96 dark:bg-pencil-900/30 dark:shadow-accent-400/10 dark:ring-white/5 transition-colors duration-300"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <KineticHeading
                        as="h1"
                        text={t('headline')}
                        className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto dark:text-white transition-colors duration-300"
                    />
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 dark:text-gray-400 transition-colors duration-300">
                            {t('subheadline')}
                        </p>
                    </div>
                    <Image
                        alt=""
                        src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                        width={1280}
                        height={1066}
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-pencil-200 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-2xl shadow-accent-500/10 dark:outline-white/10 transition-all duration-300"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 dark:from-gray-900 transition-colors duration-300" />
        </div>
    )
}
