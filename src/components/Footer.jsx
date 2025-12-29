
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-950/70 backdrop-blur-sm border-t border-white/5'>
      <div className='container mx-auto px-4 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div>
            <span className='text-2xl font-bold bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
              {'<Adrián Rubio />'}
            </span>
            <p className='text-slate-300 mt-4'>
              Software Engineer — Backend & Web / Full-Stack. APIs sólidas, performance en e-commerce y arquitectura documentada.
            </p>
          </div>

          <div>
            <span className='text-lg font-semibold text-white mb-4 block'>Enlaces</span>
            <nav className='flex flex-col space-y-2'>
              <a href='#about' className='text-slate-300 hover:text-amber-300 transition-colors duration-200'>
                Sobre Mí
              </a>
              <a href='#projects' className='text-slate-300 hover:text-amber-300 transition-colors duration-200'>
                Proyectos
              </a>
              <a href='#skills' className='text-slate-300 hover:text-amber-300 transition-colors duration-200'>
                Habilidades
              </a>
              <a href='#contact' className='text-slate-300 hover:text-amber-300 transition-colors duration-200'>
                Contacto
              </a>
            </nav>
          </div>

          <div>
            <span className='text-lg font-semibold text-white mb-4 block'>Sígueme</span>
            <div className='flex gap-4'>
              <a
                href='https://github.com/ZarRubio'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-slate-900 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
              >
                <Github size={20} />
              </a>
              <a
                href='https://www.linkedin.com/in/adrianrubiocalixto'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-slate-900 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='mailto:aerubio2305@gmail.com'
                className='w-10 h-10 bg-slate-900 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-400 text-sm'>
            © {currentYear} Adrián Gustavo Rubio Calixto. Todos los derechos reservados.
          </p>
          <p className='text-slate-400 text-sm flex items-center gap-2'>
            Hecho con <Heart size={16} className='text-amber-400' fill='currentColor' /> y React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
