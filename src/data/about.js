/* ==========================================================================
   Sobre mí, formación y certificaciones — fuente: context.md, contenido previo
   del sitio y certificado verificado en ia.appcademy.dev (28 sep 2026).
   ========================================================================== */
import { asset } from '../utils/asset'

export const PORTRAIT = {
    src: asset('about/josue-portrait.webp'),
    width: 600,
    height: 749,
    alt: 'Fotografía de Josué Cazares al aire libre, con lentes de sol y playera gris.',
}

/* Capacidades: qué problema resuelve cada área (sin porcentajes ni barras) */
export const CAPABILITIES = [
    { title: 'Mobile Engineering', text: 'Apps con React Native + Expo y Android nativo, de la arquitectura a la tienda.' },
    { title: 'Frontend Web', text: 'Plataformas React + Vite responsivas, del MVP al ecosistema.' },
    { title: 'Liderazgo técnico', text: 'Reglas de negocio, roadmap y decisiones de arquitectura con el equipo.' },
    { title: 'UI/UX de producto', text: 'Flujos e interfaces para MVPs de logística, asistencia y comercio.' },
]

export const DEGREES = [
    {
        id: 'tesco',
        field: 'Ingeniería',
        degree: 'Ing. en Tecnologías de la Información',
        school: 'Tecnológico de Estudios Superiores de Coacalco',
        acronym: 'TESCo',
        // Sin logo oficial disponible: se muestran las siglas tipográficas.
        logo: null,
        period: '2017 – 2022',
        detail: 'Especialidad en Dispositivos Móviles',
        tags: ['Android', 'Kotlin', 'Desarrollo móvil'],
        url: 'https://tescoacalco.edomex.gob.mx/',
    },
    {
        id: 'cuva',
        field: 'Idiomas',
        degree: 'Lic. en Idiomas y Traducción',
        school: 'Centro Universitario Valle de Anáhuac',
        acronym: 'CUVA',
        logo: { src: asset('about/cuva-logo.webp'), width: 560, height: 294 },
        period: '2023 – 2026',
        detail: 'Inglés · Francés · Italiano',
        tags: ['Inglés', 'Francés', 'Italiano', 'Traducción'],
        url: 'http://www.centrouniversitariovalledeanahuac.com.mx/',
    },
]

export const FEATURED_CERT = {
    title: 'Spec-Driven Mobile Development',
    issuer: 'appcademy · AristiDevs',
    date: '28 sep 2026',
    code: 'RPVY-D6GV',
    url: 'https://ia.appcademy.dev/c/RPVY-D6GV',
    image: {
        src: asset('about/cert-spec-driven-mobile.webp'),
        width: 800,
        height: 451,
        alt: 'Captura del certificado de finalización Spec-Driven Mobile Development otorgado a Josué Isaías Cazares Pérez por appcademy, expedido el 28 de septiembre de 2026.',
    },
}

export const CERTS = [
    { title: 'Scrum Foundation Professional Certificate', short: 'SFPC', issuer: 'CertiProf', detail: 'ID 78465851' },
    { title: 'SoftSkills Program', short: 'SSP', issuer: 'Develop Talent & Technology', detail: null },
    { title: 'Bootcamp Android Developer', short: 'AND', issuer: 'Especialización en desarrollo nativo', detail: null },
]

export const LANGUAGES = ['Español', 'Inglés', 'Francés', 'Italiano']
