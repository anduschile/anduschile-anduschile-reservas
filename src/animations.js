export const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
}

export const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
}

export const viewportOnce = { once: true, amount: 0.2 }
