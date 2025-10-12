import style from "./css/experience.module.css"
import p3 from "../../../public/img/p3.png"
import p4 from "../../../public/img/p4.png"

export const Experience = () => {
    const projects = [
        {
            id: 1,
            name: "Android Developer Junior",
            description: "Elektra App (1 año) - Grupo Salinas.",
            url: "https://play.google.com/store/apps/details?id=mx.elektra.appelektra&hl=es_MX",
            image: "https://play-lh.googleusercontent.com/SawHLVclRkAUqtPG7ylq4gcpav0gHyJhN5s6gTk--1cEIK3GfIE3QaFEiM6xDRGtHic=w2560-h1440-rw",
            bgColor: "#6366f1"
        },
        {
            id: 2,
            name: "Sitio Web CUVA - Centro Universitario Valle de Anáhuac",
            description: "Desarrollo web, Frontend con React y TypeScript.",
            url: "http://www.centrouniversitariovalledeanahuac.com.mx/",
            image: "https://0201.nccdn.net/1_2/000/000/0d8/a75/pagina-web-2_013.png",
            bgColor: "#1f2937"
        },
        {
            id: 3,
            name: "React Native Junior",
            description: "Flego Tu Flete de Regreso - App para Android y iOS",
            url: "https://apps.apple.com/mx/app/flego-tu-flete-de-regreso/id6746598808?l=en-GB",
            image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0b/53/46/0b534606-ae0c-f8e7-0235-36b7ebdfa952/appstore-05.jpg/230x0w.webp",
            bgColor: "#f97316"
        },
        {
            id: 4,
            name: "DexMi Net",
            description: "Desarrollo web, React, TypeScript",
            url: "https://dexmi.net/",
            image: "https://dexmi.net/assets/dexmi-TJFUuUp8.png",
            bgColor: "#8b5cf6"
        }
    ];

    const handleProjectClick = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <section className={style.experienceSection} id="experience">
            <div className={style.container}>
                <div className={style.header}>
                    <h2 className={style.title}>Mi experiencia profesional</h2>
                    <button className={style.viewAllBtn}>
                        Ver todo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className={style.projectsList}>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`${style.projectCard} ${project.url ? style.clickable : ''}`}
                            onClick={() => handleProjectClick(project.url)}
                        >
                            <div className={style.projectIcon} style={{ backgroundColor: project.bgColor }}>
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className={style.projectInfo}>
                                <h3 className={style.projectName}>{project.name}</h3>
                                <p className={style.projectDescription}>{project.description}</p>
                            </div>
                            {project.url && (
                                <button className={style.arrowBtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}