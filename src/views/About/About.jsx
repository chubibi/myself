import styles from './css/about.module.css'
import { PROFILE } from '../../data/profile'
import { PORTRAIT, CAPABILITIES, DEGREES, FEATURED_CERT, CERTS, LANGUAGES } from '../../data/about'
import { SectionLabel } from '../../components/SectionLabel/SectionLabel'
import { StatusIndicator } from '../../components/StatusIndicator/StatusIndicator'
import { CTAButton, ArrowUpRight } from '../../components/CTAButton/CTAButton'

/*
 * Sobre mí — bloque único: perfil + dos carreras + capacidades + certificaciones.
 * Mobile-first: cada sub-bloque es una "capa" con título corto y contenido escaneable.
 */

function Degree({ degree, index }) {
    return (
        <article className={styles.degree} aria-labelledby={`degree-${degree.id}`}>
            <div className={styles.degreeTop}>
                {degree.logo ? (
                    <img
                        src={degree.logo.src}
                        alt={`Logo de ${degree.school}`}
                        width={degree.logo.width}
                        height={degree.logo.height}
                        loading="lazy"
                        decoding="async"
                        className={styles.logo}
                    />
                ) : (
                    /* Siglas tipográficas: no se presenta como logo oficial */
                    <span className={styles.acronym} aria-hidden="true">{degree.acronym}</span>
                )}
                <span className={styles.degreeIndex}>{index}</span>
            </div>

            <span className={styles.field}>{degree.field}</span>
            <h4 id={`degree-${degree.id}`} className={styles.degreeName}>{degree.degree}</h4>
            <p className={styles.school}>
                <a href={degree.url} target="_blank" rel="noopener noreferrer" className={styles.schoolLink}>
                    {degree.school}<span className="visually-hidden"> (abre en una pestaña nueva)</span>
                </a>
            </p>

            <dl className={styles.degreeMeta}>
                <div><dt>Periodo</dt><dd>{degree.period}</dd></div>
                <div><dt>Enfoque</dt><dd>{degree.detail}</dd></div>
            </dl>

            <ul className={styles.degreeTags}>
                {degree.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
        </article>
    )
}

export default function About() {
    return (
        <section className={styles.section} id="sobre-mi" aria-labelledby="about-title">
            <SectionLabel index="03" meta="Formación · Certificaciones">Sobre mí</SectionLabel>

            {/* ── Perfil ── */}
            <div className={styles.intro}>
                <figure className={styles.photo}>
                    <img
                        src={PORTRAIT.src}
                        alt={PORTRAIT.alt}
                        width={PORTRAIT.width}
                        height={PORTRAIT.height}
                        loading="lazy"
                        decoding="async"
                        className={styles.photoImg}
                    />
                    <figcaption className={styles.photoCapsule}>
                        <span className={styles.capsuleName}>{PROFILE.name}</span>
                        <span className={styles.capsuleDetail}>{PROFILE.location}</span>
                    </figcaption>
                </figure>

                <div className={styles.introText}>
                    <h2 id="about-title" className={styles.title}>
                        Ingeniería + Idiomas: construyo productos y sé&nbsp;comunicarlos.
                    </h2>
                    <p className={styles.lead}>
                        Desarrollo apps móviles y web desde 2022 y hoy lidero el frontend
                        en VDE Suite. Mi segunda carrera me ayuda a convertir necesidades
                        de negocio en producto. Hablo <strong>español, inglés, francés
                        e italiano</strong>.
                    </p>
                    <div className={styles.introActions}>
                        <CTAButton href={PROFILE.linkedin} external variant="light" icon={<ArrowUpRight />}>
                            Ver LinkedIn
                        </CTAButton>
                        <CTAButton href={PROFILE.github} external variant="secondary" icon={<ArrowUpRight />}>
                            GitHub
                        </CTAButton>
                    </div>
                </div>
            </div>

            {/* ── Dos carreras ── */}
            <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                    <span className={styles.blockIndex}>A</span> Dos carreras
                </h3>
                <div className={styles.degrees}>
                    <Degree degree={DEGREES[0]} index="01" />
                    <span className={styles.plus} aria-hidden="true">+</span>
                    <Degree degree={DEGREES[1]} index="02" />
                </div>
            </div>

            {/* ── Capacidades ── */}
            <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                    <span className={styles.blockIndex}>B</span> Qué aporto
                </h3>
                <ul className={styles.capabilities}>
                    {CAPABILITIES.map((c, i) => (
                        <li key={c.title} className={styles.capability}>
                            <span className={styles.capIndex}>{String(i + 1).padStart(2, '0')}</span>
                            <h4 className={styles.capTitle}>{c.title}</h4>
                            <p className={styles.capText}>{c.text}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Certificaciones e idiomas ── */}
            <div className={styles.block}>
                <h3 className={styles.blockTitle}>
                    <span className={styles.blockIndex}>C</span> Certificaciones
                </h3>
                <div className={styles.certs}>
                    <article className={styles.featuredCert} aria-labelledby="cert-featured">
                        <a
                            href={FEATURED_CERT.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.certImageLink}
                        >
                            <img
                                src={FEATURED_CERT.image.src}
                                alt={FEATURED_CERT.image.alt}
                                width={FEATURED_CERT.image.width}
                                height={FEATURED_CERT.image.height}
                                loading="lazy"
                                decoding="async"
                                className={styles.certImage}
                            />
                            <span className="visually-hidden"> (abre la verificación en una pestaña nueva)</span>
                        </a>
                        <div className={styles.certBody}>
                            <div className={styles.certTags}>
                                <StatusIndicator tone="positive" variant="tag">Verificado</StatusIndicator>
                                <StatusIndicator tone="active" variant="tag">Más reciente</StatusIndicator>
                            </div>
                            <h4 id="cert-featured" className={styles.certTitle}>{FEATURED_CERT.title}</h4>
                            <p className={styles.certIssuer}>{FEATURED_CERT.issuer} · {FEATURED_CERT.date}</p>
                            <p className={styles.certCode}>Código {FEATURED_CERT.code}</p>
                            <CTAButton href={FEATURED_CERT.url} external variant="ink" size="sm" icon={<ArrowUpRight />}>
                                Verificar certificado
                            </CTAButton>
                        </div>
                    </article>

                    <div className={styles.certSide}>
                        <ul className={styles.certList}>
                            {CERTS.map(c => (
                                <li key={c.title} className={styles.certItem}>
                                    <span className={styles.certShort}>{c.short}</span>
                                    <div>
                                        <p className={styles.certItemTitle}>{c.title}</p>
                                        <p className={styles.certItemMeta}>
                                            {c.issuer}{c.detail && <> · {c.detail}</>}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.languages}>
                            <h4 className={styles.languagesTitle}>Idiomas</h4>
                            <ul className={styles.languageList}>
                                {LANGUAGES.map(l => <li key={l}>{l}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
