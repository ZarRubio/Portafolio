import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const links = [
  ['Perfil', '/about'],
  ['Proyectos', '/projects'],
  ['Skills', '/skills'],
  ['Contacto', '/contact'],
];

const socials = [
  { icon: Github, href: 'https://github.com/ZarRubio', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/adrianrubiocalixto', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aerubio2305@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative z-10 border-t border-white/[0.08]'>
      <div className='container mx-auto px-4 py-12 lg:px-12'>
        <div className='grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]'>
          <div>
            <span className='font-display text-2xl font-semibold text-white'>Adrián Rubio</span>
            <p className='mt-4 max-w-md text-sm leading-7 text-slate-400'>
              Software Engineer enfocado en backend, APIs, e-commerce y arquitectura documentada.
            </p>
          </div>

          <div>
            <span className='text-xs font-bold uppercase tracking-[0.22em] text-slate-500'>Navegación</span>
            <nav className='mt-4 grid gap-2'>
              {links.map(([label, to]) => (
                <NavLink key={to} to={to} className='text-sm font-semibold text-slate-300 transition-colors duration-700 hover:text-white'>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <span className='text-xs font-bold uppercase tracking-[0.22em] text-slate-500'>Redes</span>
            <div className='mt-4 flex gap-3'>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-slate-300 transition-all duration-700 hover:bg-white hover:text-slate-950 active:scale-[0.98]'
                    style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  >
                    <Icon size={17} strokeWidth={1.7} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className='mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-sm text-slate-500 md:flex-row'>
          <p>© {currentYear} Adrián Gustavo Rubio Calixto. Todos los derechos reservados.</p>
          <p>Hecho con React, TailwindCSS y una capa fuerte de criterio visual.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

