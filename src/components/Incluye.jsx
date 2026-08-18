import {
    Calendar,
    BookOpen,
    RefreshCw,
    Building2,
    Wallet,
    Users,
    Smartphone,
    GraduationCap,
    Headphones
} from 'lucide-react'
import styles from './Incluye.module.css'

const modulos = [
    { icono: Calendar, texto: 'Calendario de habitaciones' },
    { icono: BookOpen, texto: 'Libro del día' },
    { icono: RefreshCw, texto: 'Bloqueo cruzado automático (Booking, Airbnb, TripAdvisor)' },
    { icono: Building2, texto: 'Control de reservas del Estado' },
    { icono: Wallet, texto: 'Caja chica y gastos del día' },
    { icono: Users, texto: 'Registro básico de personal' },
    { icono: Smartphone, texto: 'Acceso desde el celular' },
    { icono: GraduationCap, texto: 'Capacitación incluida' },
    { icono: Headphones, texto: 'Soporte 7 días a la semana' }
]

function Incluye() {
    return (
        <section id="incluye" className="section">
            <div className="container">
                <h2 className={styles.title}>Qué incluye el sistema</h2>

                <div className={styles.grid}>
                    {modulos.map(modulo => {
                        const Icono = modulo.icono
                        return (
                            <div key={modulo.texto} className={styles.modulo}>
                                <Icono
                                    size={28}
                                    strokeWidth={1.75}
                                    className={styles.icono}
                                    aria-hidden="true"
                                />
                                <span className={styles.texto}>{modulo.texto}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.banner}>
                <div className="container">
                    <p className={styles.bannerText}>
                        Implementación en 5 días hábiles. Sin contrato de permanencia.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Incluye
