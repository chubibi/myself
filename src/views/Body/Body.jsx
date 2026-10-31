import { useEffect, useRef, useState } from "react"
import styles from "./css/body.module.css"
import { PROFILE } from "../../data/profile"
import { StatusIndicator } from "../../components/StatusIndicator/StatusIndicator"
import { CTAButton, ArrowDown, ArrowUpRight, ArrowRight } from "../../components/CTAButton/CTAButton"
import { PhoneFrame, MediaTag } from "../../components/ProjectMedia/ProjectMedia"
import { PROJECTS, getProject } from "../../data/projects"

/* Captura destacada del hero: pantalla real de VDE Connect (Modo Oficina) */
const HERO_SCREEN = getProject('vde-connect').screens[0]

/* Datos factuales para escaneo rápido (context.md). Sin métricas inventadas. */
const META = [
    { label: 'Rol actual', value: 'Tech Lead Frontend', detail: 'VDE Suite LATAM' },
    { label: 'Experiencia', value: '4 años', detail: 'Elektra · BAACC · VDE Suite' },
    { label: 'Enfoque', value: 'Mobile + Web', detail: 'React Native · Android · React' },
    { label: 'Base', value: 'Edo. de México', detail: 'México' },
]

const IconCopy = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5.5" y="5.5" width="8" height="8" rx="1" />
        <path d="M3.5 10.5h-1v-8h8v1" />
    </svg>
)

const IconCheck = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M3 8.5l3 3 7-7" />
    </svg>
)

export function Body() {
    const [copied, setCopied] = useState(false)
    const timerRef = useRef(null)

    useEffect(() => () => clearTimeout(timerRef.current), [])

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(PROFILE.email)
        } catch {
            const ta = document.createElement('textarea')
            ta.value = PROFILE.email
            ta.style.cssText = 'position:absolute;left:-9999px'
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
        }
        setCopied(true)
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setCopied(false), 2500)
    }

    return (
        <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
            <div className={styles.grid}>

                {/* ── Mensaje principal ── */}
                <div className={styles.copy}>
                    <div className={styles.statusRow}>
                        {PROFILE.available && (
                            <StatusIndicator tone="positive" variant="tag" pulse>Disponible para proyectos</StatusIndicator>
                        )}
                    </div>

                    <h1 id="hero-title" className={styles.title}>
                        Apps móviles y web, del MVP a&nbsp;producción.
                    </h1>

                    <p className={styles.lead}>
                        Diseño y desarrollo con <strong>React Native, Android nativo y React</strong>:
                        de las reglas de negocio a la tienda de apps.
                    </p>

                    <div className={styles.actions}>
                        <CTAButton href="#proyectos" icon={<ArrowDown />}>
                            Explorar proyectos
                        </CTAButton>
                        <CTAButton href={`mailto:${PROFILE.email}`} variant="secondary">
                            Escríbeme
                        </CTAButton>
                        <CTAButton
                            variant="ghost"
                            onClick={copyEmail}
                            icon={copied ? <IconCheck /> : <IconCopy />}
                            aria-label={`Copiar email ${PROFILE.email}`}
                        >
                            {copied ? 'Email copiado' : 'Copiar email'}
                        </CTAButton>
                        <span className="visually-hidden" role="status" aria-live="polite">
                            {copied ? 'Email copiado al portapapeles' : ''}
                        </span>
                    </div>

                    {/* Card clara con datos clave: lectura en 3 segundos */}
                    <dl className={styles.meta}>
                        {META.map(item => (
                            <div key={item.label} className={styles.metaItem}>
                                <dt className={styles.metaLabel}>{item.label}</dt>
                                <dd className={styles.metaValue}>{item.value}</dd>
                                <dd className={styles.metaDetail}>{item.detail}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* ── Pieza visual: captura real + índice de productos ── */}
                <aside className={styles.panel} aria-label="Trabajo reciente">
                    <div className={styles.panelHeader}>
                        <span className={styles.panelTitle}>Trabajo reciente</span>
                        <MediaTag />
                    </div>

                    <div className={styles.stage}>
                        <PhoneFrame image={HERO_SCREEN} alt={HERO_SCREEN.alt} priority className={styles.stagePhone} />

                        {/* Cápsula clara (patrón Dispatch) con acceso directo al caso */}
                        <div className={styles.capsule}>
                            <div className={styles.capsuleText}>
                                <span className={styles.capsuleName}>VDE Connect</span>
                                <span className={styles.capsuleDetail}>Publicada en Google Play</span>
                            </div>
                            <CTAButton href="#project-vde-connect" variant="ink" size="sm" icon={<ArrowRight />}>
                                Ver caso
                            </CTAButton>
                        </div>
                    </div>

                    <ol className={styles.index}>
                        {PROJECTS.map(item => (
                            <li key={item.id}>
                                <a href={`#project-${item.id}`} className={styles.indexLink}>
                                    <span className={styles.indexNum}>{item.index}</span>
                                    <span className={styles.indexName}>{item.name}</span>
                                    <span className={styles.indexType}>{item.category}</span>
                                    <span className={styles.indexArrow} aria-hidden="true"><ArrowUpRight /></span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </aside>
            </div>
        </section>
    )
}
