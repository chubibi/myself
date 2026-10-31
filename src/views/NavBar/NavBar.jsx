import { useEffect, useRef, useState } from 'react'
import styles from './css/navBar.module.css'
import { NAV_LINKS, CONTACT_SECTION_ID, PROFILE } from '../../data/profile'

const SECTION_IDS = [...NAV_LINKS.map(l => l.id), CONTACT_SECTION_ID]

/* Marca la sección visible para resaltar el enlace activo (aria-current). */
function useActiveSection(ids) {
    const [active, setActive] = useState(null)

    useEffect(() => {
        const nodes = ids.map(id => document.getElementById(id)).filter(Boolean)
        if (!nodes.length || !('IntersectionObserver' in window)) return

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible) setActive(visible.target.id)
            },
            { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
        )
        nodes.forEach(n => observer.observe(n))
        return () => observer.disconnect()
    }, [ids])

    return active
}

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const toggleRef = useRef(null)
    const active = useActiveSection(SECTION_IDS)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* Cerrar con Escape (devolviendo el foco) y al pasar a desktop */
    useEffect(() => {
        if (!menuOpen) return
        const onKey = e => {
            if (e.key === 'Escape') {
                setMenuOpen(false)
                toggleRef.current?.focus()
            }
        }
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
        window.addEventListener('keydown', onKey)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('keydown', onKey)
            window.removeEventListener('resize', onResize)
        }
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
            <div className={styles.bar}>
                <a href="#inicio" className={styles.brand} onClick={closeMenu}>
                    <span className={styles.brandMark} aria-hidden="true" />
                    <span className={styles.brandName}>{PROFILE.name}</span>
                    <span className={styles.brandRole}>{PROFILE.title}</span>
                </a>

                <nav className={styles.desktopNav} aria-label="Principal">
                    <ul className={styles.list}>
                        {NAV_LINKS.map(({ id, label, index }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={styles.link}
                                    aria-current={active === id ? 'true' : undefined}
                                >
                                    <span className={styles.linkIndex} aria-hidden="true">{index}</span>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href={`#${CONTACT_SECTION_ID}`} className={styles.cta} onClick={closeMenu}>
                    Contacto
                </a>

                <button
                    ref={toggleRef}
                    type="button"
                    className={styles.toggle}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen(open => !open)}
                >
                    <span className="visually-hidden">{menuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
                    <span className={styles.toggleLines} aria-hidden="true" />
                </button>
            </div>

            <nav
                id="mobile-menu"
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
                aria-label="Principal (móvil)"
                hidden={!menuOpen}
            >
                <ul className={styles.mobileList}>
                    {NAV_LINKS.map(({ id, label, index }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={styles.mobileLink}
                                aria-current={active === id ? 'true' : undefined}
                                onClick={closeMenu}
                            >
                                <span className={styles.linkIndex} aria-hidden="true">{index}</span>
                                {label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={`#${CONTACT_SECTION_ID}`} className={styles.mobileLink} onClick={closeMenu}>
                            <span className={styles.linkIndex} aria-hidden="true">→</span>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
