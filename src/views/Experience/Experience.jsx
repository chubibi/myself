import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import styles from './css/experience.module.css'
import vde from '/img/vde.jpeg'
import iphone from '/img/Iphone.png'
import pixel from '/img/pixel.png'

/* ── Data ─────────────────────────────────────────────────── */

const JOBS = [
    {
        id: 1,
        company: 'VDE Suite Latam',
        logo: vde,
        role: 'Tech Lead Frontend',
        period: 'Mar 2025 – 2026',
        duration: '1 año',
        location: 'Edo. Méx, México',
        description:
            'Responsable de estructurar reglas de negocio, planificar el Roadmap y llevar un producto de cero a un ecosistema web completo.',
        achievements: [
            'Diseñé e implementé la arquitectura base con React + Vite + Tailwind CSS para el MVP.',
            'Lideré el desarrollo de la app móvil de control de asistencias con React Native + Expo.',
            'Implementé distribución vía Firebase App Distribution, digitalizando el check-in de la oficina.',
        ],
        tags: ['React', 'Vite', 'React Native', 'Expo', 'Tailwind CSS', 'Tech Lead'],
        accent: 'work',
    },
    {
        id: 2,
        company: 'BAACC Systems S.A. de C.V.',
        role: 'Full Stack Engineer',
        period: 'Abr 2023 – Nov 2024',
        duration: '1 año 7 meses',
        location: 'Edo. Méx, México',
        description:
            'Full Stack Engineer en proyectos logísticos: solución integrada al sistema de inventarios y MVP de plataforma de fletes.',
        achievements: [
            'App móvil para handhelds Zebra: conteo de racks, salida de mercancía y actualización de inventario.',
            'Sistema de inventarios Warehouse con React para empresa del sector automotriz.',
            'Diseñé UI/UX, planeé el MVP y construí servicios API REST de extremo a extremo.',
        ],
        tags: ['React', 'React Native', 'Android', 'Kotlin', 'REST API', 'Full Stack'],
        accent: 'work',
    },
    {
        id: 3,
        company: 'Elektra Ecommerce · Grupo Salinas',
        role: 'Android Developer',
        period: 'Ago 2022 – Feb 2023',
        duration: '7 meses',
        location: 'CDMX, México',
        description:
            'Junior Android Developer con foco en calidad post-lanzamiento: monitoreo de crashes, coordinación con QA y hotfixes.',
        achievements: [
            'Monitoreo post-lanzamiento con Firebase Crashlytics: identifiqué y categoricé errores en producción.',
            'Coordiné con QA la validación de fallos críticos y resolví incidencias técnicas de forma autónoma.',
        ],
        tags: ['Android Nativo', 'Kotlin', 'Firebase', 'Crashlytics', 'QA'],
        accent: 'work',
    },
]

const PROJECTS = [
    {
        id: 4,
        title: 'App de Control de Asistencias',
        stack: 'React Native + Expo',
        period: '2025',
        image: iphone,
        description:
            'App móvil multiplataforma para digitalizar el sistema de check-in de la oficina.',
        achievements: [
            'Arquitectura MVVM con Zustand y TanStack Query para sincronización en tiempo real.',
            'Distribución vía Firebase App Distribution sin tiendas.',
            'CI/CD y actualizaciones OTA con Expo EAS Build.',
        ],
        tags: ['React Native', 'Expo', 'Zustand', 'Firebase', 'MVVM'],
    },
    {
        id: 5,
        title: 'Sistema de Inventarios Warehouse',
        stack: 'React + REST API',
        period: '2023 – 2024',
        image: pixel,
        description:
            'Plataforma web de gestión de inventarios integrada con dispositivos industriales Zebra.',
        achievements: [
            'Interfaz responsiva para control de stock, entradas y salidas de almacén.',
            'Integración con app móvil Zebra para sincronización en tiempo real.',
            'UI/UX optimizada para operadores de almacén con flujos de escaneo.',
        ],
        tags: ['React', 'REST API', 'UI/UX', 'Warehouse', 'Zebra'],
    },
]

/* ── Icons ─────────────────────────────────────────────────── */

const IconCheck = ({ color = '#4ade80' }) => (
    <svg width="14" height="14" viewBox="0 0 17 17" fill="none" aria-hidden="true" focusable="false">
        <circle cx="8.5" cy="8.5" r="8" stroke={`${color}55`} strokeWidth="1" />
        <path d="M5 8.5l2.5 2.5L12 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const IconPin = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

const IconClock = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
)

/* ── Variants ────────────────────────────────────────────────── */

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 },
    }),
}

/* ── Job Card — full width horizontal ───────────────────────── */

