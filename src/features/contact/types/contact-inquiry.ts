export interface ContactInquiryPayload {
  name: string
  company: string
  email: string
  phone?: string
  solutionTypes: string[]
  targetScenes: string[]
  timeline: string
  message: string
}

export type ContactSubmissionState = 'idle' | 'submitting' | 'success' | 'error'
