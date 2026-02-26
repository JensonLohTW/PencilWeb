'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { DocumentLayout } from '@/shared/ui/components/document-layout'

export default function TermsPage() {
    const { t } = useLanguage()

    return (
        <DocumentLayout
            title={t('pages.terms.title')}
            lastUpdated="2024-02-10"
            status={t('pages.privacy.statusActive')}
            category={t('footer.legal')}
        >
            <p className="lead text-xl text-pencil-600 dark:text-pencil-300">
                {t('pages.terms.lead')}
            </p>

            <h2>01. {t('pages.terms.sections.acceptance.title')}</h2>
            <p>{t('pages.terms.sections.acceptance.content')}</p>

            <h2>02. {t('pages.terms.sections.services.title')}</h2>
            <p>{t('pages.terms.sections.services.content')}</p>

            <h2>03. {t('pages.terms.sections.responsibilities.title')}</h2>
            <p>{t('pages.terms.sections.responsibilities.content')}</p>
            <ul>
                <li>{t('pages.terms.sections.responsibilities.items.0')}</li>
                <li>{t('pages.terms.sections.responsibilities.items.1')}</li>
                <li>{t('pages.terms.sections.responsibilities.items.2')}</li>
            </ul>

            <h2>04. {t('pages.terms.sections.intellectualProperty.title')}</h2>
            <p>{t('pages.terms.sections.intellectualProperty.content')}</p>

            <h2>05. {t('pages.terms.sections.disclaimer.title')}</h2>
            <p>{t('pages.terms.sections.disclaimer.content')}</p>

            <h2>06. {t('pages.terms.sections.jurisdiction.title')}</h2>
            <p>{t('pages.terms.sections.jurisdiction.content')}</p>

            <div className="mt-12 border-t border-pencil-950/10 pt-8 dark:border-white/10">
                <p className="text-sm text-pencil-500 dark:text-pencil-400">
                    {t('pages.terms.contact')} <a href="mailto:legal@pencil.com.tw">legal@pencil.com.tw</a>
                </p>
            </div>
        </DocumentLayout>
    )
}
