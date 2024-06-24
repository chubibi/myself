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
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{width: 25, height: 25, margin: "1rem" }}><title/><g data-name="1" id="_1"><path d="M255.13,385.54a15,15,0,0,1-11.14-5L103.67,224.93a15,15,0,0,1,11.14-25H171V63a15,15,0,0,1,15-15H324.3a15,15,0,0,1,15,15V199.89h56.16a15,15,0,0,1,11.14,25L266.27,380.58A15,15,0,0,1,255.13,385.54ZM148.53,229.89l106.6,118.25L361.74,229.89H324.3a15,15,0,0,1-15-15V78H201V214.89a15,15,0,0,1-15,15Z"/><path d="M390.84,450H119.43a65.37,65.37,0,0,1-65.3-65.29V346.54a15,15,0,0,1,30,0v38.17A35.34,35.34,0,0,0,119.43,420H390.84a35.33,35.33,0,0,0,35.29-35.29V346.54a15,15,0,0,1,30,0v38.17A65.37,65.37,0,0,1,390.84,450Z"/></g></svg>
                    Descargar CV
                </button>
            </nav>
        </>
    )
}