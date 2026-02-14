'use client'

import { useScroll, useTransform, useSpring, MotionValue, UseScrollOptions } from 'framer-motion'
import { RefObject } from 'react'

interface UseParallaxOptions {
    offset?: UseScrollOptions['offset']
    y?: [string, string] | [number, number] // Output range for Y translation (e.g. ["-20%", "20%"])
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
    ref: RefObject<HTMLElement | null>, // Allow null in RefObject for stricter typing compatibility
    options: UseParallaxOptions = {}
): MotionValue<any> {
    const {
        offset = ['start end', 'end start'],
        y = ['-10%', '10%'],
        stiffness = 50,
        damping = 20
    } = options

    // 1. 取得滾動進度
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset
    })

    // 2. 添加彈簧物理效果使動畫更平滑
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness,
        damping,
        restDelta: 0.001
    }) as MotionValue<number>

    // 3. 轉換為位移值
    const value = useTransform(smoothProgress, [0, 1], y as any) as unknown as MotionValue<any>

    return value
}
