import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../animations'
import styles from './Referencia.module.css'

const casos = [
    {
        nombre: 'Hostal Loreto Belén',
        ubicacion: 'Puerto Natales, Magallanes',
        descripcion: 'Sistema de gestión de reservas operativo. Contacto de referencia disponible.',
        link: null
    },
    {
        nombre: 'Arte Brisa Patagonia',
        ubicacion: 'Puerto Natales, Magallanes',
        descripcion: 'Sitio web con motor de reservas directas integrado.',
        link: {
            href: 'https://artebrisapatagonia.com',
            label: 'Ver sistema en vivo → artebrisapatagonia.com'
        }
    }
]

function Referencia() {
    return (
        <section id="referencia" className="section section--alt">
            <div className="container">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                >
                    <h2 className={styles.title}>Ya funciona en alojamientos como el tuyo</h2>

                    <div className={styles.grid}>
                        {casos.map(caso => (
                            <article key={caso.nombre} className={styles.card}>
                                <div className={styles.stripe} aria-hidden="true" />
                                <div className={styles.cardBody}>
                                    <span className={styles.ubicacion}>
                                        <MapPin size={16} strokeWidth={2} aria-hidden="true" />
                                        {caso.ubicacion}
                                    </span>
                                    <h3 className={styles.cardTitle}>{caso.nombre}</h3>
                                    <p className={styles.cardDescription}>{caso.descripcion}</p>
                                    {caso.link && (
                                        <a
                                            href={caso.link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.demoLink}
                                        >
                                            {caso.link.label}
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className={styles.cierreBlock}>
                <div className="container">
                    <p className={styles.cierre}>
                        Trabajamos en Magallanes y la Araucanía. Zonas de turismo exigente,
                        donde el sistema tiene que funcionar aunque no estés.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Referencia
