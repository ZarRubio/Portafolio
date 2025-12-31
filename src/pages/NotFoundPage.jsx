import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
    <p className='text-sm text-slate-400 mb-3'>404</p>
    <h1 className='text-4xl font-bold text-white mb-4'>Página no encontrada</h1>
    <p className='text-slate-300 mb-6'>La ruta que buscas no existe. Regresa al inicio.</p>
    <NavLink
      to='/'
      className='px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold transition-colors duration-200'
    >
      Volver al inicio
    </NavLink>
  </div>
);

export default NotFoundPage;
