import { useLocation } from 'react-router';
import { NotFoundPage } from '@/components/NotFoundPage';
import { notFoundMeta } from '@/lib/seo';

export const meta = ({ location }) => notFoundMeta(location?.pathname?.startsWith('/en') ? 'en' : 'es');

export default function NotFoundRoute() {
  const location = useLocation();
  return <NotFoundPage locale={location.pathname.startsWith('/en') ? 'en' : 'es'} />;
}
