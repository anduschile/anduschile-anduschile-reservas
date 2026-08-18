import { AlertTriangle, Clock, DollarSign } from 'lucide-react'
import styles from './Dolores.module.css'

const dolores = [
    {
        icono: AlertTriangle,
        bg: '#fff3cd',
        color: '#856404',
        titulo: 'Doble reserva',
        descripcion: 'Aceptaste por WhatsApp y Booking al mismo tiempo. Ya le pasó a más de uno.'
    },
    {
        icono: Clock,
        bg: '#cce5ff',
        color: '#004085',
        titulo: 'Todo pasa por ti',
        descripcion: 'Si no estás, el sistema falla. Nadie más sabe cómo funciona.'
    },
    {
        icono: DollarSign,
        bg: '#f8d7da',
        color: '#721c24',
        titulo: 'Pagando comisión innecesaria',
        descripcion: 'Booking y Airbnb se llevan entre 15% y 18% de cada reserva.'
    }
]

function Dolores() {
    return (
        <section id="dolores" className="section section--alt">
            <div className="container">
                <h2 className={styles.title}>¿Te pasa alguna de estas cosas?</h2>

                <div className={styles.grid}>
                    {dolores.map(dolor => {
                        const Icono = dolor.icono
                        return (
                            <article
                                key={dolor.titulo}
                                className={styles.card}
                                style={{ borderLeftColor: dolor.color }}
                            >
                                <span
                                    className={styles.iconWrap}
                                    style={{ backgroundColor: dolor.bg, color: dolor.color }}
                                >
                                    <Icono size={48} strokeWidth={1.5} aria-hidden="true" />
                                </span>
                                <h3 className={styles.cardTitle}>{dolor.titulo}</h3>
                                <p className={styles.cardDescription}>{dolor.descripcion}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Dolores
