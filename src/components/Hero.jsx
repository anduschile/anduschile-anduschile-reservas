import { CheckCircle } from 'lucide-react'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.textCol}>
                <span className={styles.eyebrow}>
                    Sistema de gestión para alojamientos turísticos
                </span>

                <h1 className={styles.headline}>
                    ¿Sigues gestionando las reservas de tu alojamiento
                    con WhatsApp y planilla?
                </h1>

                <p className={styles.subheadline}>
                    AndusChile te da un sistema propio en 5 días.
                    Sin doble reserva. Sin depender de que estés tú presente.
                </p>

                <div className={styles.actions}>
                    <a href="#formulario" className="btn btn--primary">
                        Quiero una demo gratuita
                    </a>
                    <span className={styles.microcopy}>
                        <CheckCircle size={18} strokeWidth={2} className={styles.microcopyIcon} aria-hidden="true" />
                        Implementación en 5 días · Sin contrato mínimo
                    </span>
                </div>
            </div>

            <div className={styles.imageCol} />
        </section>
    )
}

export default Hero
