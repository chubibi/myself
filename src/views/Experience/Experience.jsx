import style from "./css/experience.module.css"
import p3 from "../../../public/img/p3.png"
import p4 from "../../../public/img/p4.png"

export const Experience = () => {
    const professionalExperience = [
        {
            id: 1,
            role: "Mobile Application Developer / Tech Lead",
            company: "VDE SUITE LATAM",
            period: "Septiembre 2023 - Presente",
            achievements: [
                "Evalué y propuse **React + Vite** como alternativa tecnológica a Odoo, demostrando rendimiento, velocidad de desarrollo, UI/UX y escalabilidad mediante prototipos.",
                "Desarrollé una aplicación web responsive con **React** para un ecosistema deportivo, visualizando estadísticas de fútbol e integrando datos desde Odoo.",
                "Desempeñé el rol de **Tech Lead Mobile**, liderando un equipo en el desarrollo de aplicaciones móviles multiplataforma asociadas al ecosistema deportivo."
            ]
        },
        {
            id: 2,
            role: "Full Stack Engineer",
            company: "BAACC Systems S.A. de C.V.",
            period: "Enero 2022 - Septiembre 2023",
            achievements: [
                "Desarrollé una aplicación web con **React** para un sistema de inventarios (warehouse) en el sector automotriz.",
                "Implementé una aplicación móvil para **handheld Zebra**, permitiendo conteo de racks, salida de mercancía y actualización de stock en tiempo real.",
                "Participé en el diseño **UI/UX**, planeación del MVP y desarrollo integral (frontend y backend) de una plataforma de fletes y envíos con **API REST**."
            ]
        },
        {
            id: 3,
            role: "Junior Android Developer",
            company: "Grupo Salinas - Elektra Ecommerce",
            period: "Junio 2021 - Diciembre 2021",
            achievements: [
                "Realicé monitoreo de estabilidad post-lanzamiento utilizando **Firebase Crashlytics**, analizando y categorizando errores en producción.",
                "Coordiné la validación de fallos críticos con el equipo de **QA** y resolví incidencias técnicas de forma ágil mediante hotfixes."
            ]
        }
    ];

    return (
        <section className={style.experienceSection} id="experience">
            <div className={style.container}>
                <div className={style.header}>
                    <h2 className={style.title}>Experiencia Profesional</h2>
                </div>

                <div className={style.timeline}>
                    {professionalExperience.map((exp) => (
                        <div key={exp.id} className={style.experienceItem}>
                            <div className={style.dot}></div>
                            <div className={style.content}>
                                <div className={style.roleHeader}>
                                    <h3 className={style.roleTitle}>{exp.role}</h3>
                                    <div className={style.companyInfo}>
                                        <span>{exp.company}</span>
                                        <span className={style.divider}>|</span>
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <ul className={style.achievementsList}>
                                    {exp.achievements.map((achievement, index) => (
                                        <li
                                            key={index}
                                            className={style.achievement}
                                            dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}