import styles from './css/footer.module.css'
import { PROFILE, NAV_LINKS, CONTACT_SECTION_ID } from '../../data/profile'

const SOCIAL = [
    { label: 'LinkedIn', href: PROFILE.linkedin },
    { label: 'GitHub', href: PROFILE.github },
    { label: 'WhatsApp', href: PROFILE.whatsapp },
]

export const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <span className={styles.brandMark} aria-hidden="true" />
                    <div>
                        <p className={styles.name}>{PROFILE.name}</p>
                        <p className={styles.role}>{PROFILE.title} · {PROFILE.location}</p>
                    </div>
                </div>

                <nav aria-label="Pie de página" className={styles.nav}>
                    <ul className={styles.list}>
                        {NAV_LINKS.map(l => (
                            <li key={l.id}><a href={`#${l.id}`} className={styles.link}>{l.label}</a></li>
                        ))}
                        <li><a href={`#${CONTACT_SECTION_ID}`} className={styles.link}>Contacto</a></li>
                    </ul>
                    <ul className={styles.list}>
                        {SOCIAL.map(s => (
                            <li key={s.label}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    {s.label}<span aria-hidden="true"> ↗</span>
                                    <span className="visually-hidden"> (abre en una pestaña nueva)</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.bottom}>
                    <p className={styles.copy}>© {year} {PROFILE.name}. Hecho con React + Vite.</p>
                    <a href="#inicio" className={styles.top}>Volver arriba <span aria-hidden="true">↑</span></a>
                </div>
            </div>
        </footer>
    )
}
