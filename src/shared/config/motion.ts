export type MotionPreference = 'system' | 'on' | 'off'

export interface MotionSettings {
  enabled: boolean
  reduced: boolean
  particles: boolean
  cursor: boolean
  transitions: boolean
}

export const MOTION_DEFAULT_PREFERENCE: MotionPreference = 'system'

export const MOTION_TRANSITION_DURATION_MS = 220

export const PARTICLE_COUNT = {
  desktop: 28,
  tablet: 18,
  mobile: 10,
} as const
