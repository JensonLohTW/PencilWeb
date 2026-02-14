'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { SwissHeroEnhanced } from '@/features/marketing/sections/swiss/swiss-hero-enhanced'
import { ContactForm } from '@/features/contact/components/contact-form'
import { SwissFAQ } from '@/features/marketing/sections/swiss/swiss-faq'

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <>
            {/* Hero */}
            <SwissHeroEnhanced
                eyebrow={t('pages.contact.hero.eyebrow')}
                headline={t('pages.contact.hero.headline')}
                subheadline={t('pages.contact.hero.subheadline')}
                centered
            />

            {/* Contact Form */}
            <ContactForm />

            {/* FAQs */}
            <SwissFAQ />
        </>
    )
}
