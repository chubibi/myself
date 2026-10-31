import styles from './css/work.module.css'
import { PROJECTS, ARCHIVE, getProject } from '../../data/projects'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { ProjectFeature } from '../../components/ProjectFeature/ProjectFeature'
import { Picture, PhoneFrame, LaptopFrame, MediaTag } from '../../components/ProjectMedia/ProjectMedia'
import { StatusIndicator } from '../../components/StatusIndicator/StatusIndicator'
import { ArrowUpRight } from '../../components/CTAButton/CTAButton'
import { Spotlight } from './Spotlight'

/* ── Composiciones visuales por proyecto (todas con capturas reales) ── */

function DexmiMedia({ media }) {
    return (
        <div className={styles.dexmiStage}>
            <MediaTag />
            <Picture image={media.laptop} className={styles.dexmiLaptop} />
            <Picture image={media.phone} className={styles.dexmiPhone} />
        </div>
    )
}

function CuvaMedia({ media }) {
    return (
        <div className={styles.cuvaStage}>
            <LaptopFrame image={media.desktop} className={styles.cuvaLaptop} />
            <PhoneFrame image={media.phone} className={styles.cuvaPhone} />
            <div className={styles.stageTag}><MediaTag /></div>
        </div>
    )
}

function J2RMedia({ media }) {
    return (
        <div className={styles.j2rStage}>
            <div className={styles.j2rRow}>
                {media.screens.map((screen, i) => (
                    <PhoneFrame key={screen.src} image={screen} className={i === 1 ? styles.j2rRaised : ''} />
                ))}
            </div>
            <div className={styles.stageTag}>
                <MediaTag />
                <MediaTag kind="status">Producto en desarrollo</MediaTag>
            </div>
        </div>
    )
}

/* ── Sección ── */

export function Work() {
    const dexmi = getProject('dexmi')
    const vde = getProject('vde-connect')
    const cuva = getProject('cuva')
    const j2r = getProject('j2r')

    return (
        <section id="proyectos" className={styles.section} aria-labelledby="work-title">
            <header className={styles.header}>
                <SectionLabel index="01" meta={`${String(PROJECTS.length).padStart(2, '0')} productos`}>
                    Proyectos seleccionados
                </SectionLabel>
                <div className={styles.headerGrid}>
                    <h2 id="work-title" className={styles.title}>
                        Productos que diseño, construyo y&nbsp;lanzo.
                    </h2>
                    <p className={styles.intro}>
                        Capturas reales, mi rol y el stack de cada producto, con enlaces
                        para verlo funcionando.
                    </p>
                </div>
            </header>

            <div className={styles.list}>
                <ProjectFeature project={dexmi} tone="light" media={<DexmiMedia media={dexmi.media} />} />

                <Spotlight project={vde} />

                <ProjectFeature project={cuva} tone="dark" reverse media={<CuvaMedia media={cuva.media} />} />

                <ProjectFeature project={j2r} tone="carbon" media={<J2RMedia media={j2r.media} />} />
            </div>

            {/* ── Otros proyectos ── */}
            {ARCHIVE.length > 0 && (
                <div className={styles.archive}>
                    <h3 className={styles.archiveTitle}>Otros proyectos</h3>
                    <ul className={styles.archiveList}>
                        {ARCHIVE.map(item => (
                            <li key={item.id}>
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>
                                    <span className={styles.archiveName}>{item.name}</span>
                                    <span className={styles.archiveCategory}>{item.category}</span>
                                    <StatusIndicator tone={item.status.tone} className={styles.archiveStatus}>{item.status.label}</StatusIndicator>
                                    <span className={styles.archiveCta}>
                                        {item.linkLabel}
                                        <span className="visually-hidden"> (abre en una pestaña nueva)</span>
                                        <ArrowUpRight />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}
