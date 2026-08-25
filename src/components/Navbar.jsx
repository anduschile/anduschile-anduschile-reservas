import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
    { href: '#dolores', label: 'El problema' },
    { href: '#incluye', label: 'El sistema' },
    { href: '#precio', label: 'Valores' },
    { href: '#referencia', label: 'Casos reales' },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    function closeMenu() {
        setOpen(false)
    }

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.inner}`}>
                <a href="#top" className={styles.logo}>AndusChile</a>

                <div className={styles.links}>
                    {links.map(link => (
                        <a key={link.href} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                    <a href="#formulario" className={`btn btn--primary ${styles.cta}`}>
                        Demo gratuita
                    </a>
                </div>

                <button
                    type="button"
                    className={styles.menuToggle}
                    onClick={() => setOpen(prev => !prev)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
            >
                {links.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#formulario"
                    className="btn btn--primary"
                    onClick={closeMenu}
                >
                    Demo gratuita
                </a>
            </div>
        </nav>
    )
}

export default Navbar
