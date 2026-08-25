import { Mail, MessageCircle } from 'lucide-react'
import styles from './Footer.module.css'

const WHATSAPP_NUMBER = '56974283404'
const CONTACT_EMAIL = 'joseurra@anduschile.com'
const FACEBOOK_URL = 'https://www.facebook.com/ANDUS765'
const INSTAGRAM_URL = 'https://www.instagram.com/andus765/'

function FacebookIcon({ size = 18, strokeWidth = 1.75 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function InstagramIcon({ size = 18, strokeWidth = 1.75 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
    )
}

function Footer() {
    const año = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <p className={styles.copy}>AndusChile © {año}</p>

                <div className={styles.contacts}>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactLink}>
                        <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                        {CONTACT_EMAIL}
                    </a>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                    >
                        <MessageCircle size={18} strokeWidth={1.75} aria-hidden="true" />
                        +56 9 7428 3404
                    </a>
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="Facebook de AndusChile"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="Instagram de AndusChile"
                    >
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
