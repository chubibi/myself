import { useState } from 'react'
import styles from './css/contact.module.css'
import { PROFILE } from '../../data/profile'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { StatusIndicator } from '../../components/StatusIndicator/StatusIndicator'
import { CTAButton, ArrowRight, ArrowUpRight } from '../../components/CTAButton/CTAButton'

/* Canales directos reales (data/profile.js) */
const CHANNELS = [
    { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: 'WhatsApp', value: PROFILE.phoneDisplay, href: PROFILE.whatsapp, external: true },
    { label: 'LinkedIn', value: 'Josué Isaías Cazares Pérez', href: PROFILE.linkedin, external: true },
    { label: 'GitHub', value: 'github.com/chubibi', href: PROFILE.github, external: true },
]

/*
 * Contacto: el formulario conserva el comportamiento original (abre el cliente de
 * correo con el mensaje armado). No hay backend: se informa al usuario de ello.
 */
export default function Contact() {
    const [status, setStatus] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const nombre = data.get('nombre').trim()
        const correo = data.get('correo').trim()
        const mensaje = data.get('mensaje').trim()

        const subject = `Contacto desde el portafolio — ${nombre}`
        const body = `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`
        window.location.href =
            `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        setStatus('Se abrió tu app de correo con el mensaje listo para enviar.')
        form.reset()
    }

    return (
        <section className={styles.section} id="contact" aria-labelledby="contact-title">
            <SectionLabel index="04" meta="Respuesta por email">Contacto</SectionLabel>

            <div className={styles.grid}>
                {/* ── Cierre y canales ── */}
                <div className={styles.closing}>
                    {PROFILE.available && (
                        <StatusIndicator tone="positive" variant="tag" pulse>Disponible para proyectos</StatusIndicator>
                    )}
                    <h2 id="contact-title" className={styles.title}>
                        ¿Tienes un producto en mente? Construyámoslo.
                    </h2>
                    <p className={styles.lead}>
                        Apps móviles, plataformas web o un MVP desde cero.
                        Escríbeme y te respondo por email.
                    </p>

                    <ul className={styles.channels}>
                        {CHANNELS.map(c => (
                            <li key={c.label}>
                                <a
                                    href={c.href}
                                    className={styles.channel}
                                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    <span className={styles.channelLabel}>{c.label}</span>
                                    <span className={styles.channelValue}>{c.value}</span>
                                    <span className={styles.channelArrow} aria-hidden="true"><ArrowUpRight /></span>
                                    {c.external && <span className="visually-hidden"> (abre en una pestaña nueva)</span>}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Formulario ── */}
                <form className={styles.form} onSubmit={handleSubmit} aria-labelledby="form-title">
                    <h3 id="form-title" className={styles.formTitle}>Envíame un mensaje</h3>

                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label htmlFor="contact-nombre" className={styles.label}>Nombre</label>
                            <input id="contact-nombre" name="nombre" type="text" autoComplete="name" required className={styles.input} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="contact-correo" className={styles.label}>Correo</label>
                            <input id="contact-correo" name="correo" type="email" autoComplete="email" required className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="contact-mensaje" className={styles.label}>Mensaje</label>
                        <textarea id="contact-mensaje" name="mensaje" rows={5} required className={styles.input} aria-describedby="contact-hint" />
                    </div>

                    <p id="contact-hint" className={styles.hint}>
                        Al enviar se abrirá tu app de correo con el mensaje listo.
                    </p>

                    <CTAButton type="submit" icon={<ArrowRight />} className={styles.submit}>
                        Enviar mensaje
                    </CTAButton>

                    <p className={styles.status} role="status" aria-live="polite">{status}</p>
                </form>
            </div>
        </section>
    )
}
