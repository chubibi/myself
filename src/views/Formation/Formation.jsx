import style from "./css/formation.module.css"
import tesco from "../../../public/img/tesco.jpeg"
export const Formation = () => {
    return (
        <section className={style.wrapperMain}>
            <div className={style.containerFormation}>
                <h1>Formación</h1>
                <div className={style.cardSchool}>
                    <div>
                        <h2>TESCo: Tecnológico de Estudios Superiores de Coacalco.</h2>
                        <p>Ing. Tecnologías de la Información y la Comunicación.</p>
                        <p>Generación: 2017 - 2022</p>
                    </div>
                    <img src={tesco} alt="Imagen Escuela" />
                </div>
            </div>
            <div className={style.headerContact}>
                <h1>Contacto</h1>
                <span>Por favor enviame un mensaje si te ha gustado mi trabajo, estoy disponible a nuevos retos.</span>
            </div>
            <div className={style.containerContact}>
                <div className={style.contactInfo}>
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" height={24}><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" /></svg>
                    <p>josue.cazares.10@gmail.com</p>
                    <svg enable-background="new 0 0 48 48" height="32px" id="Layer_3" version="1.1" viewBox="0 0 48 48" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9,0v48h30V34.375v-2.438V15v-2V0H9z M24,43.959c-1.104,0-2-0.896-2-2s0.896-2,2-2c1.105,0,2,0.896,2,2  S25.105,43.959,24,43.959z M35,15v16.938v2.438V36H13V4h22v9V15z" fill="#241F20" /></svg>
                    <p>5538924729</p>
                </div>
                <form className={style.contactForm}>
                    <input type="text" placeholder="Ingresa tu nombre" required />
                    <input type="email" placeholder="Ingresa tu email" required />
                    <textarea name="message" placeholder="Ingresa tu mensaje" rows={5} required></textarea>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}