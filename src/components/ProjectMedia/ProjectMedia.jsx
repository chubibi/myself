import styles from './projectMedia.module.css'
import { asset } from '../../utils/asset'

/* Mockups optimizados (originales en /design/mockups-src). */
const MOCKUPS = {
    phone: { src: asset('mockups/iphone-15.webp'), width: 720, height: 1479 },
    laptop: { src: asset('mockups/macbook-pro-16.webp'), width: 1600, height: 1282 },
}

/**
 * Imagen responsive con formatos modernos opcionales y respaldo.
 * Reserva dimensiones (width/height) para evitar layout shift.
 * Por defecto es lazy; usa `priority` solo en el primer viewport.
 */
export function Picture({ image, alt, priority = false, className = '', sizes }) {
    return (
        <picture>
            {image.sources?.map(s => (
                <source key={s.type} srcSet={s.srcSet} type={s.type} sizes={sizes} />
            ))}
            <img
                src={image.src}
                alt={alt ?? image.alt ?? ''}
                width={image.width}
                height={image.height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : undefined}
                className={className}
            />
        </picture>
    )
}

/* Marco decorativo del dispositivo (alt vacío: la captura ya describe el contenido). */
function DeviceImage({ mockup, priority, className }) {
    return (
        <img
            src={mockup.src}
            alt=""
            width={mockup.width}
            height={mockup.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={className}
        />
    )
}

/* iPhone: la pantalla del mockup es transparente; la captura va detrás del marco. */
export function PhoneFrame({ image, alt, priority, className = '' }) {
    return (
        <div className={`${styles.phone} ${className}`}>
            <Picture image={image} alt={alt} priority={priority} className={styles.phoneScreen} />
            <DeviceImage mockup={MOCKUPS.phone} priority={priority} className={styles.frame} />
        </div>
    )
}

/* MacBook: la captura se coloca sobre el área de pantalla, bajo la franja del notch. */
export function LaptopFrame({ image, alt, priority, className = '' }) {
    return (
        <div className={`${styles.laptop} ${className}`}>
            <DeviceImage mockup={MOCKUPS.laptop} priority={priority} className={styles.frame} />
            <Picture image={image} alt={alt} priority={priority} className={styles.laptopScreen} />
        </div>
    )
}

/* Etiqueta de honestidad: identifica capturas reales vs. conceptos. */
export function MediaTag({ kind = 'real', children }) {
    const label = children ?? (kind === 'real' ? 'Captura real' : 'Concepto')
    return <span className={styles.tag} data-kind={kind}>{label}</span>
}
