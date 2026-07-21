import React from "react"
import { motion } from "motion/react"
import styles from "./css/footer.module.css"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer} id="footer" aria-label="Pie de página">
            {/* Rejilla y luces de fondo sutiles */}
            <div className={styles.footerBg} aria-hidden="true">
                <div className={styles.footerGlow} />
                <div className={styles.footerGrid} />
            </div>

            <div className={styles.container}>
                {/* ── Sección CTA (Llamado a la Acción) ── */}
                <div className={styles.ctaSection}>
                    <h3 className={styles.ctaTitle}>
                        ¿Tienes un proyecto en <em className={styles.titleAccent}>mente?</em>
                    </h3>
                    <p className={styles.ctaSubtitle}>
                        Construyamos una solución móvil o web de alto rendimiento.
                    </p>
                    <a
                        id="footer-cta-mail"
                        href="mailto:josue.cazares.10@gmail.com"
                        className={styles.ctaBtn}
                        aria-label="Enviar correo de contacto a Josué Cazares"
                    >
                        Hablemos
                    </a>
                </div>

                <hr className={styles.divider} aria-hidden="true" />

                {/* ── Contenido de Información y Enlaces ── */}
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h4 className={styles.name}>Josué Cazares</h4>
                        <p className={styles.description}>
                            Software & Mobile Developer • Especialista en React Native, Android & React.
                        </p>

                        <address className={styles.address}>
                            <p className={styles.contactItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <a href="mailto:josue.cazares.10@gmail.com" className={styles.addressLink}>josue.cazares.10@gmail.com</a>
                            </p>
                            <p className={styles.contactItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <a href="tel:+525538924729" className={styles.addressLink}>55 3892 4729</a>
                            </p>
                            <p className={styles.contactItem}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>Estado de México, México</span>
                            </p>
                        </address>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.social}>
                            <a
                                href="https://linkedin.com/in/josué-isaías-cazares-pérez-2697481b7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn (Abre en una nueva ventana)"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                            <a
                                href="https://github.com/chubibi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub (Abre en una nueva ventana)"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        <p className={styles.copyright}>
                            © {currentYear} Josué Cazares. Hecho con ❤️ y React.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}