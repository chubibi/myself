import React from "react"
import styles from "../Modal/modal.module.css"
export const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button onClick={onClose} className={styles.closeButton}>Cerrar</button>
                
                <h2>Por el momento me encuentro en desarrolllo</h2>
                <p>Pero pudes enviarme un mensaje a:</p>
                <p>josue.cazares.10@gmail.com</p>
                <p>5538924729</p>
                {/* <form>
                    <input type="text" placeholder="Nombre" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form> */}

            </div>
        </div>
    )
}