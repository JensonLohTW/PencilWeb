"use client"

import { useEffect, useState, useRef } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"

interface HackerTextProps {
    text: string
    className?: string
    trigger?: boolean
    speed?: number
}

export function HackerText({
    text,
    className,
    trigger = false,
    speed = 30
}: HackerTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const iterationsRef = useRef(0)

    useEffect(() => {
        if (!trigger) {
            setDisplayText(text)
            iterationsRef.current = 0
            if (intervalRef.current) clearInterval(intervalRef.current)
            return
        }

        iterationsRef.current = 0

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterationsRef.current) {
                            return text[index]
                        }
                        // Preserve spaces
                        if (char === " ") return " "
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    })
                    .join("")
            )

            if (iterationsRef.current >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current)
            }

            iterationsRef.current += 1 / 3 // 3 frames per character reveal
        }, speed)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [trigger, text, speed])

    return (
        <span className={className}>
            {displayText}
        </span>
    )
}
