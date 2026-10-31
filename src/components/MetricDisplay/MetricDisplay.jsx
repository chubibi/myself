import styles from './metricDisplay.module.css'

/**
 * Métricas reales y verificables. `source` es obligatorio para dejar claro de dónde salen.
 */
export function MetricDisplay({ metrics, source, tone = 'dark' }) {
    if (!metrics?.length) return null

    return (
        <figure className={styles.wrap} data-tone={tone}>
            <dl className={styles.list}>
                {metrics.map(m => (
                    <div key={m.label} className={styles.item}>
                        <dt className={styles.label}>{m.label}</dt>
                        <dd className={styles.value}>{m.value}</dd>
                        {m.detail && <dd className={styles.detail}>{m.detail}</dd>}
                    </div>
                ))}
            </dl>
            {source && <figcaption className={styles.source}>Fuente: {source}</figcaption>}
        </figure>
    )
}
