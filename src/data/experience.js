/* ==========================================================================
   Experiencia laboral y stack — fuente: context.md y contenido previo del sitio.
   Fechas en formato 'AAAA-MM'. `end: null` = puesto actual (la duración se
   calcula al vuelo para no quedar desactualizada).
   ========================================================================== */

/* Stack principal agrupado por área (context.md + stack de proyectos reales) */
export const STACK = [
    { area: 'Mobile', items: ['React Native', 'Expo', 'Android', 'Kotlin', 'Java'] },
    { area: 'Web', items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS'] },
    { area: 'Estado y arquitectura', items: ['MVVM', 'Zustand', 'TanStack Query'] },
    { area: 'Backend y entrega', items: ['APIs REST', 'Firebase', 'EAS', 'Git', 'CI/CD'] },
]

export const JOBS = [
    {
        id: 'vde',
        role: 'Tech Lead Frontend',
        company: 'VDE Suite LATAM',
        location: 'Edo. de México',
        start: '2025-03',
        end: null,
        highlights: [
            'Arquitectura del MVP de DexMi con React + Vite',
            'VDE Connect publicada en Google Play',
            'Reglas de negocio y roadmap de producto',
        ],
        stack: ['React', 'React Native', 'Expo', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
        projects: ['dexmi', 'vde-connect'],
    },
    {
        id: 'baacc',
        role: 'Full Stack Engineer',
        company: 'BAACC Systems',
        location: 'Edo. de México',
        start: '2023-04',
        end: '2024-11',
        highlights: [
            'App Android (Java) para handhelds Zebra: inventario y salidas',
            'Sistema de inventarios web para el sector automotriz',
            'MVP de fletes: UI/UX y APIs REST',
        ],
        stack: ['Android', 'Java', 'React', 'React Native', 'Kotlin', 'APIs REST'],
        projects: [],
    },
    {
        id: 'elektra',
        role: 'Android Developer',
        company: 'Elektra Ecommerce · Grupo Salinas',
        location: 'CDMX',
        start: '2022-08',
        end: '2023-02',
        highlights: [
            'Monitoreo de errores en producción con Crashlytics',
            'Validación de fallos críticos con QA y hotfixes',
        ],
        stack: ['Android', 'Kotlin', 'Firebase', 'Crashlytics'],
        projects: [],
    },
]

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

const parse = ym => {
    const [y, m] = ym.split('-').map(Number)
    return { y, m }
}

export const formatMonth = ym => {
    const { y, m } = parse(ym)
    return `${MONTHS[m - 1]} ${y}`
}

/* Duración inclusiva en años y meses (ej. Abr 2023 – Nov 2024 = 1 año 8 meses) */
export function duration(start, end, today = new Date()) {
    const a = parse(start)
    const b = end ? parse(end) : { y: today.getFullYear(), m: today.getMonth() + 1 }
    const total = (b.y - a.y) * 12 + (b.m - a.m) + 1
    const years = Math.floor(total / 12)
    const months = total % 12
    const parts = []
    if (years) parts.push(`${years} ${years === 1 ? 'año' : 'años'}`)
    if (months) parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`)
    return parts.join(' ')
}
