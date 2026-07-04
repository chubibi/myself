import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import styles from './css/navBar.module.css'

const NAV_LINKS = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'experience', label: 'Experiencia' },
    { to: 'sobre-mi', label: 'Sobre mí' },
    { to: 'formation', label: 'Educación' },
    { to: 'contact', label: 'Contacto' },
]

export function NavBar() {
    const [active, setActive] = useState('inicio')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* Cerrar el menú al hacer resize a desktop */
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <>
            {/* ── DESKTOP PILL ── */}
            <nav className={`${styles.desktopNav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.pill}>
                    {NAV_LINKS.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            smooth
                            duration={600}
                            offset={-80}
                            spy
                            onSetActive={() => setActive(to)}
                        >
                            <span className={`${styles.pillLink} ${active === to ? styles.pillLinkActive : ''}`}>
                                {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* ── MOBILE HEADER ── */}
            <nav className={`${styles.mobileNav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.mobileHeader}>
                    <span className={styles.mobileLogo}>JC.</span>

                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
                    </button>
                </div>

                {menuOpen && (
                    <div className={styles.mobileMenu}>
                        {NAV_LINKS.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                smooth
                                duration={600}
                                offset={-0}
                                spy
                                onSetActive={() => setActive(to)}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className={`${styles.mobileLink} ${active === to ? styles.mobileLinkActive : ''}`}>
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </>
    )
}