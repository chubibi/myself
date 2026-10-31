/* ==========================================================================
   Datos de perfil compartidos (header, hero, contacto, footer).
   Fuente: context.md y contenido existente del portafolio.
   Mantén aquí la información de contacto para no duplicarla en componentes.
   ========================================================================== */

export const PROFILE = {
    name: 'Josué Cazares',
    fullName: 'Josué Isaías Cazares Pérez',
    title: 'Software & Mobile Developer',
    location: 'Estado de México, MX',
    email: 'josue.cazares.10@gmail.com',
    phone: '+525538924729',
    phoneDisplay: '55 3892 4729',
    linkedin: 'https://linkedin.com/in/josué-isaías-cazares-pérez-2697481b7/',
    github: 'https://github.com/chubibi',
    whatsapp: 'https://wa.me/525538924729',
    available: true,
    // TODO(owner): añadir URL del CV en PDF cuando exista (ej. '/CV/josue-cazares.pdf').
    cvUrl: null,
}

/*
 * Navegación principal. `id` debe coincidir con el id de la sección destino.
 * El índice se usa también en los SectionLabel para mantener una sola numeración.
 */
export const NAV_LINKS = [
    { id: 'proyectos', label: 'Proyectos', index: '01' },
    { id: 'experience', label: 'Experiencia', index: '02' },
    { id: 'sobre-mi', label: 'Sobre mí', index: '03' },
]

export const CONTACT_SECTION_ID = 'contact'
