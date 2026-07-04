import styles from './css/about.module.css'
import meImg from '/img/josue.jpg'

export default function About() {
    return (
        <section className={styles.section} id="sobre-mi" aria-label="Sección sobre mí">
            <div className={styles.inner}>

                {/* ── Columna izquierda: texto (Lectura en Z) ── */}
                <div className={styles.textCol}>
                    <span className={styles.eyebrow} aria-hidden="true">Acerca de mi</span>

                    <h2 className={styles.title}>
                        Conoce quién<br />soy yo
                    </h2>

                    <p className={styles.lead}>Mi trayectoria en pocas palabras</p>

                    <p className={styles.body}>
                        Soy Josué Cazares, Software Developer &amp; Tech Lead con{' '}
                        <strong>4 años de experiencia</strong> construyendo productos
                        comerciales en producción. Me especializo en el ecosistema mobile —
                        React Native, Expo y Android Nativo — y en web responsivo con React
                        + Vite.
                    </p>

                    <p className={styles.body}>
                        He trabajado desde startups hasta corporativos como{' '}
                        <strong>Grupo Salinas · Elektra</strong>, pasando por plataformas
                        logísticas y ecosistemas deportivos. Disfruto liderar equipos
                        técnicos, proponer arquitecturas escalables y resolver problemas
                        complejos con soluciones simples y elegantes.
                    </p>

                    <p className={styles.body}>
                        Fuera del código soy políglota: hablo español, inglés, francés e
                        italiano, y tengo formación en Traducción además de Ingeniería en TI.
                    </p>

                    <a
                        href="mailto:josue.cazares.10@gmail.com"
                        className={styles.btnOutline}
                        title="Enviar correo a Josué Cazares"
                        aria-label="Contáctame enviando un correo a Josué Cazares"
                    >
                        Contáctame →
                    </a>
                </div>

                {/* ── Columna derecha: polaroid ── */}
                <div className={styles.photoCol}>
                    <div className={styles.polaroidWrap}>
                        <div className={styles.polaroid}>
                            <img src={meImg} alt="Retrato de Josué Cazares" className={styles.photo} loading="lazy" />
                        </div>

                        {/* Etiqueta flotante */}
                        <div className={styles.nameTag} aria-hidden="true">
                            Josué Cazares
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}