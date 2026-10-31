/* ==========================================================================
   Proyectos — fuente única de contenido para Hero, Selected Work y Spotlight.

   Fuentes verificadas (oct 2026):
   - context.md (rol y logros por empresa)
   - dexmi.net, vde-connect.vde-suite.com, Google Play (com.vde.vdeconnect),
     j2r-studio.josue-cazares-10.workers.dev, cuva-website-c5dae.web.app
   - Capturas reales en /public/<proyecto>/ (versiones optimizadas en /public/work/)

   Regla: no añadir métricas, roles ni tecnologías sin fuente. Si falta un dato,
   deja el campo en null: la UI oculta la fila en lugar de inventarla.
   ========================================================================== */

import { asset } from '../utils/asset'

/*
 * Captura optimizada (WebP codificado con Chrome, en /public/work).
 * `sources` queda disponible para formatos alternativos si se necesitan.
 */
const shot = (name, width, height) => ({
    sources: [],
    src: asset(`work/${name}.webp`),
    width,
    height,
})

const PHONE = [600, 1304]

export const PROJECTS = [
    {
        id: 'dexmi',
        index: '01',
        name: 'DexMi Sports',
        category: 'Plataforma deportiva · Ecosistema web',
        org: 'VDE Suite LATAM',
        // TODO(owner): confirmar año de inicio del MVP.
        year: '2025 – hoy',
        status: { tone: 'positive', label: 'En producción' },
        summary: 'Ecosistema digital de fútbol y básquetbol para jugadores, clubes y ligas en LATAM.',
        role: 'Tech Lead Frontend',
        highlights: [
            'Arquitectura base del MVP',
            'Reglas de negocio y roadmap',
            'De cero a ecosistema web',
        ],
        stack: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
        feature: {
            title: '6 productos, 1 ecosistema',
            text: 'Pass, Draft, Clubs, Scorer, Ligas y Stats: un producto por cada rol.',
        },
        metrics: [
            { value: '+10', label: 'Ligas' },
            { value: '+3k', label: 'Jugadores' },
        ],
        metricsSource: 'Cifras publicadas en dexmi.net · oct 2026',
        links: [{ label: 'Visitar dexmi.net', href: 'https://dexmi.net/' }],
        media: {
            laptop: {
                sources: [],
                src: asset('dexmi/product-laptop-800.webp'),
                width: 800,
                height: 642,
                alt: 'Captura real de DexMi Sports en escritorio: perfil de jugador con datos personales, valoración y pestañas de equipos y estadísticas.',
            },
            phone: {
                sources: [],
                src: asset('dexmi/product-phone.webp'),
                width: 359,
                height: 745,
                alt: 'Captura real de DexMi Sports en móvil: perfil de jugador con ranking de 4.8 estrellas y aviso de Draft habilitado.',
            },
        },
    },
    {
        id: 'vde-connect',
        index: '02',
        name: 'VDE Connect',
        category: 'App móvil empresarial · Control de asistencia',
        org: 'VDE Suite LATAM',
        year: '2025 – 2026',
        status: { tone: 'positive', label: 'Publicada en Google Play' },
        summary: 'Asistencia laboral en un toque: Check In y Check Out con validación de ubicación.',
        problem: 'Digitalizar la asistencia de toda la oficina, incluidas las jornadas híbridas.',
        solution: [
            'Check In / Out validado por radio',
            'Historial con puntualidad',
            'Calendario Oficina / Home Office',
            'Salidas pendientes y notificaciones',
            'Sincronizada con Odoo ERP',
        ],
        role: 'Lideré el desarrollo móvil: arquitectura MVVM, builds con EAS y publicación en Google Play.',
        stack: ['React Native', 'Expo', 'EAS', 'Zustand', 'TanStack Query', 'Firebase App Distribution'],
        results: [
            'Asistencia de toda la oficina digitalizada',
            'Publicada en Google Play',
        ],
        metrics: [
            { value: '5.0', label: 'Calificación en Google Play', detail: '5 opiniones' },
        ],
        metricsSource: 'Google Play · consultado 31 oct 2026',
        links: [
            { label: 'Ver en Google Play', href: 'https://play.google.com/store/apps/details?id=com.vde.vdeconnect', store: 'googleplay' },
            { label: 'Landing del producto', href: 'https://vde-connect.vde-suite.com/' },
        ],
        /* Pantallas del Spotlight (tabs funcionales) */
        screens: [
            {
                id: 'checkin',
                label: 'Check-in',
                ...shot('vde-home-office', ...PHONE),
                alt: 'Pantalla de inicio de VDE Connect en Modo Oficina: radio de 45 m, mensaje "Estás dentro del radio permitido", hora de entrada 9:06 a.m. registrada y salida pendiente.',
                caption: 'Modalidad del día y validación por radio antes de registrar.',
            },
            {
                id: 'radius',
                label: 'Fuera de radio',
                ...shot('vde-home-outside', ...PHONE),
                alt: 'Pantalla de inicio de VDE Connect en modo oscuro con Trabajo en Casa, radio de 40 m y aviso "Estás fuera del radio permitido".',
                caption: 'Fuera del radio asignado, la app lo avisa al instante.',
            },
            {
                id: 'history',
                label: 'Historial',
                ...shot('vde-history', ...PHONE),
                alt: 'Historial de asistencia semanal de agosto 2026: 11 registros a tiempo, 3 tardíos, con horas de entrada, salida y horas trabajadas por día.',
                caption: 'Entrada, salida, horas trabajadas y puntualidad por día.',
            },
            {
                id: 'calendar',
                label: 'Calendario',
                ...shot('vde-calendar', ...PHONE),
                alt: 'Calendario mensual de asignación de ubicación con detalle del 19 de agosto: modalidad Home Office.',
                caption: 'Modalidad Oficina o Home Office asignada a cada día.',
            },
            {
                id: 'login',
                label: 'Acceso',
                ...shot('vde-login', ...PHONE),
                alt: 'Pantalla de inicio de sesión de VDE Connect con campos de correo corporativo y contraseña.',
                caption: 'Acceso con credenciales corporativas.',
            },
        ],
    },
    {
        id: 'cuva',
        index: '03',
        name: 'CUVA',
        category: 'Sitio web institucional · Freelance',
        org: 'Proyecto freelance',
        // Sin año por decisión del propietario.
        year: null,
        status: { tone: 'positive', label: 'En línea' },
        summary: 'Sitio institucional responsivo para aspirantes y familias.',
        role: 'Freelance · desarrollo del sitio',
        highlights: [
            'Oferta académica por nivel',
            'Acceso directo a inscripciones',
            'Diseño responsivo móvil',
        ],
        stack: ['React', 'React Router', 'Firebase Hosting'],
        feature: {
            title: 'Planteles a un toque',
            text: 'Cada campus con contacto, horarios y ruta en Google Maps.',
        },
        metrics: [],
        links: [{ label: 'Visitar sitio', href: 'https://cuva-website-c5dae.web.app/' }],
        media: {
            desktop: {
                ...shot('cuva-home', 1400, 965),
                alt: 'Captura real del sitio de CUVA en escritorio: portada "Bienvenidos" con botones Conócenos e Inscripciones y sección de raíces náhuatl.',
            },
            phone: {
                ...shot('cuva-campus', ...PHONE),
                alt: 'Captura real del sitio de CUVA en móvil: ficha del Campus Coacalco con oferta educativa, dirección, teléfono y botón para llegar en Google Maps.',
            },
        },
    },
    {
        id: 'j2r',
        index: '04',
        name: 'J2R Studio',
        category: 'Catálogo de moda · Proyecto propio',
        org: 'Proyecto propio',
        year: '2026',
        status: { tone: 'active', label: 'En desarrollo' },
        summary: 'Catálogo de ropa de marca original con pedidos por WhatsApp.',
        role: 'Proyecto propio · diseño, desarrollo y despliegue',
        highlights: [
            'Filtros por talla, marca y existencia',
            'Búsqueda rápida',
            'Pedido directo por WhatsApp',
        ],
        stack: ['React', 'Vite', 'Cloudflare Workers'],
        feature: {
            title: 'Guía de tallas en 3D',
            text: 'Modelo giratorio con medidas reales de pecho y largo por talla.',
        },
        metrics: [],
        links: [{ label: 'Ver catálogo', href: 'https://j2r-studio.josue-cazares-10.workers.dev/' }],
        media: {
            screens: [
                {
                    ...shot('j2r-catalog', ...PHONE),
                    alt: 'Captura real de J2R Studio: portada "Productos de marca original" y catálogo con filtros Todo, Novedades, Hombre y Mujer.',
                },
                {
                    ...shot('j2r-detail', ...PHONE),
                    alt: 'Captura real de J2R Studio: detalle de producto Essentials Logo 3D, precio $700, selector de color y tallas sobre pedido.',
                },
                {
                    ...shot('j2r-size', ...PHONE),
                    alt: 'Captura real de J2R Studio: guía de tallas con modelo 3D de playera y medidas de pecho 51 cm y largo 71 cm para talla M.',
                },
            ],
        },
    },
]

/* Proyectos secundarios: listado compacto, sin presentación editorial */
export const ARCHIVE = [
    {
        id: 'apptus',
        name: 'Apptus Mobile',
        category: 'App móvil · React Native + Expo',
        status: { tone: 'active', label: 'En desarrollo' },
        href: 'https://github.com/chubibi/Apptus#-aptus--interactive-mobile-engineer-portfolio',
        linkLabel: 'Repositorio',
    },
]

export const getProject = id => PROJECTS.find(p => p.id === id)
