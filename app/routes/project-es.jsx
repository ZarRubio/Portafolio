import { ProjectPage } from '@/components/ProjectPage';
import { getProjectBySlug } from '@/content/portfolio';
import { notFoundMeta, projectMeta } from '@/lib/seo';

export const meta = ({ params }) => {
  const project = getProjectBySlug('es', params.slug);
  return project ? projectMeta(project, 'es') : notFoundMeta('es');
};

export default function ProjectEsRoute() {
  return <ProjectPage locale='es' />;
}