function JobCard({ item, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.article
            ref={ref}
            className={styles.jobCard}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            aria-labelledby={`job-${item.id}`}
        >
            {/* Accent bar izquierda */}
            <div className={styles.accentBar} aria-hidden="true" />

            {/* Columna izquierda — info fija */}
            <div className={styles.jobLeft}>
                {item.logo && (
                    <div className={styles.logoContainer}>
                        <img src={item.logo} alt={`Logo de ${item.company}`} className={styles.logoImg} />
                    </div>
                )}
                <span className={styles.jobCompany}>{item.company}</span>
                <h3 id={`job-${item.id}`} className={styles.jobRole}>{item.role}</h3>
                <p className={styles.jobPeriod}>{item.period}</p>
                <div className={styles.jobMeta}>
                    <span className={styles.metaItem}><IconClock />{item.duration}</span>
                    {item.location && <span className={styles.metaItem}><IconPin />{item.location}</span>}
                </div>
            </div>

            {/* Divisor vertical */}
            <div className={styles.verticalDivider} aria-hidden="true" />

            {/* Columna derecha — contenido */}
            <div className={styles.jobRight}>
                <p className={styles.jobDesc}>{item.description}</p>
                <ul className={styles.achievementsList} aria-label="Logros">
                    {item.achievements.map((a, i) => (
                        <li key={i} className={styles.achievement}>
                            <IconCheck color="#4ade80" />
                            <span>{a}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.tagRow} role="list" aria-label="Tecnologías">
                    {item.tags.map(t => (
                        <span key={t} className={styles.tag} role="listitem">{t}</span>
                    ))}
                </div>
            </div>
        </motion.article>
    )
}

/* ── Project Card ────────────────────────────────────────────── */

function ProjectCard({ item, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.article
            ref={ref}
            className={styles.projectCard}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            aria-labelledby={`proj-${item.id}`}
        >
            <div className={styles.accentBarProject} aria-hidden="true" />

            <div className={styles.projectInner}>
                <div className={styles.projectMain}>
                    <div className={styles.projectTop}>
                        <div>
                            <span className={styles.projectStack}>{item.stack}</span>
                            <h3 id={`proj-${item.id}`} className={styles.projectTitle}>{item.title}</h3>
                        </div>
                        <span className={styles.projectPeriod}>{item.period}</span>
                    </div>

                    <p className={styles.jobDesc}>{item.description}</p>

                    <ul className={styles.achievementsList} aria-label="Logros del proyecto">
                        {item.achievements.map((a, i) => (
                            <li key={i} className={styles.achievement}>
                                <IconCheck color="#a78bfa" />
                                <span>{a}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.tagRow} role="list" aria-label="Tecnologías">
                        {item.tags.map(t => (
                            <span key={t} className={`${styles.tag} ${styles.tagProject}`} role="listitem">{t}</span>
                        ))}
                    </div>
                </div>

                {item.image && (
                    <div className={styles.projectMockupWrap}>
                        <img src={item.image} alt={`Mockup de ${item.title}`} className={styles.projectMockup} />
                    </div>
                )}
            </div>
        </motion.article>
    )
}

/* ── Section ─────────────────────────────────────────────────── */

export const Experience = () => {
    const headerRef = useRef(null)
    const headerInView = useInView(headerRef, { once: true, margin: '-40px' })
    const projRef = useRef(null)
    const projInView = useInView(projRef, { once: true, margin: '-40px' })

    return (
        <section className={styles.section} id="experience" aria-labelledby="experience-heading">

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
                <span className={styles.eyebrowSection} aria-hidden="true">TRAYECTORIA</span>
                <h2 id="experience-heading" className={styles.sectionTitle}>
                    Experiencia <em className={styles.titleEm}>&</em> Proyectos
                </h2>
                <p className={styles.sectionSub}>
                    4 años de roles comerciales en producción · proyectos que definen mi stack actual.
                </p>
            </motion.header>

            {/* Jobs */}
            <div className={styles.jobsList} aria-label="Historial de empleos">
                {JOBS.map((job, i) => (
                    <JobCard key={job.id} item={job} index={i} />
                ))}
            </div>

            {/* Projects */}
            <motion.div
                ref={projRef}
                className={styles.projectsSection}
                variants={fadeUp}
                initial="hidden"
                animate={projInView ? 'visible' : 'hidden'}
            >
                <div className={styles.projectsHeader}>
                    <span className={styles.eyebrowProject} aria-hidden="true">PROYECTOS</span>
                    <h3 className={styles.projectsTitle}>
                        Proyectos <em className={styles.titleEmProject}>Destacados</em>
                    </h3>
                </div>

                <div className={styles.projectsGrid}>
                    {PROJECTS.map((proj, i) => (
                        <ProjectCard key={proj.id} item={proj} index={i} />
                    ))}
                </div>
            </motion.div>

        </section>
    )
}