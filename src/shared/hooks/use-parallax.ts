'use client'

import {
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  UseScrollOptions,
} from 'framer-motion'
import { RefObject } from 'react'

type ParallaxOutput = string | number

interface UseParallaxOptions {
  offset?: UseScrollOptions['offset']
  y?: [ParallaxOutput, ParallaxOutput]
  stiffness?: number
  damping?: number
}

/**
 * useParallax Hook
 * 
 * 創建視差滾動效果的 Hook。
 * 
 * @param ref - 目標元素的 ref (用於追蹤滾動位置)
 * @param options - 配置選項 (offset, y range, spring config)
 * @returns y - 用於 transform y 的 MotionValue
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  options: UseParallaxOptions = {},
): MotionValue<ParallaxOutput> {
  const {
    offset = ['start end', 'end start'],
    y = ['-10%', '10%'],
    stiffness = 50,
    damping = 20,
  } = options

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
    restDelta: 0.001,
  })

  return useTransform(smoothProgress, [0, 1], y)
}
