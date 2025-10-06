import React from "react"
import styles from "../Modal/modal.module.css"
import cv from "../../../public/CV/JC24.pdf"

export const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    function handleDownloadCV() {
        const link = document.createElement('a')
        link.href = cv
        link.download = "JC24.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
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
                    <div className={styles.actionCard} onClick={handleDownloadCV}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                        <h3>Descargar CV</h3>
                        <p>Descarga mi currículum en formato PDF</p>
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