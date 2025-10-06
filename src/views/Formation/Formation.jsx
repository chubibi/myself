import style from "./css/formation.module.css"
import tesco from "../../../public/img/tesco.jpeg"

export const Formation = () => {
    function handleClick(e) {
        window.location.href = "https://tescoacalco.edomex.gob.mx/"
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert("Mensaje enviado con éxito!")
    }

    return (
        <section className={style.wrapperMain}>
            <div className={style.formationSection}>
                <div className={style.sectionHeader}>
                    <span className={style.badge}>
                        <span className={style.badgeDot}></span>
                        Formación Académica
                    </span>
                </div>

                <div className={style.educationCard} onClick={handleClick}>
                    <div className={style.educationIcon}>
                        <img src={tesco} alt="TESCo" />
                    </div>
                    <div className={style.educationContent}>
                        <h3 className={style.educationTitle}>
                            Tecnológico de Estudios Superiores de Coacalco
                        </h3>
                        <p className={style.educationDegree}>
                            Ing. Tecnologías de la Información y la Comunicación
                        </p>
                        <p className={style.educationYears}>2017 - 2022</p>
                    </div>
                    <button className={style.arrowBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className={style.educationCard2} onClick={handleClick}>
                    <div className={style.educationIcon}>
                        <img src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrjJ5oI-UQyJIU7pSOCKz2tD6T58EXUHFOLuVfRP9mP33fuJYmWQz8YnGWaMOnzMpklL66QPGodeAJrfSCHNBVQ5HwQtjhyIHLrlRxYpYp7fSo2vJO6lN1Th5aB6NgfbhxCCZDU=s680-w680-h510-rw" alt="CUVA" />
                    </div>
                    <div className={style.educationContent}>
                        <h3 className={style.educationTitle}>
                            Centro Universitario Valle de Anáhuac
                        </h3>
                        <p className={style.educationDegree}>
                            Lic. Idiomas
                        </p>
                        <p className={style.educationYears}>2023 - En curso</p>
                    </div>
                    <button className={style.arrowBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={style.contactSection} id="contact">
                <div className={style.contactHeader}>
                    <div className={style.headerBadges}>
                        <span className={style.badge}>
                            <span className={style.badgeDot}></span>
                            Mobile Developer
                        </span>
                        <span className={style.badgeAvailable}>
                            <span className={style.badgeDotGreen}></span>
                            Disponible para trabajar
                        </span>
                    </div>
                    <h2 className={style.contactTitle}>¿Tienes una idea?</h2>
                    <p className={style.contactDescription}>
                        Si te ha gustado mi trabajo, puedes enviarme un correo para que te pongamos en contacto.
                    </p>
                </div>

                <form className={style.contactForm} onSubmit={handleSubmit}>
                    <div className={style.formRow}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className={style.formInput}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Correo"
                            className={style.formInput}
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Mensaje"
                        className={style.formTextarea}
                        rows={6}
                        required
                    ></textarea>
                    <button type="submit" className={style.submitBtn}>
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}