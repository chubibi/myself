import styles from './ctaButton.module.css'

/**
 * Botón/enlace de acción del sistema Dispatch.
 * Renderiza <a> si recibe `href`, si no un <button>.
 * variant: 'primary' (naranja) | 'secondary' (contorno) | 'ghost' (texto)
 *          'light' (bone sobre oscuro) | 'ink' (oscuro sobre paneles bone)
 * leadingIcon: icono antes del texto (p. ej. logo de tienda).
 * size: 'md' | 'sm'
 */
export function CTAButton({
    href,
    variant = 'primary',
    size = 'md',
    icon,
    leadingIcon,
    external = false,
    className = '',
    children,
    ...rest
}) {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`
    const content = (
        <>
            {leadingIcon && <span className={styles.leading} aria-hidden="true">{leadingIcon}</span>}
            <span>{children}</span>
            {external && <span className="visually-hidden"> (abre en una pestaña nueva)</span>}
            {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        </>
    )

    if (href) {
        const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
        return (
            <a href={href} className={classes} {...externalProps} {...rest}>
                {content}
            </a>
        )
    }

    return (
        <button type="button" className={classes} {...rest}>
            {content}
        </button>
    )
}

/* Iconos de flecha compartidos para CTAs */
export const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
)

export const ArrowDown = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M8 2v11M4 9l4 4 4-4" />
    </svg>
)

export const ArrowUpRight = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M4 12l8-8M5 4h7v7" />
    </svg>
)
