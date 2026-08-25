import { MessageCircle } from 'lucide-react'
import styles from './WhatsAppButton.module.css'

const WHATSAPP_NUMBER = '56974283404'
const WHATSAPP_MESSAGE = 'Hola, vi la página de AndusChile y quiero saber más'

function WhatsAppButton() {
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label="Escribir por WhatsApp"
        >
            <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
        </a>
    )
}

export default WhatsAppButton
