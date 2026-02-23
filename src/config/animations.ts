export const transitions = {
    duration: {
        fast: 0.3,
        normal: 0.5,
        slow: 0.8,
    },
    ease: {
        outBack: [0.34, 1.56, 0.64, 1],
        smooth: [0.22, 1, 0.36, 1],
    },
} as const

export const viewportConfig = {
    once: true,
    margin: '-100px',
    amount: 0.2, // At least 20% of the element is visible
} as const

export const variants = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    },
    slideInLeft: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    },
    slideInRight: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
    },
    scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    },
} as const
