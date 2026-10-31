import styles from './css/experience.module.css'
import { JOBS, STACK, duration, formatMonth } from '../../data/experience'
import { getProject } from '../../data/projects'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { StatusIndicator } from '../../components/StatusIndicator/StatusIndicator'

/*
 * Experiencia — patrón de lectura "layer-cake":
 * cada puesto repite la misma estructura (fecha → rol → empresa → 2-3 viñetas → stack)
 * para que se pueda escanear de arriba abajo en móvil sin leer párrafos.
 */

function StackCard() {
    return (
        <section className={styles.stackCard} aria-labelledby="stack-title">
            <h3 id="stack-title" className={styles.stackTitle}>Stack principal</h3>
            <dl className={styles.stackList}>
                {STACK.map(group => (
                    <div key={group.area} className={styles.stackRow}>
                        <dt className={styles.stackArea}>{group.area}</dt>
                        <dd>
                            <ul className={styles.stackItems}>
                                {group.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </dd>
                    </div>
                ))}
            </dl>
        </section>
    )
}

function Job({ job }) {
    const current = job.end === null
    const projects = job.projects.map(getProject).filter(Boolean)

    return (
        <li className={styles.job} data-current={current || undefined}>
            <span className={styles.dot} aria-hidden="true" />

            <div className={styles.when}>
                <span className={styles.period}>
                    {formatMonth(job.start)} – {current ? 'Actualidad' : formatMonth(job.end)}
                </span>
                <span className={styles.duration}>{duration(job.start, job.end)}</span>
            </div>

            <article className={styles.body} aria-labelledby={`job-${job.id}`}>
                <div className={styles.titleRow}>
                    <h3 id={`job-${job.id}`} className={styles.role}>{job.role}</h3>
                    {current && <StatusIndicator tone="active" variant="tag">Actual</StatusIndicator>}
                </div>
                <p className={styles.company}>
                    {job.company}<span aria-hidden="true"> · </span>
                    <span className={styles.location}>{job.location}</span>
                </p>

                <ul className={styles.highlights}>
                    {job.highlights.map(h => <li key={h}>{h}</li>)}
                </ul>

                <ul className={styles.tags} aria-label={`Stack en ${job.company}`}>
                    {job.stack.map(t => <li key={t} className={styles.tag}>{t}</li>)}
                </ul>

                {projects.length > 0 && (
                    <p className={styles.projects}>
                        <span className={styles.projectsLabel}>Proyectos</span>
                        {projects.map(p => (
                            <a key={p.id} href={`#project-${p.id}`} className={styles.projectLink}>
                                {p.name} <span aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </p>
                )}
            </article>
        </li>
    )
}

export const Experience = () => {
    const firstYear = JOBS[JOBS.length - 1].start.slice(0, 4)

    return (
        <section className={styles.section} id="experience" aria-labelledby="experience-heading">
            <header className={styles.header}>
                <SectionLabel index="02" meta={`${JOBS.length} empresas · ${firstYear} – hoy`}>
                    Experiencia
                </SectionLabel>
                <h2 id="experience-heading" className={styles.title}>
                    4 años llevando productos a&nbsp;producción.
                </h2>
            </header>

            <div className={styles.layout}>
                <StackCard />

                <ol className={styles.timeline} aria-label="Historial laboral">
                    {JOBS.map(job => <Job key={job.id} job={job} />)}
                </ol>
            </div>
        </section>
    )
}
