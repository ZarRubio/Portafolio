import { ProjectPage } from '@/components/ProjectPage';
import { getProjectBySlug } from '@/content/portfolio';
import { notFoundMeta, projectMeta } from '@/lib/seo';

export const meta = ({ params }) => {
  const project = getProjectBySlug('en', params.slug);
  return project ? projectMeta(project, 'en') : notFoundMeta('en');
};

export default function ProjectEnRoute() {
  return <ProjectPage locale='en' />;
}
