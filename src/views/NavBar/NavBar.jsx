import React from "react"
import logo from "../../../public/img/jc.png"
import cv from "../../../public/img/cv.png"
import { Link } from "react-scroll"
import style from "./css/navBar.module.css"
export function NavBar() {
    return (
        <>
            <nav className={style.navbarContainer}>
                <img src={logo} alt="logo josué cazares" style={{ width: "8rem", height: "10rem", objectFit: "cover" }} />
                <section className="wrappermenu">
                    <Link className={style.menuItem}>Inicio</Link>
                    <Link className={style.menuItem}>Sobre mí</Link>
                    <Link className={style.menuItem}>Experiencia</Link>
                    <Link className={style.menuItem}>Contactame</Link>
                </section>
                <button className={style.btnCV}>
                    <img src={cv} alt="Imagen de CV" style={{ width: 25, height: 25, margin: "1rem" }} />
                    Descargar CV
                </button>
            </nav>
        </>
    )
}