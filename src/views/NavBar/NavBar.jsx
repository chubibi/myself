import React, { useState } from "react"
import { Link } from "react-scroll"
import style from "./css/navBar.module.css"

export function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio")

    const handleSetActive = (section) => {
        setActiveSection(section)
    }

    return (
        <>
            <nav className={style.navbarContainer}>
                <div className={style.menuLeft}>
                    <Link
                        to="inicio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        onSetActive={() => handleSetActive("inicio")}
                    >
                        <button className={`${style.btnMenu} ${activeSection === "inicio" ? style.active : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928z" />
                                <path d="M7 13v4h10v-4l-5 -5" />
                                <path d="M14.8 5.2l-11.8 11.8" />
                                <path d="M7 17v4" />
                                <path d="M17 17v4" />
                            </svg>
                            <span className={style.btnText}>Inicio</span>
                        </button>
                    </Link>

                    <Link
                        to="sobre-mi"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        onSetActive={() => handleSetActive("sobre-mi")}
                    >
                        <button className={`${style.btnMenu} ${activeSection === "sobre-mi" ? style.active : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className={style.btnText}>Sobre mí</span>
                        </button>
                    </Link>

                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        onSetActive={() => handleSetActive("experience")}
                    >
                        <button className={`${style.btnMenu} ${activeSection === "experience" ? style.active : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="4" width="18" height="4" rx="2" />
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                                <line x1="10" y1="12" x2="14" y2="12" />
                            </svg>
                            <span className={style.btnText}>Experiencia</span>
                        </button>
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        onSetActive={() => handleSetActive("contact")}
                    >
                        <button className={`${style.btnMenu} ${activeSection === "contact" ? style.active : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                            <span className={style.btnText}>Contacto</span>
                        </button>
                    </Link>
                </div>

                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    <button className={style.btnHire}>
                        Contáctame
                    </button>
                </Link>
            </nav>
        </>
    )
}