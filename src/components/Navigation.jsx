
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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
          <motion.a
            href='#hero'
            onClick={(e) => scrollToSection(e, '#hero')}
            className='text-xl font-bold bg-gradient-to-r from-sky-300 via-sky-100 to-amber-300 bg-clip-text text-transparent'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'<Adrián Rubio />'}
          </motion.a>

          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className='px-4 py-2 text-sm font-medium text-slate-200 hover:text-amber-300 transition-colors duration-200 relative group'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 group-hover:w-full transition-all duration-300'></span>
              </motion.a>
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className='px-4 py-3 text-sm font-medium text-slate-200 hover:text-amber-300 hover:bg-slate-800/60 rounded-lg transition-all duration-200'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
