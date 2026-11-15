import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ProjectDiagram } from '@/components/ProjectDiagram';
import { Reveal } from '@/components/Reveal';
import { getDictionary, getProjectPath } from '@/content/portfolio';

export function ProjectCard({ project, locale, index }) {
  const copy = getDictionary(locale);
  const content = project.content[locale];

  return (
    <Reveal className={`project-card project-card--${index + 1}`} delay={index * 0.08} as='article'>
      <div className='bezel'>
        <div className='bezel-core project-card-core'>
          <div className='project-card-meta'>
            <span>{copy.work.caseLabel} {String(index + 1).padStart(2, '0')}</span>
            <span>{project.year}</span>
          </div>
          <ProjectDiagram
            nodes={project.diagram[locale]}
            title={content.eyebrow}
            accent={project.accent}
            compact
            statusLabel={locale === 'es' ? 'Mapa del sistema' : 'System map'}
          />
          <div className='project-card-copy'>
            <p className='project-kicker'>{content.status}</p>
            <h3>{content.title}</h3>
            <p>{content.summary}</p>
            <div className='tag-list'>
              {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <Link to={getProjectPath(project, locale)} className='card-link'>
            <span>{copy.work.open}</span>
            <span className='button-icon'><ArrowUpRight size={16} weight='light' /></span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
