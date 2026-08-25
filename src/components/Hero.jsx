import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <motion.div
                className={styles.textCol}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <span className={styles.eyebrow}>
                    Sistema de gestión para alojamientos turísticos
                </span>

                <motion.h1 variants={fadeInUp} className={styles.headline}>
                    ¿Sigues gestionando las reservas de tu alojamiento
                    con WhatsApp y planilla?
                </motion.h1>

                <motion.p variants={fadeInUp} className={styles.subheadline}>
                    AndusChile te da un sistema propio en 5 días.
                    Sin doble reserva. Sin depender de que estés tú presente.
                </motion.p>

                <motion.div variants={fadeInUp} className={styles.actions}>
                    <a href="#formulario" className="btn btn--primary">
                        Quiero una demo gratuita
                    </a>
                    <span className={styles.microcopy}>
                        <CheckCircle size={18} strokeWidth={2} className={styles.microcopyIcon} aria-hidden="true" />
                        Implementación en 5 días · Sin contrato mínimo
                    </span>
                </motion.div>
            </motion.div>

            <div className={styles.imageCol} />
        </section>
    )
}

export default Hero
