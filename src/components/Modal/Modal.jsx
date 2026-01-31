import React from "react"
import styles from "../Modal/modal.module.css"
import cv from "../../../public/CV/JC24.pdf"

export const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    function handleSendWhatsApp() {
        window.location.href = "https://wa.me/5538924729"
        onClose()
    }

    function handleSendEmail() {
        window.location.href = "mailto:josue.cazares.10@gmail.com?subject=Contacto desde Portfolio&body=Hola Josué, me gustaría contactarte..."
        onClose()
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <h2 className={styles.modalTitle}>¿Qué deseas hacer?</h2>
                <p className={styles.modalSubtitle}>Elige una opción para continuar</p>

                <div className={styles.cardsContainer}>
                    <div className={styles.actionCard}>
                        <div className={styles.iconWrapper} onClick={handleSendWhatsApp}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-message"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 3h10v8h-3l-4 2v-2h-3l0 -8" /><path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" /><path d="M10 18v.01" /></svg>
                        </div>
                        <h3>Enviar WhatsApp</h3>
                        <p>Mensaje directo</p>
                    </div>

                    <div className={styles.actionCard} onClick={handleSendEmail}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <h3>Enviar Correo</h3>
                        <p>Contáctame directamente por email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}