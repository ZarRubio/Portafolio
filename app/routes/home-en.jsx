import { HomePage } from '@/components/HomePage';
import { homeMeta } from '@/lib/seo';

export const meta = () => homeMeta('en');

export default function HomeEnRoute() {
  return <HomePage locale='en' />;
}
