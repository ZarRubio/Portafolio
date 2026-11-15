import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', to: '/' },
  { name: 'Perfil', to: '/about' },
  { name: 'Proyectos', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Experiencia', to: '/experience' },
  { name: 'Logros', to: '/certifications' },
  { name: 'Contacto', to: '/contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className='fixed left-0 right-0 top-0 z-40 px-4 pt-5'
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-700 ${
          isScrolled
            ? 'border-white/[0.12] bg-slate-950/[0.78] shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.035] backdrop-blur-xl'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out)' }}
      >
        <NavLink
          to='/'
          className='group flex items-center gap-3 rounded-full py-1 pl-1 pr-4'
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-extrabold text-slate-950'>
            AR
          </span>
          <span className='font-display hidden text-sm font-semibold tracking-wide text-white sm:block'>
            Adrian Rubio
          </span>
        </NavLink>

        <div className='hidden items-center gap-1 lg:flex'>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-xs font-bold transition-all duration-700 ${
                  isActive
                    ? 'bg-white text-slate-950'
                    : 'text-slate-300 hover:bg-white/[0.08] hover:text-white'
                }`
              }
              style={{ transitionTimingFunction: 'var(--ease-out)' }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <NavLink
          to='/contact'
          className='magnetic-btn hidden bg-amber-200 text-slate-950 hover:bg-white md:inline-flex'
        >
          Hablemos
          <span className='magnetic-icon bg-slate-950 text-white'>
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </span>
        </NavLink>

        <button
          className='relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-700 active:scale-95 lg:hidden'
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label='Abrir menu'
          aria-expanded={isMobileMenuOpen}
          style={{ transitionTimingFunction: 'var(--ease-out)' }}
        >
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-out)' }}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-out)' }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className='mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/88 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:hidden'
          >
            <div className='grid gap-2'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.035, duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all duration-700 ${
                        isActive ? 'bg-white text-slate-950' : 'text-slate-200 hover:bg-white/[0.08]'
                      }`
                    }
                  >
                    {item.name}
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;

