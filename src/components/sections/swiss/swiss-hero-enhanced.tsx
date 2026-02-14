'use client'

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useEffect, useMemo, useState, useRef } from 'react'
import { TextReveal } from '@/components/ui/text-reveal'
import { PixelCluster } from '@/components/ui/pixel-decorations'
import { WavesBackground } from '@/components/ui/waves-background'

interface CycleWord {
  text: string
  className?: string
}

type HeroVariant = 'solutions' | 'projects' | 'technology' | 'about'

interface SwissHeroEnhancedProps {
  eyebrow?: string
  headline: string
  headlineHighlight?: string
  headlineSuffix?: string
  cycleWords?: CycleWord[]
  subheadline: string
  ctaText?: string
  ctaHref?: string
  centered?: boolean
  variant?: HeroVariant
}

function splitHeadline(headline: string, highlight?: string, suffix = '') {
  if (!highlight) {
    return { prefix: headline, suffix }
  }

  const index = headline.indexOf(highlight)
  if (index === -1) {
    return { prefix: headline, suffix }
  }

  return {
    prefix: headline.slice(0, index),
    suffix: `${headline.slice(index + highlight.length)}${suffix}`,
  }
}

function buildWords(highlight?: string, cycleWords: CycleWord[] = []) {
  const normalized = (value: string) => value.trim()
  const words: CycleWord[] = []
  const seen = new Set<string>()

  const tryPush = (word: CycleWord) => {
    const text = normalized(word.text)
    if (!text || seen.has(text)) {
      return
    }
    seen.add(text)
    words.push({ text, className: word.className })
  }

  if (highlight) {
    tryPush({ text: highlight, className: 'text-cta' })
  }

  cycleWords.forEach(tryPush)

  return words
}

function getWordMotion(variant: HeroVariant, reduceMotion: boolean) {
  if (reduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    }
  }

  if (variant === 'projects') {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    }
  }

  if (variant === 'technology') {
    return {
      initial: { opacity: 0, filter: 'blur(6px)' },
      animate: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(4px)' },
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as const },
    }
  }

  if (variant === 'about') {
    return {
      initial: { opacity: 0, y: 8, letterSpacing: '0.08em' },
      animate: { opacity: 1, y: 0, letterSpacing: '0em' },
      exit: { opacity: 0, y: -8, letterSpacing: '0.06em' },
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    }
  }

  // Typewriter/Wipe effect for Solutions
  return {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: 'auto' },
    exit: { opacity: 0, width: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }, // Slower for smoother "typing" feel
  }
}

function getHeroMotion(variant: HeroVariant, reduceMotion: boolean) {
  if (reduceMotion) {
    return {
      eyebrow: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } },
      headline: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } },
      subheadline: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } },
      cta: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2 } },
    }
  }

  if (variant === 'projects') {
    return {
      eyebrow: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
      },
      headline: {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const },
      },
      subheadline: {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.25, ease: [0.25, 1, 0.5, 1] as const },
      },
      cta: {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.35, ease: [0.25, 1, 0.5, 1] as const },
      },
    }
  }

  if (variant === 'technology') {
    return {
      eyebrow: {
        initial: { opacity: 0, y: 12, filter: 'blur(6px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] as const },
      },
      headline: {
        initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const },
      },
      subheadline: {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: 0.24, ease: [0.33, 1, 0.68, 1] as const },
      },
      cta: {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: 0.32, ease: [0.33, 1, 0.68, 1] as const },
      },
    }
  }

  if (variant === 'about') {
    return {
      eyebrow: {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
      },
      headline: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const },
      },
      subheadline: {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] as const },
      },
      cta: {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: 0.32, ease: [0.22, 1, 0.36, 1] as const },
      },
    }
  }

  // Default / Solutions
  return {
    eyebrow: {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] as const },
    },
    headline: {
      initial: { opacity: 0, y: 34 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.08, ease: [0.2, 1, 0.3, 1] as const },
    },
    subheadline: {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, delay: 0.24, ease: [0.33, 1, 0.68, 1] as const },
    },
    cta: {
      initial: { opacity: 0, y: 14 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, delay: 0.32, ease: [0.33, 1, 0.68, 1] as const },
    },
  }
}

