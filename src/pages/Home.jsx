import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '@/components/Hero';

const quickLinks = [
  { title: 'Sobre mí', to: '/about', desc: 'Perfil, enfoque y forma de trabajo.' },
  { title: 'Proyectos', to: '/projects', desc: 'Casos recientes y entregables clave.' },
  { title: 'Contacto', to: '/contact', desc: 'Coordina una reunión o envía un mensaje.' },
];

const Home = () => (
  <div className='space-y-16'>
    <Hero />

    <div className='container mx-auto px-4 lg:px-12'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {quickLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className='group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-white/10'
          >
            <div className='text-sm uppercase tracking-wide text-amber-300/80 mb-2'>
              {item.title}
            </div>
            <div className='text-slate-200 text-base'>{item.desc}</div>
            <div className='mt-3 text-sm text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
              Ver más →
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
