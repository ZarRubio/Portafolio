import { HomePage } from '@/components/HomePage';
import { homeMeta } from '@/lib/seo';

export const meta = () => homeMeta('es');

export default function HomeEsRoute() {
  return <HomePage locale='es' />;
}
