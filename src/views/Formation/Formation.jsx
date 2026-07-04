import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import styles from './css/formation.module.css'
import school1 from '/img/developer.png'
import school2 from '/img/language.png'

/* ── Data ─────────────────────────────────────────────────── */

const EDUCATION = [
    {
        id: 1,
        img: school1,
        imgAlt: 'Logo TESCo — Tecnológico de Estudios Superiores de Coacalco',
        school: 'Tecnológico de Estudios Superiores de Coacalco',
        shortName: 'TESCo',
        degree: 'Ing. en Tecnologías de la Información',
        specialty: 'Especialidad · Dispositivos Móviles',
        period: '2017 – 2022',
        url: 'https://tescoacalco.edomex.gob.mx/',
        accentColor: '#34d399',
        tags: ['Android', 'Kotlin', 'Desarrollo Móvil', 'TIC'],
    },
    {
        id: 2,
        img: school2,
        imgAlt: 'Logo CUVA — Centro Universitario Valle de Anáhuac',
        school: 'Centro Universitario Valle de Anáhuac',
        shortName: 'CUVA',
        degree: 'Lic. en Idiomas y Traducción',
        specialty: 'Inglés · Francés · Italiano',
        period: '2023 – En curso',
        url: 'http://www.centrouniversitariovalledeanahuac.com.mx/',
        accentColor: '#818cf8',
        tags: ['Inglés', 'Francés', 'Italiano', 'Traducción'],
    },
]

const CERTS = [
    {
        id: 1,
        org: 'CertiProf',
        title: 'Scrum Foundation Professional Certificate',
        short: 'SFPC',
        icon: '🏅',
    },
    {
        id: 2,
        org: 'Develop Talent & Technology',
        title: 'SoftSkills Program',
        short: 'SSP',
        icon: '🎯',
    },
]

/* ── Icons ──────────────────────────────────────────────────── */

const IconArrow = () => (
    <svg width="15" height="15" viewBox="0 0 13 13" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 11L11 2M11 2H4.5M11 2V8.5" />
    </svg>
)

const IconCert = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
)

/* ── Variants ────────────────────────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
    }),
}

/* ── Education Card ─────────────────────────────────────────── */

function EducationCard({ item, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.a
            ref={ref}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            aria-label={`${item.degree} — ${item.school} (abre en nueva pestaña)`}
            style={{ '--card-accent': item.accentColor }}
        >
            {/* Glow de fondo en hover */}
            <div className={styles.cardGlow} aria-hidden="true" />

            {/* Icono + short name */}
            <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                    <img src={item.img} alt={item.imgAlt} className={styles.iconImg} loading="lazy" />
                </div>
                <span className={styles.shortName}>{item.shortName}</span>
            </div>

            {/* Contenido */}
            <div className={styles.cardContent}>
                <p className={styles.cardSchool}>{item.school}</p>
                <h3 className={styles.cardDegree}>{item.degree}</h3>
                <p className={styles.cardSpecialty}>{item.specialty}</p>
                <p className={styles.cardPeriod}>{item.period}</p>
            </div>

            {/* Tags */}
            <div className={styles.tagRow} role="list" aria-label="Materias relacionadas">
                {item.tags.map(t => (
                    <span key={t} className={styles.tag} role="listitem">{t}</span>
                ))}
            </div>

            {/* Footer CTA */}
            <div className={styles.cardFooter}>
                <span className={styles.ctaLink}>
                    Ver institución <IconArrow />
                </span>
            </div>
        </motion.a>
    )
}

/* ── Section ─────────────────────────────────────────────────── */

export const Formation = () => {
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true, margin: '-40px' })
    const certRef = useRef(null)
    const certInView = useInView(certRef, { once: true, margin: '-40px' })

    return (
        <section className={styles.section} id="formation" aria-labelledby="formation-heading">

            {/* Fondo decorativo */}
            <div className={styles.sectionBg} aria-hidden="true">
                <div className={styles.bgGlow} />
            </div>

            {/* Header */}
            <motion.header
                ref={headerRef}
                className={styles.header}
                variants={fadeUp}
                initial="hidden"
                animate={headerInView ? 'visible' : 'hidden'}
            >
                <span className={styles.eyebrow} aria-hidden="true">FORMACIÓN</span>
                <h2 id="formation-heading" className={styles.sectionTitle}>
                    Educación <em className={styles.titleEm}>&</em> Certificaciones
                </h2>
                <p className={styles.sectionSub}>
                    Base académica en TIC especializada en Móvil, complementada con idiomas
                    y metodologías ágiles.
                </p>
            </motion.header>

            {/* Education cards */}
            <div className={styles.cardsGrid} role="list" aria-label="Instituciones educativas">
                {EDUCATION.map((item, i) => (
                    <EducationCard key={item.id} item={item} index={i} />
                ))}
            </div>

            {/* Certs */}
            <motion.div
                ref={certRef}
                className={styles.certsSection}
                variants={fadeUp}
                initial="hidden"
                animate={certInView ? 'visible' : 'hidden'}
                custom={0}
            >
                <p className={styles.certsLabel} aria-hidden="true">
                    <IconCert /> Certificaciones
                </p>
                <div className={styles.certsList} role="list" aria-label="Certificaciones profesionales">
                    {CERTS.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            className={styles.certItem}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            animate={certInView ? 'visible' : 'hidden'}
                            role="listitem"
                        >
                            <span className={styles.certIcon} aria-hidden="true">{cert.icon}</span>
                            <div className={styles.certContent}>
                                <span className={styles.certTitle}>{cert.title}</span>
                                <span className={styles.certOrg}>{cert.org}</span>
                            </div>
                            <span className={styles.certShort}>{cert.short}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </section>
    )
}