import { useState } from "react"
import { motion } from "motion/react"
import style from "./css/contact.module.css"

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

export default function Contact() {
    const [sending, setSending] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)

        const formData = new FormData(e.target)
        const nombre = formData.get('nombre')
        const correo = formData.get('correo')
        const mensaje = formData.get('mensaje')

        const subject = `Contacto desde Portfolio - Bienvenido: ${nombre}`
        const body = `Nombre: ${nombre}%0D%0ACorreo: ${correo}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`

        window.location.href = `mailto:josue.cazares.10@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

        setTimeout(() => {
            setSending(false)
            e.target.reset()
        }, 1000)
    }

    return (
        <section className={style.wrapperMain} id="contact" aria-label="Sección de contacto">
            
            {/* Fondo decorativo homogéneo al de Body */}
            <div className={style.contactBg} aria-hidden="true">
                <div className={style.contactBgGlow1} />
                <div className={style.contactBgGlow2} />
                <div className={style.contactBgGrid} />
            </div>

            <motion.div 
                className={style.contactSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className={style.contactHeader}>
                    <motion.div className={style.headerBadges} variants={itemVariants}>
                        <span className={style.badge} role="status">
                            <span className={style.badgeDot} />
                            Mobile Developer
                        </span>
                        <span className={style.badge} role="status">
                            <span className={style.badgeDot} />
                            Disponible para trabajar
                        </span>
                    </motion.div>
                    
                    <motion.h2 className={style.contactTitle} variants={itemVariants}>
                        ¿Tienes una <em className={style.titleAccent}>idea?</em>
                    </motion.h2>
                    
                    <motion.p className={style.contactDescription} variants={itemVariants}>
                        Si te ha gustado mi trabajo, puedes enviarme un correo para que nos pongamos en contacto.
                    </motion.p>
                </div>

                <motion.form 
                    className={style.contactForm} 
                    onSubmit={handleSubmit}
                    variants={itemVariants}
                >
                    <div className={style.formRow}>
                        <div className={style.inputGroup}>
                            <input
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                                className={style.formInput}
                                required
                                aria-label="Tu nombre"
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <input
                                name="correo"
                                type="email"
                                placeholder="Correo electrónico"
                                className={style.formInput}
                                required
                                aria-label="Tu correo electrónico"
                            />
                        </div>
                    </div>
                    <div className={style.inputGroup}>
                        <textarea
                            name="mensaje"
                            placeholder="Tu mensaje..."
                            className={style.formTextarea}
                            rows={6}
                            required
                            aria-label="Tu mensaje"
                        ></textarea>
                    </div>
                    <motion.button 
                        type="submit" 
                        className={style.submitBtn}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={sending}
                    >
                        {sending ? "Preparando correo..." : "Enviar mensaje"}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    )
}

