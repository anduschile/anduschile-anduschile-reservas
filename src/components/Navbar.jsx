import styles from './Navbar.module.css'

const links = [
    { href: '#dolores', label: 'El problema' },
    { href: '#incluye', label: 'El sistema' },
    { href: '#precio', label: 'Valores' },
    { href: '#referencia', label: 'Casos reales' },
]

function Navbar() {
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
            </div>
        </nav>
    )
}

export default Navbar
