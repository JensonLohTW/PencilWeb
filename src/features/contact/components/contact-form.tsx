'use client'

import { useState, type FormEvent } from 'react'
import { contactOptionIndices } from '@/features/contact/constants/contact-form'
import { submitContactInquiry } from '@/features/contact/services/contact-inquiry'
import type {
  ContactInquiryPayload,
  ContactSubmissionState,
} from '@/features/contact/types/contact-inquiry'
import { useLanguage } from '@/shared/providers/language-provider'
import { ContactInteractiveItem } from '@/shared/ui/components/contact-interactive-item'
import { Mail, Phone } from 'lucide-react'

function getStringField(formData: FormData, field: string): string {
  const value = formData.get(field)
  return typeof value === 'string' ? value.trim() : ''
}

function getStringArrayField(formData: FormData, field: string): string[] {
  return formData
    .getAll(field)
    .map((value) => (typeof value === 'string' ? value.trim() : ''))
    .filter(Boolean)
}

export function ContactForm() {
  const { t } = useLanguage()
  const [submissionState, setSubmissionState] =
    useState<ContactSubmissionState>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const {
    solutionTypes: solutionTypeIndices,
    targetScenes: targetSceneIndices,
    timeline: timelineIndices,
    benefits: benefitIndices,
  } = contactOptionIndices

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmissionState('submitting')
    setFeedbackMessage('')

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    const payload: ContactInquiryPayload = {
      name: getStringField(formData, 'name'),
      company: getStringField(formData, 'company'),
      email: getStringField(formData, 'email'),
      phone: getStringField(formData, 'phone'),
      solutionTypes: getStringArrayField(formData, 'solutionType'),
      targetScenes: getStringArrayField(formData, 'targetScene'),
      timeline: getStringField(formData, 'timeline'),
      message: getStringField(formData, 'message'),
    }

    if (!payload.name || !payload.company || !payload.email) {
      setSubmissionState('error')
      setFeedbackMessage('請完整填寫必填欄位後再送出。')
      return
    }

    try {
      const result = await submitContactInquiry(payload)
      setSubmissionState('success')

      if (result.mode === 'mailto') {
        setFeedbackMessage('已開啟郵件軟體草稿，請確認後送出。')
        // Use an invisible anchor tag click instead of window.location.href
        // to bypass aggressive browser popup/external protocol blockers
        const link = document.createElement('a')
        link.href = result.href
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        setFeedbackMessage('表單已成功送出，我們會盡快與您聯繫。')
      }

      formElement.reset()
    } catch {
      setSubmissionState('error')
      setFeedbackMessage('送出失敗，請稍後再試。')
    }
  }

  return (
    <section className="bg-white py-16 dark:bg-pencil-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-pencil-900 dark:text-pencil-100">
              {t('pages.contact.form.title')}
            </h2>
            <p className="mt-2 text-pencil-600 dark:text-pencil-400">
              {t('pages.contact.form.description')}
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* Contact Info */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                  >
                    {t('pages.contact.form.fields.name.label')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                    placeholder={t('pages.contact.form.fields.name.placeholder')}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                  >
                    {t('pages.contact.form.fields.company.label')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                    placeholder={t('pages.contact.form.fields.company.placeholder')}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                  >
                    {t('pages.contact.form.fields.email.label')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                    placeholder={t('pages.contact.form.fields.email.placeholder')}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                  >
                    {t('pages.contact.form.fields.phone.label')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                    placeholder={t('pages.contact.form.fields.phone.placeholder')}
                  />
                </div>
              </div>

              {/* Solution Type */}
              <div>
                <label className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                  {t('pages.contact.form.fields.solutionType.label')} *
                </label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {solutionTypeIndices.map((idx) => {
                    const type = t(`pages.contact.form.fields.solutionType.options.${idx}`)
                    return (
                      <label
                        key={idx}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-pencil-200 bg-white px-4 py-3 transition-all hover:border-cta/50 dark:border-pencil-700 dark:bg-pencil-900"
                      >
                        <input
                          type="checkbox"
                          name="solutionType"
                          value={type}
                          className="size-4 rounded border-pencil-300 bg-pencil-50 text-cta focus:ring-cta dark:border-pencil-600 dark:bg-pencil-800 dark:text-cta"
                        />
                        <span className="text-sm text-pencil-700 dark:text-pencil-200">
                          {type}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Target Scene */}
              <div>
                <label className="block text-sm font-medium text-pencil-700 dark:text-pencil-200">
                  {t('pages.contact.form.fields.targetScene.label')}
                </label>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {targetSceneIndices.map((idx) => {
                    const scene = t(`pages.contact.form.fields.targetScene.options.${idx}`)
                    return (
                      <label
                        key={idx}
                        className="flex cursor-pointer items-center gap-2 rounded-lg border border-pencil-200 bg-white px-4 py-3 transition-all hover:border-cta/50 dark:border-pencil-700 dark:bg-pencil-900"
                      >
                        <input
                          type="checkbox"
                          name="targetScene"
                          value={scene}
                          className="size-4 rounded border-pencil-300 bg-pencil-50 text-cta focus:ring-cta dark:border-pencil-600 dark:bg-pencil-800 dark:text-cta"
                        />
                        <span className="text-sm text-pencil-700 dark:text-pencil-200">
                          {scene}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                >
                  {t('pages.contact.form.fields.timeline.label')}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100"
                >
                  {timelineIndices.map((idx) => {
                    const option = {
                      value: t(`pages.contact.form.fields.timeline.options.${idx}.value`),
                      label: t(`pages.contact.form.fields.timeline.options.${idx}.label`),
                    }

                    return (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    )
                  })}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-pencil-700 dark:text-pencil-200"
                >
                  {t('pages.contact.form.fields.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-pencil-200 bg-white px-4 py-3 text-pencil-900 placeholder:text-pencil-400 focus:border-cta focus:outline-none focus:ring-1 focus:ring-cta dark:border-pencil-700 dark:bg-pencil-900 dark:text-pencil-100 dark:placeholder:text-pencil-500"
                  placeholder={t('pages.contact.form.fields.message.placeholder')}
                />
              </div>

              <button
                type="submit"
                disabled={submissionState === 'submitting'}
                className="w-full justify-center rounded-lg bg-pencil-950 px-8 py-4 text-white transition-colors hover:bg-cta disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submissionState === 'submitting'
                  ? '開啟中...'
                  : '透過本機電子郵件軟體送出'}
              </button>

              <p className="mt-2 text-center text-xs text-pencil-500">
                點擊後將自動喚醒您裝置上的電子郵件軟體並帶入表單內容。
              </p>

              {feedbackMessage ? (
                <p
                  className={
                    submissionState === 'error'
                      ? 'text-sm text-red-600 dark:text-red-400'
                      : 'text-sm text-emerald-600 dark:text-emerald-400'
                  }
                >
                  {feedbackMessage}
                </p>
              ) : null}
            </form>
          </div>

          {/* Info */}
          <div>
            <div className="rounded-2xl border border-pencil-200 bg-white p-8 dark:border-pencil-800 dark:bg-pencil-900/50">
              <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">
                {t('pages.contact.info.benefits.title')}
              </h3>
              <ul className="mt-6 space-y-4">
                {benefitIndices.map((index) => {
                  const item = t(`pages.contact.info.benefits.items.${index}`)
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-pencil-600 dark:text-pencil-300"
                    >
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cta/10 text-xs font-bold text-cta dark:text-cta/80">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-pencil-200 bg-white p-8 dark:border-pencil-800 dark:bg-pencil-900/50">
              <h3 className="text-xl font-bold text-pencil-900 dark:text-pencil-100">
                {t('pages.contact.info.contact.title')}
              </h3>
              <div className="mt-6 space-y-4">
                <div className="text-pencil-600 dark:text-pencil-300">
                  <span className="text-pencil-500">
                    聯絡人：
                  </span>
                  高宇弘 (Hank Kao) / 高經理
                </div>
                
                <div className="flex flex-col gap-2">
                  <ContactInteractiveItem
                    icon={Mail}
                    label="Email"
                    value="hank.kao@pencillink.com"
                    href="mailto:hank.kao@pencillink.com"
                  />
                  <ContactInteractiveItem
                    icon={Phone}
                    label="電話"
                    value="0952-291-195"
                    href="tel:0952-291-195"
                  />
                </div>
                
                <div className="pt-2 text-pencil-600 dark:text-pencil-300">
                  <span className="text-pencil-500">
                    {t('pages.contact.info.contact.location')}
                  </span>
                  {t('pages.contact.info.contact.locationValue')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
