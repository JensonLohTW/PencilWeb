'use client'

import { useLanguage } from '@/shared/providers/language-provider'
import { motion } from 'framer-motion'

interface TeamItem {
  role: string
  focus: string
}

interface PartnerItem {
  name: string
  field: string
}

export function SwissTeamPartners() {
  const { t } = useLanguage()
  const teamData = t('pages.about.teamPartners.team')
  const partnerData = t('pages.about.teamPartners.partners')
  const team = Array.isArray(teamData) ? (teamData as TeamItem[]) : []
  const partners = Array.isArray(partnerData) ? (partnerData as PartnerItem[]) : []

  return (
    <section className="border-t border-pencil-200 px-6 py-24 lg:px-16 dark:border-white/10">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="swiss-mono mb-2 text-cta dark:text-pencil-400">
            {t('pages.about.teamPartners.eyebrow')}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-cta lg:text-5xl dark:text-white">
            {t('pages.about.teamPartners.title')}
          </h2>
          <p className="mt-4 text-pencil-600 dark:text-pencil-400">{t('pages.about.teamPartners.description')}</p>

          <div className="mt-8 grid gap-3">
            {team.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start justify-between border-b border-pencil-200 py-4 dark:border-white/10"
              >
                <span className="font-medium text-pencil-950 dark:text-white">{item.role}</span>
                <span className="max-w-[60%] text-right text-sm text-pencil-600 dark:text-pencil-300">
                  {item.focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="swiss-mono mb-3 text-xs text-pencil-400 dark:text-pencil-500">
            {t('pages.about.teamPartners.partnerLabel')}
          </p>
          <div className="grid grid-cols-2 gap-px border border-pencil-200 bg-pencil-200 dark:border-white/10 dark:bg-white/10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white p-5 dark:bg-pencil-900"
              >
                <p className="text-sm font-semibold text-pencil-950 dark:text-white">{partner.name}</p>
                <p className="swiss-mono mt-1 text-[11px] text-pencil-500 dark:text-pencil-400">{partner.field}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
