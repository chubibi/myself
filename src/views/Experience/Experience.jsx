import style from "./css/experience.module.css"
import p1 from "../../../public/img/p1.png"
import p2 from "../../../public/img/py2.png"
import p3 from "../../../public/img/p3.png"
import p4 from "../../../public/img/p4.png"

export const Experience = () => {
    const projects = [
        {
            id: 1,
            name: "E-commerce Platform",
            description: "Mobile app, UI/UX design",
            image: p1,
            bgColor: "#6366f1"
        },
        {
            id: 2,
            name: "Health Tracker",
            description: "Android development, Backend",
            image: p2,
            bgColor: "#1f2937"
        },
        {
            id: 3,
            name: "Food Delivery",
            description: "React Native, API Integration",
            image: p3,
            bgColor: "#f97316"
        },
        {
            id: 4,
            name: "Finance Manager",
            description: "iOS app, Kotlin Multiplatform",
            image: p4,
            bgColor: "#8b5cf6"
        }
    ];

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
                        <div key={project.id} className={style.projectCard}>
                            <div className={style.projectIcon} style={{ backgroundColor: project.bgColor }}>
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className={style.projectInfo}>
                                <h3 className={style.projectName}>{project.name}</h3>
                                <p className={style.projectDescription}>{project.description}</p>
                            </div>
                            <button className={style.arrowBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}