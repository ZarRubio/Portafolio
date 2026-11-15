import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function HashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }, [location.hash, location.pathname]);

  return null;
}