function HeroCyclingWord({
  words,
  variant,
}: {
  words: CycleWord[]
  variant: HeroVariant
}) {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [scrambledText, setScrambledText] = useState('')

  useEffect(() => {
    if (words.length <= 1) {
      return
    }

    const delayByVariant: Record<HeroVariant, number> = {
      solutions: 3000,
      projects: 2300,
      technology: 2400,
      about: 2800,
    }

    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, delayByVariant[variant])

    return () => window.clearInterval(timer)
  }, [words.length, variant])

  const activeWord = words[wordIndex] ?? words[0]

  useEffect(() => {
    if (!activeWord) {
      return
    }

    if (variant !== 'technology' || !!reduceMotion) {
      return
    }

    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let frame = 0
    const totalFrames = 14
    let rafId = 0

    const updateScramble = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const revealCount = Math.floor(activeWord.text.length * progress)

      const next = activeWord.text
        .split('')
        .map((char, index) => {
          if (char === ' ') {
            return ' '
          }
          if (index < revealCount) {
            return activeWord.text[index]
          }
          return charset[Math.floor(Math.random() * charset.length)]
        })
        .join('')

      setScrambledText(next)

      if (progress >= 1) {
        window.clearInterval(timer)
      }
    }

    rafId = window.requestAnimationFrame(() => {
      setScrambledText(activeWord.text)
    })

    const timer = window.setInterval(updateScramble, 32)

    return () => {
      window.clearInterval(timer)
      window.cancelAnimationFrame(rafId)
    }
  }, [activeWord, variant, reduceMotion])

  if (!activeWord) {
    return null
  }

  const motionConfig = getWordMotion(variant, !!reduceMotion)

  return (
    <span className="relative inline-grid align-baseline">
      {/* Invisible placeholder to reserve width matching longest word to prevent jumps, or just current word if we want dynamic width */}
      {/* For dynamic width (typewriter feel), we use AnimatePresence mode="wait" and let the container resize naturally or just animate the width of the entering word */}
      {/* Here we put all words to reserve space if we want fixed width, but for typewriter we want dynamic width usually.
          Let's stick to dynamic width for Solutions to feel like typing. */}
      {variant !== 'solutions' && words.map((word) => (
        <span
          key={`reserve-${word.text}-${word.className ?? 'default'}`}
          aria-hidden="true"
          className={clsx('invisible col-start-1 row-start-1 whitespace-pre text-cta', word.className)}
        >
          {word.text}
        </span>
      ))}

      {variant === 'solutions' && (
        <span className="invisible col-start-1 row-start-1 whitespace-pre">
          {activeWord.text}
        </span>
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${activeWord.text}-${wordIndex}`}
          initial={motionConfig.initial}
          animate={motionConfig.animate}
          exit={motionConfig.exit}
          transition={motionConfig.transition}
          className={clsx(
            'col-start-1 row-start-1 inline-flex items-baseline whitespace-pre overflow-hidden align-bottom text-cta',
            activeWord.className
          )}
        >
          {variant === 'technology' && !reduceMotion ? scrambledText || activeWord.text : activeWord.text}
        </motion.span>
      </AnimatePresence>

      {variant === 'solutions' && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="col-start-2 row-start-1 ml-0.5 inline-block h-[0.88em] w-[2px] self-end bg-cta/80 align-baseline"
          style={{ transform: 'translateY(10%)' }}
        />
      )}
    </span>
  )
}

export function SwissHeroEnhanced({
  eyebrow,
  headline,
  headlineHighlight,
  headlineSuffix = '',
  cycleWords = [],
  subheadline,
  ctaText,
  ctaHref = '#',
  centered = false,
  variant = 'solutions',
}: SwissHeroEnhancedProps) {
  const reduceMotion = useReducedMotion()
  const words = useMemo(() => buildWords(headlineHighlight, cycleWords), [headlineHighlight, cycleWords])
  const hasInlineHighlight = !!headlineHighlight && headline.includes(headlineHighlight)
  const shouldAnimateWord = hasInlineHighlight && words.length > 0
  const segments = splitHeadline(headline, shouldAnimateWord ? headlineHighlight : undefined, headlineSuffix)
  const motionConfig = getHeroMotion(variant, !!reduceMotion)
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Slower parallax for smoother feel
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className={clsx(
        'relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-12 pt-32 lg:px-16',
        centered ? 'items-center text-center' : 'items-start',
      )}
    >
      <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {variant === 'solutions' && (
          <>
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scaleX: 0.8, x: 20 }}
              animate={{ opacity: 0.6, scaleX: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute right-[8%] top-24 h-px w-64 bg-gradient-to-l from-pencil-300 to-transparent dark:from-white/20"
            />
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scaleY: 0.8, y: 20 }}
              animate={{ opacity: 0.6, scaleY: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute left-[7%] top-44 h-32 w-px bg-gradient-to-b from-pencil-300 to-transparent dark:from-white/20"
            />

            {/* Additional Geometric Element - Reduced Opacity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.03, scale: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full border border-pencil-950 dark:border-white"
            />
            {/* Pixel Decoration */}
            <div className="absolute top-20 right-[15%] opacity-30 mix-blend-overlay dark:opacity-40">
              <PixelCluster count={40} areaWidth={400} areaHeight={300} className="text-cta" />
            </div>

            {/* Waves Background - More Subtle */}
            <WavesBackground className="absolute inset-0 z-[-5] opacity-20" />
          </>
        )}

        {variant === 'projects' && (
          <>
            <motion.div
              animate={{ x: [0, 20, 0], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-10 top-20 h-48 w-48 rounded-full bg-neon-100/30 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -16, 0], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-16 left-8 h-40 w-40 rounded-full bg-pencil-200/40 blur-3xl"
            />
          </>
        )}

        {variant === 'technology' && (
          <>
            <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
            <motion.div
              animate={{ opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[10%] top-16 h-56 w-56 rounded-full bg-cyan-200/20 blur-3xl"
            />
          </>
        )}

        {variant === 'about' && (
          <>
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-100/20 blur-3xl"
            />
            <div className="absolute inset-x-8 bottom-20 h-px bg-pencil-300/50" />
          </>
        )}
      </motion.div>

      <div className={clsx('flex max-w-5xl flex-col', centered && 'items-center')}>
        {eyebrow && (
          <motion.p
            initial={motionConfig.eyebrow.initial}
            animate={motionConfig.eyebrow.animate}
            transition={motionConfig.eyebrow.transition}
            className={clsx(
              'swiss-mono mb-8 w-fit border border-pencil-200 bg-white/60 px-4 py-1.5 text-xs text-pencil-600 backdrop-blur-sm dark:border-white/10 dark:bg-black/30 dark:text-pencil-300',
              centered && 'mx-auto',
            )}
          >
            {eyebrow}
          </motion.p>
        )}

        <div className={clsx('swiss-heading mb-8 min-h-[2.7em] text-pencil-950 tracking-tight dark:text-white', centered && 'text-center')}>
          {segments.prefix && <TextReveal text={segments.prefix} />}
          {shouldAnimateWord && <HeroCyclingWord words={words} variant={variant} />}
          {segments.suffix && <TextReveal text={segments.suffix} delay={segments.prefix ? 0.05 * segments.prefix.length : 0} />}
        </div>

        <motion.p
          initial={motionConfig.subheadline.initial}
          animate={motionConfig.subheadline.animate}
          transition={motionConfig.subheadline.transition}
          className={clsx('max-w-xl text-lg leading-relaxed text-pencil-700 dark:text-pencil-300 sm:text-xl', centered && 'mx-auto')}
        >
          {subheadline}
        </motion.p>

        {ctaText && (
          <motion.div
            initial={motionConfig.cta.initial}
            animate={motionConfig.cta.animate}
            transition={motionConfig.cta.transition}
            className="mt-12"
          >
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-pencil-950 px-8 py-4 text-white transition-all hover:bg-cta dark:bg-white dark:text-pencil-950 dark:hover:bg-cta dark:hover:text-white"
            >
              <span className="relative z-10 text-sm font-medium uppercase tracking-widest">{ctaText}</span>
              <motion.span
                className="relative z-10 block"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                →
              </motion.span>
              <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className={clsx('absolute bottom-12 flex items-center gap-4', centered ? 'left-1/2 -translate-x-1/2' : 'left-6 lg:left-16')}
      >
        <div className="h-px w-12 bg-pencil-300 dark:bg-white/30" />
        <span className="swiss-mono text-[10px] text-pencil-500 tracking-widest dark:text-pencil-400">SCROLL</span>
      </motion.div>
    </section>
  )
}

