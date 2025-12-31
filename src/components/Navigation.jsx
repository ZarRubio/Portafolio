
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: '/' },
    { name: 'Sobre Mí', to: '/about' },
    { name: 'Proyectos', to: '/projects' },
    { name: 'Habilidades', to: '/skills' },
    { name: 'Experiencia', to: '/experience' },
    { name: 'Certificaciones', to: '/certifications' },
    { name: 'Contacto', to: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-sky-500/10 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to='/'
              className='text-xl font-bold bg-gradient-to-r from-sky-300 via-sky-100 to-amber-300 bg-clip-text text-transparent'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {'<Adrián Rubio />'}
            </NavLink>
          </motion.div>

          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                      isActive ? 'text-amber-300' : 'text-slate-200 hover:text-amber-300'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 group-hover:w-full transition-all duration-300'></span>
                </NavLink>
              </motion.div>
            ))}
          </div>

          <button
            className='md:hidden text-gray-300 hover:text-blue-400 transition-colors'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-slate-900/95 backdrop-blur-lg rounded-lg mt-2 mb-4 overflow-hidden border border-white/5'
          >
            <div className='flex flex-col space-y-2 p-4'>
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-amber-300 bg-slate-800/60'
                        : 'text-slate-200 hover:text-amber-300 hover:bg-slate-800/60'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
