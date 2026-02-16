export const technologyViewport = {
  once: true,
  margin: '-60px',
} as const

const technologyEase = [0.22, 1, 0.36, 1] as const

interface RevealOptions {
  delay?: number
  y?: number
  duration?: number
}

export function technologyReveal(reduceMotion: boolean, options?: RevealOptions) {
  if (reduceMotion) {
    return {}
  }

  const { delay = 0, y = 18, duration = 0.45 } = options ?? {}

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: technologyViewport,
    transition: { duration, delay, ease: technologyEase },
  }
}
