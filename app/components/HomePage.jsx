import {
  ArrowRight,
  ArrowUpRight,
  Certificate,
  DownloadSimple,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ContactForm } from '@/components/ContactForm';
import { ProjectDiagram } from '@/components/ProjectDiagram';
import { Reveal } from '@/components/Reveal';
import { SiteShell } from '@/components/SiteShell';
import { TechIcon } from '@/components/TechIcon';
import {
  credentials,
  experienceItems,
  getDictionary,
  getHomePath,
  getProjectPath,
  profile,
  projectCases,
  skillGroups,
  techStrip,
} from '@/content/portfolio';

function SectionHeading({ pill, title, id, intro }) {
  return (
    <Reveal className='v2-heading'>
      <span className='v2-pill'>{pill}</span>
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}

function RoleTicker({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length < 2) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 2800);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <p className='v2-ticker' aria-live='off'>
      <span className='v2-ticker-prompt' aria-hidden='true'>&gt;</span>
      <span key={index} className='v2-ticker-text'>{roles[index]}</span>
      <span className='v2-ticker-caret' aria-hidden='true' />
    </p>
  );
}

export function HomePage({ locale }) {
  const copy = getDictionary(locale);
  const t = copy.home;
  const homePath = getHomePath(locale);
  const jobs = experienceItems.filter((item) => !item.education);
  const degree = experienceItems.find((item) => item.education);
  const [activeJob, setActiveJob] = useState(0);
  const job = jobs[activeJob];
  const jobContent = job.content[locale];

  return (
    <SiteShell locale={locale}>
      <main id='main-content' className='v2'>
        {/* HERO */}
        <section className='v2-hero' aria-labelledby='hero-title'>
          <div className='v2-glow' aria-hidden='true' />
          <div className='container v2-hero-grid'>
            <div className='v2-hero-copy'>
              <span className='v2-status'><i aria-hidden='true' />{t.available}</span>
              <h1 id='hero-title'>
                <span>{t.firstName}</span>
                <span className='v2-accent-text'>{t.lastName}</span>
              </h1>
              <RoleTicker roles={t.roles} />
              <p className='v2-hero-intro'>{copy.hero.intro}</p>
              <div className='v2-actions'>
                <Link to={`${homePath}#work`} className='v2-btn v2-btn--primary'>
                  {t.viewProjects}<ArrowRight size={16} weight='bold' />
                </Link>
                {profile.cvUrl ? (
                  <a href={profile.cvUrl} className='v2-btn v2-btn--ghost' download>
                    <DownloadSimple size={16} weight='bold' />{t.downloadCv}
                  </a>
                ) : (
                  <Link to={`${homePath}#contact`} className='v2-btn v2-btn--ghost'>
                    <PaperPlaneTilt size={16} weight='bold' />{t.contactMe}
                  </Link>
                )}
              </div>
              <div className='v2-social'>
                <a href={profile.social.github} target='_blank' rel='noreferrer' aria-label='GitHub'><GithubLogo size={20} /></a>
                <a href={profile.social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'><LinkedinLogo size={20} /></a>
                <a href={`mailto:${profile.email}`} aria-label='Email'><PaperPlaneTilt size={20} /></a>
              </div>
            </div>

            <div className='v2-portrait'>
              <div className='v2-portrait-frame'>
                <img
                  src={profile.portrait}
                  width='1000'
                  height='1000'
                  alt={profile.portraitAlt[locale]}
                  loading='eager'
                  fetchPriority='high'
                />
              </div>
              <div className='v2-badge'>
                <strong>{t.badgeValue}</strong>
                <span>{t.badgeLabel}</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STRIP */}
        <div className='v2-strip' role='region' aria-label={t.techStrip}>
          <ul className='v2-strip-track'>
            {[...techStrip, ...techStrip].map((tech, index) => (
              <li key={`${tech}-${index}`} aria-hidden={index >= techStrip.length ? 'true' : undefined}>
                <TechIcon name={tech} size={20} />{tech}
              </li>
            ))}
          </ul>
        </div>

        {/* ABOUT */}
        <section id='about' className='v2-section' aria-labelledby='about-title'>
          <div className='container'>
            <SectionHeading pill={t.aboutPill} title={t.aboutTitle} id='about-title' />
            <div className='v2-about-grid'>
              <Reveal className='v2-about-copy'>
                <p className='v2-lead'>{t.aboutLead}</p>
                {copy.profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <dl className='v2-stats'>
                  {t.stats.map(([value, label]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal className='v2-timeline' delay={0.08} as='ol'>
                {experienceItems.map((item) => {
                  const content = item.content[locale];
                  return (
                    <li key={`${item.period}-${content.title}`} className={item.current ? 'is-current' : ''}>
                      <span className='v2-timeline-period'>{item.period}</span>
                      <div>
                        <strong>{content.title}</strong>
                        <span>{content.context}</span>
                      </div>
                    </li>
                  );
                })}
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id='experience' className='v2-section v2-section--alt' aria-labelledby='experience-title'>
          <div className='container'>
            <SectionHeading pill={t.experiencePill} title={t.experienceTitle} id='experience-title' />
            <Reveal className='v2-tabs'>
              <div className='v2-tab-list' role='tablist' aria-label={t.experienceTitle}>
                {jobs.map((item, index) => (
                  <button
                    key={item.period}
                    type='button'
                    role='tab'
                    id={`job-tab-${index}`}
                    aria-selected={index === activeJob}
                    aria-controls='job-panel'
                    tabIndex={index === activeJob ? 0 : -1}
                    className={`v2-tab ${index === activeJob ? 'is-active' : ''}`}
                    onClick={() => setActiveJob(index)}
                    onKeyDown={(event) => {
                      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
                      event.preventDefault();
                      const next = (index + (event.key === 'ArrowDown' ? 1 : jobs.length - 1)) % jobs.length;
                      setActiveJob(next);
                      document.getElementById(`job-tab-${next}`)?.focus();
                    }}
                  >
                    <strong>{item.content[locale].title}</strong>
                    <span>{item.period}</span>
                  </button>
                ))}
              </div>
              <div key={activeJob} className='v2-card v2-tab-panel' role='tabpanel' id='job-panel' aria-labelledby={`job-tab-${activeJob}`}>
                <h3>
                  {jobContent.title} <span className='v2-accent-text'>@ {jobContent.context}</span>
                </h3>
                <p className='v2-mono'>
                  {job.period}
                  {job.current && <span className='v2-live'><i aria-hidden='true' />{t.current}</span>}
                </p>
                <p>{jobContent.summary}</p>
                <ul className='v2-bullets'>
                  {jobContent.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className='v2-chips'>
                  {job.stack.map((tech) => <span key={tech}><TechIcon name={tech} />{tech}</span>)}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECTS */}
        <section id='work' className='v2-section' aria-labelledby='work-title'>
          <div className='container'>
            <SectionHeading pill={t.workPill} title={t.workTitle} id='work-title' intro={copy.work.intro} />
            <div className='v2-projects'>
              {projectCases.map((project, index) => {
                const content = project.content[locale];
                return (
                  <Reveal as='article' className={`v2-project ${index % 2 ? 'is-reversed' : ''}`} key={project.id}>
                    <div className='v2-project-visual'>
                      {project.image ? (
                        <figure className='v2-shot'>
                          <div className='v2-shot-bar' aria-hidden='true'><i /><i /><i /><span /></div>
                          <img src={project.image.src} alt={project.image.alt[locale]} loading='lazy' width='800' height='500' />
                        </figure>
                      ) : (
                        <ProjectDiagram
                          nodes={project.diagram[locale]}
                          title={content.title}
                          accent={project.accent}
                          compact
                          statusLabel={content.eyebrow}
                        />
                      )}
                    </div>
                    <div className='v2-project-copy'>
                      <span className='v2-mono v2-kicker'>{content.status}</span>
                      <h3>{content.title}</h3>
                      <p>{content.summary}</p>
                      {project.metrics?.length > 0 && (
                        <dl className='v2-project-metrics'>
                          {project.metrics.map((metric) => (
                            <div key={metric.value}>
                              <dt>{metric.label[locale]}</dt>
                              <dd>{metric.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className='v2-chips'>
                        {project.stack.map((tech) => <span key={tech}><TechIcon name={tech} />{tech}</span>)}
                      </div>
                      <Link to={getProjectPath(project, locale)} className='v2-link'>
                        {t.openCase}<ArrowRight size={16} weight='bold' />
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id='stack' className='v2-section v2-section--alt' aria-labelledby='stack-title'>
          <div className='container'>
            <SectionHeading pill={t.stackPill} title={t.stackTitle} id='stack-title' intro={copy.stack.intro} />
            <div className='v2-skill-rows'>
              {skillGroups.map((group, index) => (
                <Reveal className='v2-skill-row' key={group.number} delay={index * 0.05}>
                  <span className='v2-code'>{group.code}</span>
                  <h3>{group.content[locale]}</h3>
                  <div className='v2-chips'>
                    {group.skills.map((skill) => <span key={skill}><TechIcon name={skill} />{skill}</span>)}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id='education' className='v2-section' aria-labelledby='education-title'>
          <div className='container'>
            <SectionHeading pill={t.educationPill} title={t.educationTitle} id='education-title' />
            <div className='v2-edu-grid'>
              {degree && (
                <Reveal className='v2-card v2-edu-card v2-edu-card--wide'>
                  <span className='v2-edu-icon'><GraduationCap size={24} /></span>
                  <div>
                    <span className='v2-mono'>{degree.period} · {t.degreeStatus}</span>
                    <h3>{degree.content[locale].title}</h3>
                    <p>{degree.content[locale].context}. {degree.content[locale].summary}</p>
                  </div>
                </Reveal>
              )}
              {credentials.map((credential, index) => (
                <Reveal className='v2-card v2-edu-card' key={credential.certificateUrl} delay={index * 0.05}>
                  <span className='v2-edu-icon'><Certificate size={24} /></span>
                  <div>
                    <span className='v2-mono'>{credential.issuer} · {credential.year}</span>
                    <h3>{credential.name[locale]}</h3>
                    <a href={credential.certificateUrl} target='_blank' rel='noreferrer' className='v2-link'>
                      {t.verify}<ArrowUpRight size={15} weight='bold' />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id='contact' className='v2-section v2-section--alt' aria-labelledby='contact-title'>
          <div className='container'>
            <SectionHeading pill={t.contactPill} title={copy.contact.title} id='contact-title' intro={copy.contact.intro} />
            <Reveal>
              <ContactForm locale={locale} />
            </Reveal>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
