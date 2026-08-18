import { useState } from 'react'
import { Clock, Video, X } from 'lucide-react'
import styles from './Formulario.module.css'

const garantias = [
    { icono: Clock, texto: 'Respuesta en menos de 24 horas' },
    { icono: Video, texto: 'Demo de 20 minutos por videollamada' },
    { icono: X, texto: 'Sin compromiso ni presión de venta' }
]

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

async function submitDemoForm(data) {
    if (!FORMSPREE_ENDPOINT) {
        console.warn(
            '[AndusChile Reservas] VITE_FORMSPREE_ENDPOINT no configurado. ' +
            'El formulario no se envía a un backend real. Datos capturados:',
            data
        )
        return {
            success: false,
            message: 'El formulario aún no está conectado. Escríbenos por WhatsApp mientras tanto.'
        }
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        let detalle = ''
        try {
            const payload = await response.json()
            detalle = payload?.error || ''
        } catch { /* respuesta sin JSON */ }
        throw new Error(
            detalle ||
            'No pudimos enviar tus datos. Intenta de nuevo en unos minutos.'
        )
    }

    return {
        success: true,
        message: 'Listo. José te escribe en menos de 24 horas para coordinar la demo.'
    }
}

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        whatsapp: '',
        alojamiento: '',
        habitaciones: '',
    })

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null,
    })

    const [errors, setErrors] = useState({})

    function validate() {
        const newErrors = {}

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Ingresa tu nombre completo'
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = 'Ingresa tu número de WhatsApp'
        }

        if (!formData.alojamiento.trim()) {
            newErrors.alojamiento = 'Ingresa el nombre de tu alojamiento'
        }

        if (!formData.habitaciones.toString().trim()) {
            newErrors.habitaciones = 'Ingresa el número de habitaciones o cabañas'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }))
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (!validate()) return

        setStatus({ loading: true, success: false, error: null })

        try {
            const result = await submitDemoForm(formData)
            if (result.success) {
                setStatus({ loading: false, success: true, error: null })
                setFormData({ nombre: '', whatsapp: '', alojamiento: '', habitaciones: '' })
            } else {
                setStatus({ loading: false, success: false, error: result.message })
            }
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message })
        }
    }

    return (
        <section id="formulario" className="section">
            <div className={`container container--narrow ${styles.wrapper}`}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Agenda tu demo gratuita de 20 minutos</h2>
                    <p className={styles.subtitle}>
                        Sin compromiso. Te mostramos el sistema funcionando en vivo.
                    </p>
                </header>

                <div className={styles.garantias}>
                    {garantias.map(garantia => {
                        const Icono = garantia.icono
                        return (
                            <div key={garantia.texto} className={styles.garantiaItem}>
                                <Icono size={20} strokeWidth={1.75} aria-hidden="true" />
                                <span>{garantia.texto}</span>
                            </div>
                        )
                    })}
                </div>

                {status.success ? (
                    <div className={styles.success} role="status">
                        <div className={styles.successIcon} aria-hidden="true">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                        <h3>Listo. José te escribe en menos de 24 horas para coordinar la demo.</h3>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form} noValidate>
                        <div className="form-group">
                            <label htmlFor="nombre" className="form-label">Nombre completo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre completo"
                                autoComplete="name"
                                required
                                className={`form-input ${errors.nombre ? styles.inputError : ''}`}
                                aria-invalid={!!errors.nombre}
                                aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                            />
                            {errors.nombre && (
                                <span id="nombre-error" className={styles.error}>{errors.nombre}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                placeholder="Ej: +56 9 1234 5678"
                                autoComplete="tel"
                                required
                                className={`form-input ${errors.whatsapp ? styles.inputError : ''}`}
                                aria-invalid={!!errors.whatsapp}
                                aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
                            />
                            {errors.whatsapp && (
                                <span id="whatsapp-error" className={styles.error}>{errors.whatsapp}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="alojamiento" className="form-label">Nombre del alojamiento</label>
                            <input
                                type="text"
                                id="alojamiento"
                                name="alojamiento"
                                value={formData.alojamiento}
                                onChange={handleChange}
                                placeholder="Ej: Hostal Loreto Belén"
                                autoComplete="organization"
                                required
                                className={`form-input ${errors.alojamiento ? styles.inputError : ''}`}
                                aria-invalid={!!errors.alojamiento}
                                aria-describedby={errors.alojamiento ? 'alojamiento-error' : undefined}
                            />
                            {errors.alojamiento && (
                                <span id="alojamiento-error" className={styles.error}>{errors.alojamiento}</span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="habitaciones" className="form-label">Número de habitaciones o cabañas</label>
                            <input
                                type="number"
                                id="habitaciones"
                                name="habitaciones"
                                value={formData.habitaciones}
                                onChange={handleChange}
                                placeholder="Ej: 8"
                                min="1"
                                required
                                className={`form-input ${errors.habitaciones ? styles.inputError : ''}`}
                                aria-invalid={!!errors.habitaciones}
                                aria-describedby={errors.habitaciones ? 'habitaciones-error' : undefined}
                            />
                            {errors.habitaciones && (
                                <span id="habitaciones-error" className={styles.error}>{errors.habitaciones}</span>
                            )}
                        </div>

                        {status.error && (
                            <div className={styles.errorMessage} role="alert">{status.error}</div>
                        )}

                        <button
                            type="submit"
                            disabled={status.loading}
                            className={`btn btn--primary btn--large ${styles.submitBtn}`}
                        >
                            {status.loading ? 'Enviando...' : 'Quiero mi demo gratuita'}
                        </button>

                        <p className={styles.disclaimer}>
                            José te escribe personalmente. No es un bot ni un equipo de ventas.
                        </p>
                    </form>
                )}
            </div>
        </section>
    )
}

export default Formulario
