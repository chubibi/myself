import styles from './sectionLabel.module.css'

/**
 * Kicker técnico de sección: índice + etiqueta, opcionalmente con metadato a la derecha.
 * Es decorativo/estructural; el nombre accesible de la sección lo aporta su <h2>.
 */
export function SectionLabel({ index, children, meta, tone = 'dark', className = '' }) {
    return (
        <div className={`${styles.label} ${className}`} data-tone={tone}>
            {index && <span className={styles.index}>{index}</span>}
            <span className={styles.text}>{children}</span>
            {meta && <span className={styles.meta}>{meta}</span>}
        </div>
    )
}
