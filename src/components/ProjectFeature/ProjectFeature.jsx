import styles from './projectFeature.module.css'
import { StatusIndicator } from '../StatusIndicator/StatusIndicator'
import { ProjectMeta } from '../ProjectMeta/ProjectMeta'
import { MetricDisplay } from '../MetricDisplay/MetricDisplay'
import { CTAButton, ArrowUpRight } from '../CTAButton/CTAButton'
import { asset } from '../../utils/asset'

const STORE_ICONS = {
    googleplay: asset('work/googleplay-64.png'),
}

/**
 * Enlaces de un proyecto. El primero es la acción principal.
 * surface: 'dark' | 'light' — elige variantes con contraste correcto.
 * Los enlaces de tienda (store) muestran el logo oficial antes del texto.
 */
export function ProjectLinks({ links, surface = 'dark' }) {
    if (!links?.length) return null
    const primary = surface === 'light' ? 'ink' : 'primary'

    return (
        <div className={styles.links}>
            {links.map((link, i) => (
                <CTAButton
                    key={link.href}
                    href={link.href}
                    external
                    variant={link.store ? (surface === 'light' ? 'ink' : 'light') : i === 0 ? primary : 'secondary'}
                    leadingIcon={link.store ? <img src={STORE_ICONS[link.store]} alt="" width="18" height="18" /> : null}
                    icon={<ArrowUpRight />}
                    className={i > 0 && surface === 'light' ? styles.secondaryOnLight : ''}
                >
                    {link.label}
                </CTAButton>
            ))}
        </div>
    )
}

/**
 * Bloque editorial de un proyecto presentado como lanzamiento de producto.
 * Pensado para escaneo: nombre + estado, una línea de resumen, viñetas cortas.
 * tone: 'light' (panel bone) | 'dark' (sobre night-floor) | 'carbon' (panel carbon-well)
 * reverse: invierte media/texto en desktop para alternar composiciones.
 */
export function ProjectFeature({ project, tone = 'dark', reverse = false, media }) {
    const {
        id, index, name, category, status, summary, role, highlights,
        stack, year, feature, metrics, metricsSource, links,
    } = project
    const surface = tone === 'light' ? 'light' : 'dark'

    return (
        <article
            id={`project-${id}`}
            className={styles.feature}
            data-tone={tone}
            data-reverse={reverse || undefined}
            aria-labelledby={`${id}-title`}
        >
            <div className={styles.media}>{media}</div>

            <div className={styles.body}>
                <div className={styles.head}>
                    <span className={styles.index}>{index}</span>
                    <span className={styles.category}>{category}</span>
                </div>

                <div className={styles.titleRow}>
                    <h3 id={`${id}-title`} className={styles.name}>{name}</h3>
                    {status && (
                        <StatusIndicator tone={status.tone} variant="tag" className={styles.status}>
                            {status.label}
                        </StatusIndicator>
                    )}
                </div>

                <p className={styles.summary}>{summary}</p>

                {highlights?.length > 0 && (
                    <ul className={styles.highlights}>
                        {highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                )}

                {feature && (
                    <div className={styles.highlight}>
                        <span className={styles.highlightLabel}>Funcionalidad distintiva</span>
                        <p className={styles.highlightTitle}>{feature.title}</p>
                        <p className={styles.highlightText}>{feature.text}</p>
                    </div>
                )}

                <ProjectMeta
                    tone={surface}
                    items={[
                        { label: 'Rol', value: role },
                        { label: 'Stack', value: stack },
                        { label: 'Año', value: year },
                    ]}
                />

                <MetricDisplay metrics={metrics} source={metricsSource} tone={surface} />

                <ProjectLinks links={links} surface={surface} />
            </div>
        </article>
    )
}
