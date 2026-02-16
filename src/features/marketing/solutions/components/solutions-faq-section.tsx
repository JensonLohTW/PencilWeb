'use client'

import { useState } from 'react'
import type { SolutionsFaqSectionProps } from '../types'

export function SolutionsFaqSection({ faq }: SolutionsFaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(faq.items[0]?.id ?? null)

  return (
    <section className="mx-auto max-w-2xl px-6 pb-8 sm:pt-12 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
      <h2 className="text-4xl font-semibold tracking-tight text-pencil-950 sm:text-5xl dark:text-white">{faq.title}</h2>

      <dl className="mt-20 divide-y divide-pencil-900/10 dark:divide-white/10">
        {faq.items.map((item) => {
          const isOpen = openId === item.id
          return (
            <div key={item.id} className="py-8 first:pt-0 last:pb-0">
              <dt>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="text-base/7 font-semibold text-pencil-950 dark:text-white">{item.question}</span>
                  <span className="text-2xl leading-none text-pencil-500 dark:text-pencil-400">{isOpen ? '−' : '+'}</span>
                </button>
              </dt>
              {isOpen ? (
                <dd className="mt-4">
                  <p className="text-base/7 text-pencil-600 dark:text-pencil-300">{item.answer}</p>
                </dd>
              ) : null}
            </div>
          )
        })}
      </dl>
    </section>
  )
}
