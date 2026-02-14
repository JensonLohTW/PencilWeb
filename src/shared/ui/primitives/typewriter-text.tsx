'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { clsx } from 'clsx/lite'

interface CycleWord {
    text: string
    className?: string
}

interface TypewriterTextProps {
    text: string
    className?: string
    cursorClassName?: string
    speed?: number
    startDelay?: number
    prefix?: string
    highlightText?: string
    highlightClassName?: string
    cycleWords?: CycleWord[]
    cycleDelay?: number
    backspaceSpeed?: number
}

export function TypewriterText({
    text,
    className,
    cursorClassName,
    speed = 0.05,
    startDelay = 0,
    prefix = '',
    highlightText,
    highlightClassName,
    cycleWords = [],
    cycleDelay = 2,
    backspaceSpeed = 0.05,
}: TypewriterTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
    const [count, setCount] = useState(0) // Number of characters of `text` shown
    const [started, setStarted] = useState(false)
    const [cycleIndex, setCycleIndex] = useState(-1) // -1 means initial text, 0+ means cycleWords index
    const [isBackspacing, setIsBackspacing] = useState(false)

    // Identify the "base" text length if highlighting or cycling
    // For cycling, we assume `text` ends with the word to be cycled or we strictly append?
    // User request: "delete this pencil (the one in 'text') and then re-type... using 5 different fonts"
    // So we need to backspace the last word of `text`.
    // Let's assume `highlightText` is the word to backspace if `cycleWords` is present.
    const targetWord = highlightText || 'Pencil'
    const baseText = text.endsWith(targetWord)
        ? text.slice(0, -targetWord.length)
        : text

    useEffect(() => {
        if (isInView && !started) {
            const timer = setTimeout(() => {
                setStarted(true)
            }, startDelay * 1000)
            return () => clearTimeout(timer)
        }
    }, [isInView, startDelay, started])

    useEffect(() => {
        if (!started) return

        let timeout: NodeJS.Timeout

        if (isBackspacing) {
            // Backspacing Logic
            const interval = setInterval(() => {
                setCount((prev) => {
                    const targetLen = baseText.length
                    if (prev > targetLen) {
                        return prev - 1
                    }
                    clearInterval(interval)
                    setIsBackspacing(false)
                    // Move to next cycle word
                    setCycleIndex((prevIndex) => {
                        const next = prevIndex + 1
                        return next >= cycleWords.length ? 0 : next
                    })
                    return prev
                })
            }, backspaceSpeed * 1000)
            return () => clearInterval(interval)
        } else if (cycleIndex >= 0) {
            // Typing Cycle Word Logic
            const wordObj = cycleWords[cycleIndex]
            const fullTargetText = baseText + wordObj.text

            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev < fullTargetText.length) {
                        return prev + 1
                    }
                    clearInterval(interval)
                    // Wait then backspace
                    timeout = setTimeout(() => {
                        setIsBackspacing(true)
                    }, cycleDelay * 1000)
                    return prev
                })
            }, speed * 1000)
            return () => {
                clearInterval(interval)
                clearTimeout(timeout)
            }
        } else {
            // Initial Typing Logic
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev < text.length) {
                        return prev + 1
                    }
                    clearInterval(interval)

                    if (cycleWords.length > 0) {
                        timeout = setTimeout(() => {
                            setIsBackspacing(true)
                        }, cycleDelay * 1000)
                    }
                    return prev
                })
            }, speed * 1000)
            return () => {
                clearInterval(interval)
                clearTimeout(timeout)
            }
        }
    }, [started, isBackspacing, cycleIndex, text, baseText, cycleWords, cycleDelay, backspaceSpeed, speed])

    const renderText = () => {
        // Determine what text buffer we are currently simulating
        let currentFullString = text
        let currentClass = highlightClassName

        if (cycleIndex >= 0) {
            currentFullString = baseText + cycleWords[cycleIndex].text
            currentClass = cycleWords[cycleIndex].className || highlightClassName
        }

        const visibleText = currentFullString.slice(0, count)

        // Split base and cycle/highlight part
        if (visibleText.length > baseText.length) {
            const basePart = visibleText.slice(0, baseText.length)
            const highlightPart = visibleText.slice(baseText.length)
            return (
                <>
                    {basePart}
                    <span className={currentClass}>{highlightPart}</span>
                </>
            )
        }

        return visibleText
    }

    return (
        <span ref={ref} className={clsx('inline-block', className)}>
            <span aria-hidden="true">
                {prefix}
                {renderText()}
                <motion.span
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0,
                        ease: 'linear',
                        times: [0, 0.1, 0.5, 0.6], // Fast blink on, longer hold, fast off, longer hold
                    }}
                    className={clsx(
                        'inline-block align-bottom ml-[2px] w-[0.5em] h-[1.1em] bg-current',
                        cursorClassName
                    )}
                />
            </span>
            <span className="sr-only">
                {prefix} {text}
            </span>
        </span>
    )
}
