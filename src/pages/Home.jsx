import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Briefcase, MessageSquare, UserRound } from 'lucide-react';
import Hero from '@/components/Hero';

const quickLinks = [
  { title: 'Sobre mí', to: '/about', desc: 'Perfil, enfoque y forma de trabajo.', icon: UserRound },
  { title: 'Proyectos', to: '/projects', desc: 'Casos recientes y entregables clave.', icon: Briefcase },
  { title: 'Contacto', to: '/contact', desc: 'Coordina una reunión o envía un mensaje.', icon: MessageSquare },
];

const Home = () => (
  <div className='space-y-16'>
    <Hero />

    <div className='container mx-auto px-4 lg:px-12'>
      <div className='flex items-center gap-3 mb-6 text-amber-200/80 text-xs tracking-[0.28em] uppercase'>
        <span className='h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent' aria-hidden='true'></span>
        Accesos rápidos
        <span className='h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent' aria-hidden='true'></span>
      </div>

      <div className='flex flex-col gap-4 lg:flex-row'>
        {quickLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className='group flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-4 flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400/50 hover:bg-white/10'
            >
              <div className='flex items-center gap-3 min-w-0'>
                <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/15 via-white/5 to-amber-400/20 border border-white/10'>
                  <Icon size={18} className='text-amber-200' />
                </span>
                <div className='min-w-0'>
                  <div className='text-sm text-amber-200 font-semibold'>{item.title}</div>
                  <div className='text-slate-200 text-sm truncate'>{item.desc}</div>
                </div>
              </div>
              <ArrowUpRight size={18} className='text-amber-200/80 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200' />
            </NavLink>
          );
        })}
      </div>
    </div>
  </div>
);

export default Home;
