import { NavBar } from './views/NavBar/NavBar'
import { Body } from './views/Body/Body'
import { Experience } from './views/Experience/Experience'
import { Formation } from './views/Formation/Formation'
import { Footer } from './views/Footer/Footer'
import About from './views/About/About'
import { FloatingWhatsApp } from "react-floating-whatsapp"
import Contact from './views/Contact/Contact'
import me from "/img/me.png"

export default function App() {
    return (
        <div>
            <NavBar />
            <Body />
            <Experience />
            <About />
            <Formation />
            <Contact />
            <Footer />
            <FloatingWhatsApp
                phoneNumber="+525538924729"
                accountName="Josué Cazares"
                avatar={me}
                statusMessage="Disponible para charlar"
                chatMessage="¡Hola! 👋 ¿Tienes alguna idea o proyecto en mente? Escríbeme."
                placeholder="Escribe un mensaje..."
                darkMode={true}
                allowClickAway={true}
                allowEsc={true}
            />
        </div>
    )
}