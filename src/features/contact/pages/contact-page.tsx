'use client'

import { useTranslations } from 'next-intl'
import { ContactForm } from '@/features/contact/components/contact-form'
import { SolutionsFaqSection } from '@/features/marketing/solutions/components/solutions-faq-section'
import { FadeIn } from '@/components/animations/fade-in'
import { KineticHeading } from '@/shared/ui/animations/kinetic-heading'
import { ParticleField } from '@/shared/ui/animations/particle-field'
import { ParallaxLayer } from '@/shared/ui/animations/parallax-layer'

export default function ContactPage() {
    const t = useTranslations('pages.contact')
    const tHomeFaq = useTranslations('pages.home.faq')

    // Adapt home FAQ items to FaqContent type (adding IDs)
    const faqData = {
        title: tHomeFaq('title'),
        items: (tHomeFaq.raw('items') as Array<{ question: string; answer: string }>).map((item, idx) => ({
            id: idx,
            question: item.question,
            answer: item.answer
        }))
    }

    return (
        <div className="relative isolate">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-14">
                <ParticleField className="opacity-60" />
                <ParallaxLayer
                    aria-hidden="true"
                    y={['-3%', '6%']}
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-accent-200 to-accent-400 opacity-20 dark:opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </ParallaxLayer>

                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <FadeIn>
                                <p className="text-base font-semibold leading-7 text-accent-600 dark:text-accent-400">
                                    {t('hero.eyebrow')}
                                </p>
                                <KineticHeading
                                    as="h1"
                                    text={t('hero.headline')}
                                    className="mt-2 text-5xl font-bold tracking-tight text-pencil-950 sm:text-7xl dark:text-white"
                                />
                                <p className="mt-8 text-lg font-medium text-pretty text-pencil-600 sm:text-xl/8 dark:text-pencil-300">
                                    {t('hero.subheadline')}
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-white py-12 dark:bg-pencil-950">
                <ContactForm />
            </section>

            {/* FAQ Section */}
            <div className="bg-white py-12 dark:bg-pencil-950">
                <SolutionsFaqSection faq={faqData} />
            </div>
        </div>
    )
}
