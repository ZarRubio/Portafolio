import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='section-wrap flex min-h-[70dvh] items-center'>
    <div className='section-inner'>
      <div className='premium-shell mx-auto max-w-2xl'>
        <div className='premium-core p-8 text-center md:p-12'>
          <span className='eyebrow'>404</span>
          <h1 className='font-display mt-5 text-4xl font-semibold text-white md:text-6xl'>Página no encontrada</h1>
          <p className='mx-auto mt-5 max-w-md leading-7 text-slate-300'>La ruta que buscas no existe. Vuelve al inicio para retomar el recorrido.</p>
          <NavLink to='/' className='magnetic-btn mt-8 bg-white text-slate-950 hover:bg-amber-100'>
            Volver al inicio
            <span className='magnetic-icon bg-slate-950 text-white'>
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
