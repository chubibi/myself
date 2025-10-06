import React, { useState } from "react"
import styles from "./css/body.module.css"
import { Link } from "react-scroll"
import { Modal } from "../../components/Modal/Modal"
import me from "../../../public/img/me.png"
import { FloatingWhatsApp } from "react-floating-whatsapp"
import logo from "../../../public/img/logojc.png"

export const Body = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    function handleClick(e) {
        window.location.href = "https://www.linkedin.com/in/josu%C3%A9-isa%C3%ADas-cazares-p%C3%A9rez-2697481b7/"
    }

    function handleClickGit(e) {
        window.location.href = "https://github.com/chubibi"
    }

    function copyEmail() {
        navigator.clipboard.writeText("tuemail@ejemplo.com")
        alert("Email copiado al portapapeles")
    }

    return (
        <>
            <section className={styles.headerSection}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <div className={styles.headerBadges}>
                            <span className={styles.badge}>
                                <span className={styles.badgeDot}></span>
                                Mobile Developer
                            </span>
                            <span className={styles.badgeAvailable}>
                                <span className={styles.badgeDotGreen}></span>
                                Disponible para trabajar
                            </span>
                        </div>

                        <h1 className={styles.title}>I'm Josué Cazares</h1>

                        <p className={styles.description}>
                            Desarrollador móvil, desarrollo web.<br />
                            Más de 3 años de experiencia, graduado como <strong>Ingeniero en TIC's</strong>.
                        </p>

                        <div className={styles.buttonGroup}>
                            <button className={styles.btnPrimary} onClick={openModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                                Contáctame
                            </button>
                            <button className={styles.btnSecondary} onClick={copyEmail}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                                Copiar Correo
                            </button>
                        </div>
                    </div>

                    <div className={styles.imageContent}>
                        <div className={styles.imageWrapper}>
                            <img src={me} alt="Profile" className={styles.profileImage} />
                        </div>
                    </div>
                </div>

                <Modal isOpen={modalOpen} onClose={closeModal} />
            </section>
            <FloatingWhatsApp
                phoneNumber="+525538924729"
                avatar={logo}
                accountName="Mobile Developer"
                chatMessage="¡Hola! Soy Josué Cazares, en que te puedo ayudar ?"
                statusMessage="Responde normalmente en 10 minutos"
                placeholder="Escribe tu mensaje..."
                messageDelay={1}
                allowEsc={true}
                allowClickAway={true}
                notification={true}
                notificationDelay={60}
                notificationSound={true}
                className="fixed bottom-5 right-5 z-50"
                style={{ color: "black" }}
            />
        </>
    )
}