import styles from './statusIndicator.module.css'

/**
 * Punto de estado + texto. El color nunca es el único portador del significado:
 * el texto siempre describe el estado.
 * tone: 'positive' (verde) | 'active' (naranja) | 'neutral'
 * variant: 'plain' | 'tag' (con borde, para escaneo rápido)
 */
export function StatusIndicator({ tone = 'positive', variant = 'plain', children, pulse = false, className = '' }) {
    return (
        <span className={`${styles.status} ${variant === 'tag' ? styles.tag : ''} ${className}`} data-tone={tone}>
            <span className={`${styles.dot} ${pulse ? styles.pulse : ''}`} aria-hidden="true" />
            <span>{children}</span>
        </span>
    )
}
