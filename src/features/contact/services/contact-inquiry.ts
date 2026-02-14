import { runtimeConfig } from '@/shared/config/runtime'
import type { ContactInquiryPayload } from '../types/contact-inquiry'

export type ContactSubmissionResult =
  | { mode: 'api' }
  | { mode: 'mailto'; href: string }

function buildContactMailtoHref(payload: ContactInquiryPayload): string {
  const subject = `[Pencil Inquiry] ${payload.company} / ${payload.name}`
  const lines = [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || '-'}`,
    `Solution Types: ${payload.solutionTypes.join(', ') || '-'}`,
    `Target Scenes: ${payload.targetScenes.join(', ') || '-'}`,
    `Timeline: ${payload.timeline || '-'}`,
    '',
    'Message:',
    payload.message || '-',
  ]

  const body = lines.join('\n')
  return `mailto:contact@pencil.space?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export async function submitContactInquiry(
  payload: ContactInquiryPayload,
): Promise<ContactSubmissionResult> {
  if (!runtimeConfig.contactApiUrl) {
    return { mode: 'mailto', href: buildContactMailtoHref(payload) }
  }

  const response = await fetch(runtimeConfig.contactApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Contact inquiry submission failed')
  }

  return { mode: 'api' }
}
