import { useState } from "react"
import { motion } from "motion/react"
import styles from "./css/body.module.css"
import me from "/img/me.png"

const SKILLS_ICONS = [
    {
        name: 'React',
        icon: (
            <svg viewBox="0 0 569 512" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"><g fill="none" fillRule="evenodd"><g transform="translate(-227, -256)" fill="#58C4DC" fillRule="nonzero"><g transform="translate(227, 256)"><path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" /><path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437" /></g></g></g></svg>
        )
    },
    {
        name: 'React Native',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="2.139" fill="#58C4DC" /><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.998s2.018-3.248 5.536-4.137l.472-.12.12.472c.27 1.064.648 2.094 1.13 3.07l.083.165-.083.165a15.178 15.178 0 0 0-1.13 3.07l-.12.472zm..." fill="#58C4DC" /></svg>
        )
    },
    {
        name: 'Android',
        icon: (
            <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 150" aria-hidden="true" focusable="false"><path fill="#34A853" d="M255.285 143.47c-.084-.524-.164-1.042-.251-1.56a128.119 128.119 0 0 0-12.794-38.288 128.778 128.778 0 0 0-23.45-31.86 129.166 129.166 0 0 0-22.713-18.005c.049-.08.09-.168.14-.25 2.582-4.461 5.172-8.917 7.755-13.38l7.576-13.068c1.818-3.126 3.632-6.26 5.438-9.386a11.776 11.776 0 0 0 .662-10.484 11.668 11.668 0 0 0-4.823-5.536 11.85 11.85 0 0 0-5.004-1.61 11.963 11.963 0 0 0-2.218.018 11.738 11.738 0 0 0-8.968 5.798c-1.814 3.127-3.628 6.26-5.438 9.386l-7.576 13.069c-2.583 4.462-5.173 8.918-7.755 13.38-.282.487-.567.973-.848 1.467-.392-.157-.78-.313-1.172-.462-14.24-5.43-29.688-8.4-45.836-8.4-.442 0-.879 0-1.324.006-14.357.143-28.152 2.64-41.022 7.12a119.434 119.434 0 0 0-4.42 1.642c-.262-.455-.532-.911-.79-1.367-2.583-4.462-5.173-8.918-7.755-13.38L65.123 15.25c-1.818-3.126-3.632-6.259-5.439-9.386A11.736 11.736 0 0 0 48.5.048 11.71 11.71 0 0 0 43.49 1.66a11.716 11.716 0 0 0-4.077 4.063c-.281.474-.532.967-.742 1.473a11.808 11.808 0 0 0-.365 8.188c.259.786.594 1.554 1.023 2.296a3973.32 3973.32 0 0 1 5.439 9.386c2.53 4.357 5.054 8.713 7.58 13.069 2.582 4.462 5.168 8.918 7.75 13.38.02.038.046.075.065.112A129.184 129.184 0 0 0 45.32 64.38a129.693 129.693 0 0 0-22.2 24.015 127.737 127.737 0 0 0-9.34 15.24 128.238 128.238 0 0 0-10.843 28.764 130.743 130.743 0 0 0-1.951 9.524c-.087.518-.167 1.042-.247 1.56A124.978 124.978 0 0 0 0 149.118h256c-.205-1.891-.449-3.77-.734-5.636l.019-.012Z" /></svg>
        )
    },
    {
        name: 'Kotlin',
        icon: (
            <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid" aria-hidden="true" focusable="false"><defs><linearGradient x1="99.991%" y1="-.011%" x2=".01%" y2="100.01%" id="kotlin__a"><stop stopColor="#E44857" offset=".344%" /><stop stopColor="#C711E1" offset="46.89%" /><stop stopColor="#7F52FF" offset="100%" /></linearGradient></defs><path fill="url(#kotlin__a)" d="M256 256H0V0h256L128 127.949z" /></svg>
        )
    },
    {
        name: 'TypeScript',
        icon: (
            <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid" aria-hidden="true" focusable="false"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
        )
    },
    {
        name: 'Firebase',
        icon: (
            <svg viewBox="0 0 256 351" aria-hidden="true" focusable="false"><path fill="#FFA000" d="M0 282.998l2.123-2.972L102.527 89.512l.212-.29-40.92-77.479C57.025 3.51 50.102.976 43.554 3.075a11.966 11.966 0 0 0-7.484 7.615L0 282.998z" /><path fill="#F57F17" d="M135.increment 0l-39.573 75.43 39.573 75.098L256 282.998 135.534 0z" /><path fill="#FFCA28" d="M135.534 0L0 282.998l256 67.774L135.534 0z" /><path fill="#FFA000" d="M135.534 350.772L256 282.998l-56.822-11.67z" /></svg>
        )
    },
    {
        name: 'Expo',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#fff" d="M0 0h24v24H0z" /><path fill="#000" d="M3.278 16.993c.3.3.694.465 1.114.465.42 0 .814-.165 1.114-.465l6.494-6.494 6.494 6.494c.3.3.694.465 1.114.465.42 0 .814-.165 1.114-.465.614-.614.614-1.614 0-2.228L13.114 7.72a1.576 1.576 0 0 0-2.228 0L3.278 14.765c-.614.614-.614 1.614 0 2.228Z" /></svg>
        )
    },
    {
        name: 'Tailwind',
        icon: (
            <svg fill="none" viewBox="0 0 54 33" aria-hidden="true" focusable="false"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" /></svg>
        )
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}

const avatarVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
    hover: {
        scale: 1.04,
        transition: { duration: 0.35, ease: "easeOut" },
    },
}

const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.6,
        },
    },
}

const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
    hover: {
        y: -5,
        scale: 1.06,
        transition: { duration: 0.2 },
    },
}

export function Body() {
    const [copied, setCopied] = useState(false)

    async function copyEmail() {
        const email = 'josue.cazares.10@gmail.com'
        try {
            await navigator.clipboard.writeText(email)
        } catch {
            const ta = document.createElement('textarea')
            ta.value = email
            ta.style.cssText = 'position:absolute;left:-9999px'
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
    }

    return (
        <section className={styles.hero} id="inicio" aria-label="Presentación de Josué Cazares">

            {/* ── Fondo decorativo ── */}
            <div className={styles.heroBg} aria-hidden="true">
                <div className={styles.heroBgGlow1} />
                <div className={styles.heroBgGlow2} />
                <div className={styles.heroBgGrid} />
            </div>

            {/* ── Contenido centrado ── */}
            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Avatar circular */}
                <motion.div
                    className={styles.avatarWrap}
                    variants={avatarVariants}
                    whileHover="hover"
                >
                    <div className={styles.avatarRing} aria-hidden="true">
                        <div className={styles.avatarInner}>
                            <img
                                src={me}
                                alt="Foto de perfil de Josué Cazares, Software Developer"
                                className={styles.avatarImg}
                                width="100"
                                height="100"
                                loading="eager"
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                    <div className={styles.avatarOnline} aria-hidden="true" />
                </motion.div>

                {/* Badge "Disponible" */}
                <motion.div className={styles.badge} variants={itemVariants} role="status" aria-label="Estado: disponible para trabajar">
                    <span className={styles.badgeDot} />
                    Disponible para nuevos proyectos
                </motion.div>

                {/* Título principal — h1 único en la página */}
                <motion.h1 className={styles.title} variants={itemVariants}>
                    Hola, soy{" "}
                    <em className={styles.titleAccent}>Josué</em>
                    <br />
                    <span className={styles.titleSub}>Software & Mobile Developer</span>
                </motion.h1>

                {/* Descripción */}
                <motion.p className={styles.subtitle} variants={itemVariants}>
                    4 años transformando ideas en{" "}
                    <strong>productos de producción</strong> —
                    Mobile con <strong>React Native & Android Nativo</strong>,
                    Web con <strong>React + Vite</strong>.
                    Tech Lead en VDE Suite LATAM.
                </motion.p>

                {/* ── CTA Group ── */}
                <motion.div className={styles.btnGroup} variants={itemVariants} role="group" aria-label="Acciones principales">
                    {/* CTA Principal: contacto directo */}
                    <a
                        id="cta-contact"
                        href="mailto:josue.cazares.10@gmail.com"
                        className={styles.btnPrimary}
                        aria-label="Enviar email a Josué Cazares"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        Contáctame
                    </a>

                    {/* CTA Secundario: LinkedIn */}
                    <a
                        id="cta-linkedin"
                        href="https://linkedin.com/in/josué-isaías-cazares-pérez-2697481b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnSecondary}
                        aria-label="Ver perfil de LinkedIn de Josué Cazares (abre en nueva pestaña)"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        LinkedIn
                    </a>

                    {/* CTA Terciario: copiar email */}
                    <button
                        id="cta-copy-email"
                        onClick={copyEmail}
                        className={styles.btnGhost}
                        aria-label={copied ? "Email copiado al portapapeles" : "Copiar email josue.cazares.10@gmail.com"}
                        aria-live="polite"
                    >
                        {copied ? (
                            <>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                                ¡Copiado!
                            </>
                        ) : (
                            <>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                                Copiar Email
                            </>
                        )}
                    </button>
                </motion.div>

                {/* ── Stats rápidos ── */}
                <motion.div className={styles.statsRow} variants={itemVariants} aria-label="Estadísticas profesionales">
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>4+</span>
                        <span className={styles.statLabel}>años de exp.</span>
                    </div>
                    <div className={styles.statDivider} aria-hidden="true" />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>3</span>
                        <span className={styles.statLabel}>empresas</span>
                    </div>
                    <div className={styles.statDivider} aria-hidden="true" />
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>apps en prod.</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* ── Tecnologías ── */}
            <motion.div
                className={styles.trustRow}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <p className={styles.trustLabel} id="skills-label">Stack tecnológico</p>
                <motion.div
                    className={styles.carouselContainer}
                    variants={skillsVariants}
                    initial="hidden"
                    animate="visible"
                    role="list"
                    aria-labelledby="skills-label"
                >
                    {SKILLS_ICONS.map(tecnologia => (
                        <motion.span
                            key={tecnologia.name}
                            className={styles.logoChip}
                            variants={skillItemVariants}
                            whileHover="hover"
                            role="listitem"
                            title={tecnologia.name}
                        >
                            {tecnologia.icon}
                            <span>{tecnologia.name}</span>
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* ── Scroll hint ── */}
            <motion.div
                className={styles.scrollHint}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                aria-hidden="true"
            >
                <div className={styles.scrollMouse}>
                    <div className={styles.scrollWheel} />
                </div>
            </motion.div>
        </section>
    )
}