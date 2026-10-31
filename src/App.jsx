import { lazy, Suspense, useEffect, useState } from 'react'
import { NavBar } from './views/NavBar/NavBar'
import { Body } from './views/Body/Body'
import { Work } from './views/Work/Work'
import { Experience } from './views/Experience/Experience'
import { Footer } from './views/Footer/Footer'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import me from '/img/me.png'
import { PROFILE } from './data/profile'

/*
 * El widget de WhatsApp pesa ~300 KB (incrusta imágenes en base64).
 * Se carga en un chunk aparte cuando el navegador queda libre para no
 * retrasar el primer render.
 */
const FloatingWhatsApp = lazy(() =>
    import('react-floating-whatsapp').then(m => ({ default: m.FloatingWhatsApp }))
)

function useWhenIdle() {
    const [ready, setReady] = useState(false)
    useEffect(() => {
        const run = () => setReady(true)
        if ('requestIdleCallback' in window) {
            const id = window.requestIdleCallback(run, { timeout: 3000 })
            return () => window.cancelIdleCallback(id)
        }
        const t = setTimeout(run, 1500)
        return () => clearTimeout(t)
    }, [])
    return ready
}

/*
 * La librería del widget no expone props de accesibilidad: se añaden nombres
 * accesibles a su campo y a su botón de envío una vez montado.
 */
function useWhatsAppA11y(enabled) {
    useEffect(() => {
        if (!enabled) return
        let tries = 0
        const id = setInterval(() => {
            const root = document.querySelector('.custom-whatsapp')
            if (root) {
                root.querySelector('textarea, input')?.setAttribute('aria-label', 'Mensaje para WhatsApp')
                root.querySelector('button[type="submit"]')?.setAttribute('aria-label', 'Enviar mensaje por WhatsApp')
            }
            if (root || ++tries > 20) clearInterval(id)
        }, 250)
        return () => clearInterval(id)
    }, [enabled])
}

export default function App() {
    const showWhatsApp = useWhenIdle()
    useWhatsAppA11y(showWhatsApp)

    return (
        <>
            <a href="#contenido" className="skip-link">Saltar al contenido</a>
            <NavBar />
            <main id="contenido" tabIndex={-1}>
                <Body />
                <Work />
                <Experience />
                <About />
                <Contact />
            </main>
            <Footer />
            {showWhatsApp && (
                <Suspense fallback={null}>
                    <FloatingWhatsApp
                        phoneNumber={PROFILE.phone}
                        accountName={PROFILE.name}
                        avatar={me}
                        statusMessage="Disponible para charlar"
                        chatMessage="¡Hola! 👋 ¿Tienes alguna idea o proyecto en mente? Escríbeme."
                        placeholder="Escribe un mensaje..."
                        darkMode={true}
                        allowClickAway={true}
                        allowEsc={true}
                        className="custom-whatsapp"
                    />
                </Suspense>
            )}
        </>
    )
}
