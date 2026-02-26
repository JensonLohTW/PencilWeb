'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { DocumentLayout } from '@/shared/ui/components/document-layout'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <DocumentLayout
      title={t('pages.privacy.title')}
      lastUpdated="2024-02-10"
      status={t('pages.privacy.statusActive')}
      category={t('footer.legal')}
    >
      <p className="lead text-xl text-pencil-600 dark:text-pencil-300">
        {t('pages.privacy.lead')}
      </p>

      <h2>01. {t('pages.privacy.sections.dataCollection.title')}</h2>
      <p>{t('pages.privacy.sections.dataCollection.content')}</p>
      <ul>
        <li>{t('pages.privacy.sections.dataCollection.items.0')}</li>
        <li>{t('pages.privacy.sections.dataCollection.items.1')}</li>
        <li>{t('pages.privacy.sections.dataCollection.items.2')}</li>
      </ul>

      <h2>02. {t('pages.privacy.sections.dataUsage.title')}</h2>
      <p>{t('pages.privacy.sections.dataUsage.content')}</p>
      <ul>
        <li>{t('pages.privacy.sections.dataUsage.items.0')}</li>
        <li>{t('pages.privacy.sections.dataUsage.items.1')}</li>
        <li>{t('pages.privacy.sections.dataUsage.items.2')}</li>
      </ul>

      <h2>03. {t('pages.privacy.sections.cookies.title')}</h2>
      <p>{t('pages.privacy.sections.cookies.content')}</p>

      <h2>04. {t('pages.privacy.sections.thirdParty.title')}</h2>
      <p>{t('pages.privacy.sections.thirdParty.content')}</p>

      <h2>05. {t('pages.privacy.sections.security.title')}</h2>
      <p>{t('pages.privacy.sections.security.content')}</p>

      <h2>06. {t('pages.privacy.sections.rights.title')}</h2>
      <p>{t('pages.privacy.sections.rights.content')}</p>

      <div className="mt-12 border-t border-pencil-950/10 pt-8 dark:border-white/10">
        <p className="text-sm text-pencil-500 dark:text-pencil-400">
          {t('pages.privacy.contact')} <a href="mailto:contact@pencil.com.tw">contact@pencil.com.tw</a>
        </p>
      </div>
    </DocumentLayout>
  )
}
