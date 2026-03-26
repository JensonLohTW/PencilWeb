'use client'

import { FadeIn } from '@/components/animations/fade-in'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export function JobOpenings() {
  const t = useTranslations('pages.about.jobs')
  const jobs = [0, 1, 2]
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 pb-32 sm:mt-40 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white">
              {t('headline')}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600 transition-colors duration-300 dark:text-gray-400">
              {t('description')}
            </p>
          </FadeIn>
          <Image
            alt=""
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
            width={1344}
            height={1104}
            className="mt-16 aspect-[6/5] w-full rounded-2xl object-cover shadow-2xl shadow-accent-500/10 outline outline-1 -outline-offset-1 outline-gray-200 transition-colors duration-300 lg:aspect-auto lg:h-[34.5rem] dark:outline-white/10"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <h3 className="sr-only">Job openings</h3>
          <StaggerContainer className="-my-8 divide-y divide-gray-200 transition-colors duration-300 dark:divide-gray-800">
            {jobs.map((index) => {
              const isExpanded = expandedIndex === index
              return (
                <StaggerItem key={index} as="article" className="py-8">
                  <dl className="relative flex flex-col gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 dark:text-white">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="group flex w-full items-center justify-between rounded-md text-left transition-colors hover:text-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 dark:hover:text-accent-400"
                        aria-expanded={isExpanded}
                        aria-controls={`job-details-${index}`}
                      >
                        <span>{t(`items.${index}.role`)}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={`${
                              isExpanded ? '-rotate-180' : 'rotate-0'
                            } h-6 w-6 transform text-gray-400 transition-all duration-300 ease-in-out group-hover:text-accent-600 dark:text-gray-500 dark:group-hover:text-accent-400`}
                            aria-hidden="true"
                          />
                        </span>
                      </button>
                    </dd>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.dd
                          id={`job-details-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2">
                            <dt className="sr-only">Description</dt>
                            <dd className="w-full flex-none text-base/7 text-gray-600 transition-colors duration-300 dark:text-gray-400">
                              {t(`items.${index}.description`)}
                            </dd>

                            <dt className="sr-only">Salary</dt>
                            <dd className="mt-4 text-base/7 font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
                              {t(`items.${index}.salary`)}
                            </dd>

                            <dt className="sr-only">Location</dt>
                            <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500 transition-colors duration-300 dark:text-gray-400">
                              <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-current">
                                <circle r={1} cx={1} cy={1} />
                              </svg>
                              {t(`items.${index}.location`)}
                            </dd>
                          </div>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </dl>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
          <div className="mt-8 flex border-t border-gray-200 pt-8 transition-colors duration-300 dark:border-gray-800">
            <a
              href="#"
              className="text-sm/6 font-semibold text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
            >
              {t('viewAll')} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
