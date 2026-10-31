import styles from './projectMeta.module.css'

/**
 * Lista de metadatos clave/valor. Omite filas sin valor para no mostrar placeholders.
 * items: [{ label, value }] — value puede ser string o array (stack).
 */
export function ProjectMeta({ items, tone = 'dark', className = '' }) {
    const rows = items.filter(i => (Array.isArray(i.value) ? i.value.length : i.value))
    if (!rows.length) return null

    return (
        <dl className={`${styles.meta} ${className}`} data-tone={tone}>
            {rows.map(({ label, value }) => (
                <div key={label} className={styles.row}>
                    <dt className={styles.label}>{label}</dt>
                    <dd className={styles.value}>
                        {Array.isArray(value) ? (
                            <ul className={styles.stack}>
                                {value.map(v => <li key={v}>{v}</li>)}
                            </ul>
                        ) : value}
                    </dd>
                </div>
            ))}
        </dl>
    )
}
