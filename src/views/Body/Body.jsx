import React from "react"
import styles from "./css/body.module.css"
import perfil from "../../../public/img/profiletwo.png"
import { Link } from "react-scroll"
export const Body = () => {
    return (
        <section className={styles.bodySection}>
            <div className={styles.introSection}>
                <h1 style={{fontSize:"2rem", fontWeight:100}}>Hola ✌🏻</h1>
                <span> Soy <span style={{color:"#a6ed8e"}}> Josué Cazares</span><br />Desarrollador de Software</span>
                <p className={styles.introPara}>Especializado por el <strong style={{color:"#a6ed8e"}}>desarrollo Android</strong> con experiencia como <strong style={{color:"#a6ed8e"}}>Full Stack Jr.</strong></p>
                <Link><button className={styles.btnContact}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Email-Send--Streamline-Nova" height="24" width="24"><desc>Email Send Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linejoin="round" stroke-width="2" d="M22.342 12 3.141 1.527c-0.18692 -0.10183 -0.40145 -0.14136 -0.61238 -0.11284 -0.21094 0.02852 -0.40727 0.1236 -0.56043 0.27141 -0.15316 0.14781 -0.25517 0.34064 -0.29117 0.55042 -0.03601 0.20979 -0.00413 0.42559 0.09098 0.61601L6.342 12h16Z"></path><path stroke="#000000" stroke-linejoin="round" stroke-width="2" d="M22.342 12 3.141 22.473c-0.18692 0.1018 -0.40145 0.1414 -0.61238 0.1128 -0.21094 -0.0285 -0.40727 -0.1236 -0.56043 -0.2714 -0.15316 -0.1478 -0.25517 -0.3406 -0.29117 -0.5504 -0.03601 -0.2098 -0.00413 -0.4256 0.09098 -0.616L6.342 12h16Z"></path></svg>
                    Envíame un mensaje</button></Link>
            </div>
            <img src={perfil} alt="logo josué cazares" className={styles.imgPerfil}/>
        </section>
    )
}