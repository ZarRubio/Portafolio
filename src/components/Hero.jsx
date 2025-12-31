
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');
  const goToProjects = () => navigate('/projects');

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-slate-950'
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,7,12,0.78), rgba(5,7,12,0.82)), url('/avatar.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black/65'></div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='text-amber-300 font-medium mb-4 tracking-wide'
            >
              Hola, soy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-sky-100 to-amber-200 bg-clip-text text-transparent'
            >
              Adrián Gustavo Rubio Calixto
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-2xl md:text-4xl font-semibold mb-4 text-slate-100'
            >
              Software Engineer — Backend & Web / Full-Stack
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto'
            >
              Full-stack con énfasis en backend y APIs (Java/Spring Boot, Maven, MySQL) y frontend en Angular. Diseño APIs REST con validaciones sólidas, optimizo e-commerce (WooCommerce) y documento arquitectura para que los equipos entreguen más rápido.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className='flex flex-wrap justify-center gap-3 mb-10'
            >
              <span className='px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200'>Lima, Perú · Remoto/Híbrido</span>
              <span className='px-4 py-2 rounded-full text-sm bg-amber-500/10 border border-amber-500/30 text-amber-200'>Backend & APIs</span>
              <span className='px-4 py-2 rounded-full text-sm bg-sky-500/10 border border-sky-500/30 text-sky-100'>E-commerce & Performance</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
            >
              <Button
                onClick={goToProjects}
                size='lg'
                className='bg-gradient-to-r from-sky-600 to-amber-500 hover:from-sky-700 hover:to-amber-500 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-500/50 hover:scale-105'
              >
                Ver Proyectos
              </Button>
              <Button
                onClick={goToContact}
                variant='outline'
                size='lg'
                className='border-2 border-white/20 text-slate-100 hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105'
              >
                Contáctame
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className='flex gap-6 justify-center'
            >
              <motion.a
                href='https://github.com/ZarRubio'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className='text-slate-400 hover:text-amber-300 transition-colors duration-200'
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/adrianrubiocalixto/'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className='text-slate-400 hover:text-amber-300 transition-colors duration-200'
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                href='mailto:aerubio2305@gmail.com'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className='text-slate-400 hover:text-amber-300 transition-colors duration-200'
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, duration: 2, repeatType: 'reverse' }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          >
            <ArrowDown className='text-amber-300' size={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
