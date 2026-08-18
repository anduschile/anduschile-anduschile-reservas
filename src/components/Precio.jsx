import { Check, CheckCircle, Shield, Clock, Headphones } from 'lucide-react'
import styles from './Precio.module.css'

const planes = [
    {
        nombre: 'Plan Gestión',
        descripcion: 'Sin sitio web',
        implementacion: 'Implementación desde $490.000',
        mensualidad: '$49.000/mes',
        destacado: false
    },
    {
        nombre: 'Plan Gestión + Sitio Web',
        descripcion: 'Con sitio web y motor de reservas',
        implementacion: 'Implementación desde $790.000',
        mensualidad: '$59.000/mes',
        destacado: true
    }
]

const confianza = [
    { icono: Shield, texto: 'Sin contrato mínimo' },
    { icono: Clock, texto: 'Implementación en 5 días' },
    { icono: Headphones, texto: 'Soporte 7 días' }
]

function Precio() {
    return (
        <section id="precio" className={`section section--dark ${styles.precio}`}>
            <div className="container">
                <h2 className={styles.title}>Inversión</h2>

                <div className={styles.grid}>
                    {planes.map(plan => (
                        <article
                            key={plan.nombre}
                            className={`${styles.plan} ${plan.destacado ? styles.planDestacado : ''}`}
                        >
                            {plan.destacado && (
                                <span className={styles.badge}>
                                    <CheckCircle size={14} strokeWidth={2.5} className={styles.badgeIcon} aria-hidden="true" />
                                    Recomendado
                                </span>
                            )}
                            <h3 className={styles.planNombre}>{plan.nombre}</h3>
                            <p className={styles.planDescripcion}>{plan.descripcion}</p>

                            <div className={styles.planPrecios}>
                                <span className={styles.planImplementacion}>
                                    <Check size={18} strokeWidth={2.5} aria-hidden="true" />
                                    {plan.implementacion}
                                </span>
                                <span className={styles.planMensualidad}>{plan.mensualidad}</span>
                                <span className={styles.planSincroniza}>
                                    Sincroniza con Booking · Airbnb · TripAdvisor
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <p className={styles.nota}>
                    Precio según número de habitaciones o cabañas.
                    Pago en 2 o 3 cuotas.
                    Mensualidad sin contrato mínimo.
                </p>

                <div className={styles.confianzaRow}>
                    {confianza.map(item => {
                        const Icono = item.icono
                        return (
                            <div key={item.texto} className={styles.confianzaItem}>
                                <Icono size={20} strokeWidth={1.75} aria-hidden="true" />
                                <span>{item.texto}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={styles.ctaWrapper}>
                    <a href="#formulario" className="btn btn--primary btn--large">
                        Quiero saber cuánto sale para mi alojamiento
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Precio
