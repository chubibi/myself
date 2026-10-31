/*
 * Ruta a un archivo de /public respetando el `base` de Vite.
 * vite.config define `base` sin '/' final, por eso se normaliza aquí.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/')

export const asset = path => `${BASE}${path.replace(/^\//, '')}`
