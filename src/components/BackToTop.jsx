import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import styles from './BackToTop.module.css'

const SCROLL_THRESHOLD = 600

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY > SCROLL_THRESHOLD)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`${styles.button} ${visible ? styles.visible : ''}`}
            aria-label="Volver arriba"
            tabIndex={visible ? 0 : -1}
        >
            <ArrowUp size={22} strokeWidth={2} aria-hidden="true" />
        </button>
    )
}

export default BackToTop
