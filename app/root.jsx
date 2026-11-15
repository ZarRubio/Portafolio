import './styles/app.css';
import './styles/home.css';

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from 'react-router';
import { HashScroll } from '@/components/HashScroll';
import { asset } from '@/content/portfolio';

export const links = () => [
  { rel: 'icon', type: 'image/svg+xml', href: asset('/favicon.svg') },
];

export function Layout({ children }) {
  const location = useLocation();
  const locale = location.pathname.startsWith('/en') ? 'en' : 'es';

  return (
    <html lang={locale} data-theme='dark' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#0a1214' />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t}}catch(e){}",
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <HashScroll />
      <Outlet />
    </>
  );
}
