import { useRef, useState } from 'react'
import styles from './css/spotlight.module.css'
import { PhoneFrame, MediaTag } from '../../components/ProjectMedia/ProjectMedia'
import { StatusIndicator } from '../../components/StatusIndicator/StatusIndicator'
import { ProjectMeta } from '../../components/ProjectMeta/ProjectMeta'
import { MetricDisplay } from '../../components/MetricDisplay/MetricDisplay'
import { ProjectLinks } from '../../components/ProjectFeature/ProjectFeature'

/**
 * Caso de estudio en profundidad del proyecto más sólido.
 * Las pestañas son funcionales: cambian entre capturas reales de la app
 * (patrón WAI-ARIA Tabs con flechas, Home y End).
 */
export function Spotlight({ project }) {
    const { id, index, name, category, status, summary, problem, solution, role, stack, year, results, metrics, metricsSource, links, screens } = project
    const [activeIdx, setActiveIdx] = useState(0)
    const tabRefs = useRef([])
    const active = screens[activeIdx]

    function onKeyDown(e) {
        const last = screens.length - 1
        const next = {
            ArrowRight: activeIdx === last ? 0 : activeIdx + 1,
            ArrowLeft: activeIdx === 0 ? last : activeIdx - 1,
            Home: 0,
            End: last,
        }[e.key]
        if (next === undefined) return
        e.preventDefault()
        setActiveIdx(next)
        tabRefs.current[next]?.focus()
    }

    return (
        <article id={`project-${id}`} className={styles.spotlight} aria-labelledby={`${id}-title`}>
            {/* ── Encabezado ── */}
            <header className={styles.header}>
                <div className={styles.kicker}>
                    <span className={styles.index}>{index}</span>
                    <span>Caso de estudio</span>
                    <span className={styles.category}>{category}</span>
                </div>
                <div className={styles.titleRow}>
                    <h3 id={`${id}-title`} className={styles.name}>{name}</h3>
                    {status && <StatusIndicator tone={status.tone} variant="tag">{status.label}</StatusIndicator>}
                </div>
                <p className={styles.summary}>{summary}</p>
            </header>

            <div className={styles.grid}>
                {/* ── Demo: capturas reales con tabs ── */}
                <div className={styles.demo}>
                    <div className={styles.tablist} role="tablist" aria-label={`Pantallas de ${name}`}>
                        {screens.map((s, i) => (
                            <button
                                key={s.id}
                                ref={el => (tabRefs.current[i] = el)}
                                type="button"
                                role="tab"
                                id={`${id}-tab-${s.id}`}
                                aria-selected={i === activeIdx}
                                aria-controls={`${id}-panel`}
                                tabIndex={i === activeIdx ? 0 : -1}
                                className={styles.tab}
                                onClick={() => setActiveIdx(i)}
                                onKeyDown={onKeyDown}
                            >
                                <span className={styles.tabNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                                {s.label}
                            </button>
                        ))}
                    </div>

                    <div
                        id={`${id}-panel`}
                        role="tabpanel"
                        aria-labelledby={`${id}-tab-${active.id}`}
                        className={styles.panel}
                    >
                        <figure className={styles.figure}>
                            <PhoneFrame key={active.id} image={active} alt={active.alt} className={styles.phone} />
                            <figcaption className={styles.caption}>
                                <MediaTag />
                                <span>{active.caption}</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                {/* ── Narrativa del caso: corta y escaneable ── */}
                <div className={styles.story}>
                    <section className={styles.block} aria-labelledby={`${id}-problem`}>
                        <h4 id={`${id}-problem`} className={styles.blockLabel}>Problema</h4>
                        <p className={styles.blockText}>{problem}</p>
                    </section>
                    <section className={styles.block} aria-labelledby={`${id}-solution`}>
                        <h4 id={`${id}-solution`} className={styles.blockLabel}>Solución</h4>
                        <ul className={styles.checklist}>
                            {solution.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </section>
                    <section className={styles.block} aria-labelledby={`${id}-role`}>
                        <h4 id={`${id}-role`} className={styles.blockLabel}>Mi rol</h4>
                        <p className={styles.blockText}>{role}</p>
                    </section>
                    <ProjectMeta items={[
                        { label: 'Stack', value: stack },
                        { label: 'Año', value: year },
                    ]} />
                </div>

                {/* ── Resultado: card clara ── */}
                <aside className={styles.outcome} aria-labelledby={`${id}-result`}>
                    <h4 id={`${id}-result`} className={styles.outcomeLabel}>Resultado</h4>
                    <ul className={styles.results}>
                        {results.map(r => <li key={r}>{r}</li>)}
                    </ul>
                    <MetricDisplay metrics={metrics} source={metricsSource} tone="light" />
                    <ProjectLinks links={links} surface="light" />
                </aside>
            </div>
        </article>
    )
}
