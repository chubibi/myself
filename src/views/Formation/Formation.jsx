import style from "./css/formation.module.css"
import tesco from "../../../public/img/tesco.jpeg"

export const Formation = () => {
    function handleClick(e) {
        window.location.href = "https://tescoacalco.edomex.gob.mx/"
    }

    function handleClick2(e) {
        window.location.href = "http://www.centrouniversitariovalledeanahuac.com.mx/"
    }

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const nombre = formData.get('nombre')
        const correo = formData.get('correo')
        const mensaje = formData.get('mensaje')

        const subject = `Contacto desde Portfolio - Bienvenido: ${nombre}`
        const body = `Nombre: ${nombre}%0D%0ACorreo: ${correo}%0D%0A%0D%0AMensaje:%0D%0A${mensaje}`

        window.location.href = `mailto:josue.cazares.10@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

        e.target.reset()
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
                <div className={style.educationCard2} onClick={handleClick2}>
                    <div className={style.educationIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
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
                            name="nombre"
                            type="text"
                            placeholder="Nombre"
                            className={style.formInput}
                            required
                        />
                        <input
                            name="correo"
                            type="email"
                            placeholder="Correo"
                            className={style.formInput}
                            required
                        />
                    </div>
                    <textarea
                        name="mensaje"
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