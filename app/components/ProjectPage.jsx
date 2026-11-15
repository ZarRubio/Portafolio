import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, GithubLogo, LockSimple } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router';
import { ProjectDiagram } from '@/components/ProjectDiagram';
import { Reveal } from '@/components/Reveal';
import { SiteShell } from '@/components/SiteShell';
import { TechIcon } from '@/components/TechIcon';
import {
  getDictionary,
  getHomePath,
  getProjectBySlug,
  getProjectPath,
  projectCases,
} from '@/content/portfolio';

const LABELS = {
  es: {
    description: 'Descripción',
    problem: 'El problema',
    constraints: 'Condiciones',
    decisions: 'Qué decidí y por qué',
    outcomes: 'Resultado',
    sheet: 'Ficha',
    type: 'Tipo',
    year: 'Año',
    role: 'Rol',
    status: 'Estado',
    stack: 'Stack',
    metrics: 'Cifras',
    privateCode: 'Código privado',
    others: 'Otros proyectos',
    allProjects: 'Todos los proyectos',
    caption: 'Flujo simplificado del sistema',
  },
  en: {
    description: 'Overview',
    problem: 'The problem',
    constraints: 'Conditions',
    decisions: 'What I decided and why',
    outcomes: 'Outcome',
    sheet: 'Project sheet',
    type: 'Type',
    year: 'Year',
    role: 'Role',
    status: 'Status',
    stack: 'Stack',
    metrics: 'Numbers',
    privateCode: 'Private code',
    others: 'Other projects',
    allProjects: 'All projects',
    caption: 'Simplified system flow',
  },
};

export function ProjectPage({ locale }) {
  const { slug } = useParams();
  const project = getProjectBySlug(locale, slug);
  const copy = getDictionary(locale);
  const homePath = getHomePath(locale);

  if (!project) return <ProjectNotFound locale={locale} />;

  const t = LABELS[locale];
  const content = project.content[locale];
  const visibleLinks = [
    project.links.demoUrl && { href: project.links.demoUrl, label: copy.project.demo, icon: ArrowUpRight, primary: true },
    project.links.repositoryUrl && { href: project.links.repositoryUrl, label: copy.project.repository, icon: GithubLogo },
  ].filter(Boolean);
  const index = projectCases.findIndex((item) => item.id === project.id);
  const others = [1, 2].map((offset) => projectCases[(index + offset) % projectCases.length]);

  return (
    <SiteShell locale={locale}>
      <main id='main-content' className='v2 cs'>
        <div className='container'>
          {/* Header */}
          <header className='cs-head'>
            <Link to={`${homePath}#work`} className='cs-back'>
              <ArrowLeft size={16} weight='bold' />
              {t.allProjects}
            </Link>
            <div className='cs-head-row'>
              <div>
                <span className='v2-mono v2-kicker'>{content.eyebrow}</span>
                <h1>{content.title}</h1>
                <p className='cs-sub'>{content.summary}</p>
              </div>
              <div className='cs-actions'>
                {visibleLinks.length > 0 ? (
                  visibleLinks.map(({ href, label, icon: Icon, primary }) => (
                    <a
                      key={href}
                      className={`v2-btn ${primary ? 'v2-btn--primary' : 'v2-btn--ghost'}`}
                      href={href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Icon size={16} weight='bold' />{label}
                    </a>
                  ))
                ) : (
                  <span className='cs-private'><LockSimple size={15} weight='bold' />{t.privateCode}</span>
                )}
              </div>
            </div>
          </header>

          {/* Visual */}
          <figure className='cs-visual'>
            {project.image ? (
              <div className='v2-shot'>
                <div className='v2-shot-bar' aria-hidden='true'><i /><i /><i /><span /></div>
                <img src={project.image.src} alt={project.image.alt[locale]} width='1280' height='800' />
              </div>
            ) : (
              <ProjectDiagram nodes={project.diagram[locale]} title={content.title} accent={project.accent} statusLabel={content.eyebrow} />
            )}
            <figcaption>
              {t.caption}: {project.diagram[locale].join(' → ')}
            </figcaption>
          </figure>

          {/* Body + sheet */}
          <div className='cs-grid'>
            <div className='cs-main'>
              <Reveal as='section'>
                <h2>{t.problem}</h2>
                <p>{content.problem}</p>
                <h3>{t.constraints}</h3>
                <ul className='cs-conditions'>
                  {content.constraints.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>

              <Reveal as='section'>
                <h2>{t.decisions}</h2>
                <div className='cs-decisions'>
                  {content.decisions.map(([title, description]) => (
                    <div className='v2-card cs-decision' key={title}>
                      <CheckCircle size={22} weight='fill' />
                      <div>
                        <strong>{title}</strong>
                        <p>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal as='section'>
                <h2>{t.outcomes}</h2>
                <ul className='v2-bullets'>
                  {content.outcomes.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            </div>

            <aside className='v2-card cs-sheet' aria-label={t.sheet}>
              <h2>{t.sheet}</h2>
              <dl>
                <div><dt>{t.type}</dt><dd>{content.eyebrow}</dd></div>
                <div><dt>{t.year}</dt><dd>{project.year}</dd></div>
                <div><dt>{t.role}</dt><dd>{content.role}</dd></div>
                <div><dt>{t.status}</dt><dd><span className='v2-live'><i aria-hidden='true' />{content.status}</span></dd></div>
              </dl>
              {project.metrics?.length > 0 && (
                <>
                  <h3>{t.metrics}</h3>
                  <dl className='cs-metrics'>
                    {project.metrics.map((metric) => (
                      <div key={metric.value}>
                        <dd>{metric.value}</dd>
                        <dt>{metric.label[locale]}</dt>
                      </div>
                    ))}
                  </dl>
                </>
              )}
              <h3>{t.stack}</h3>
              <div className='v2-chips'>
                {project.stack.map((tech) => <span key={tech}><TechIcon name={tech} />{tech}</span>)}
              </div>
            </aside>
          </div>

          {/* Other projects */}
          <section className='cs-others' aria-labelledby='others-title'>
            <h2 id='others-title'>{t.others}</h2>
            <div className='cs-others-grid'>
              {others.map((other) => {
                const otherContent = other.content[locale];
                return (
                  <Link key={other.id} to={getProjectPath(other, locale)} className='v2-card cs-other'>
                    <div className='v2-shot'>
                      <div className='v2-shot-bar' aria-hidden='true'><i /><i /><i /><span /></div>
                      {other.image && <img src={other.image.src} alt='' loading='lazy' width='800' height='500' />}
                    </div>
                    <span className='v2-mono v2-kicker'>{otherContent.eyebrow}</span>
                    <strong>{otherContent.title}</strong>
                    <span className='v2-link'>{copy.home.openCase}<ArrowRight size={15} weight='bold' /></span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}

function ProjectNotFound({ locale }) {
  const copy = getDictionary(locale).notFound;
  const homePath = getHomePath(locale);

  return (
    <SiteShell locale={locale}>
      <main id='main-content' className='not-found'>
        <div className='bezel not-found-shell'>
          <div className='bezel-core not-found-core'>
            <span className='eyebrow'>{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.copy}</p>
            <Link className='button button--primary' to={homePath}>
              <span>{copy.cta}</span>
              <span className='button-icon'><ArrowUpRight size={16} weight='light' /></span>
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
