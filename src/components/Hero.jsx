import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const avatars = [
    { src: '/avatar.jpg', alt: 'Retrato principal de Adrián Gustavo Rubio Calixto' },
    { src: '/avatar2.jpeg', alt: 'Retrato alternativo 2 de Adrián Gustavo Rubio Calixto' },
    { src: '/avatar3.jpeg', alt: 'Retrato alternativo 3 de Adrián Gustavo Rubio Calixto' }
  ];

  const [avatarIndex, setAvatarIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setAvatarIndex((prev) => (prev + 1) % avatars.length);
    }, 6000);
    return () => clearInterval(id);
  }, [avatars.length]);

  const goToContact = () => navigate('/contact');
  const goToProjects = () => navigate('/projects');

  return (
    <section id='hero' className='relative overflow-hidden bg-slate-950 py-20'>
      <div className='absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950 to-slate-950'></div>
      <div className='absolute -left-24 top-10 h-72 w-72 bg-amber-500/10 blur-3xl'></div>
      <div className='absolute -right-10 bottom-0 h-80 w-80 bg-sky-500/15 blur-3xl'></div>

      <div className='container mx-auto px-4 lg:px-12 relative z-10'>
        <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-amber-200'>
              Backend & Web Engineer
            </div>

            <div className='space-y-3'>
              <p className='text-base text-slate-300'>Hola, soy</p>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white'>
                Adrián Gustavo Rubio Calixto
              </h1>
              <h2 className='text-2xl sm:text-3xl font-semibold text-slate-200'>
                Arquitecto de APIs y performance web
              </h2>
            </div>

            <p className='text-lg text-slate-300 max-w-2xl'>
              Diseño y entrego backend robusto con Java/Spring Boot, MySQL y APIs REST seguras. Optimizo e-commerce (WooCommerce) y documento arquitectura clara (UML/C4) para que los equipos desplieguen rápido y sin sobresaltos.
            </p>

            <div className='flex flex-wrap items-center gap-3'>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200'>Lima, Perú · Remoto/Híbrido</span>
              <span className='rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-200'>Disponibilidad inmediata</span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                onClick={goToProjects}
                size='lg'
                className='bg-gradient-to-r from-sky-600 via-sky-500 to-amber-400 hover:from-sky-700 hover:via-sky-600 hover:to-amber-400 text-white px-7 py-5 text-base font-semibold rounded-xl shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5'
              >
                Ver proyectos
              </Button>
              <Button
                onClick={goToContact}
                variant='outline'
                size='lg'
                className='border-2 border-white/15 text-slate-100 hover:bg-white/10 px-7 py-5 text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5'
              >
                Coordinar llamada
              </Button>
            </div>

            <div className='grid grid-cols-3 gap-4 sm:max-w-xl text-center sm:text-left'>
              {[
                { label: 'Años entregando', value: '6+' },
                { label: 'Proyectos', value: '25+' },
                { label: 'Stack', value: 'Java / Spring / MySQL / Angular' },
              ].map((item) => (
                <div key={item.label} className='rounded-xl border border-white/5 bg-white/5 px-4 py-3'>
                  <div className='text-lg font-semibold text-white'>{item.value}</div>
                  <div className='text-xs text-slate-400'>{item.label}</div>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-4 text-slate-300'>
              <span className='text-sm text-slate-400'>Conecta</span>
              <div className='flex gap-5'>
                <motion.a
                  href='https://github.com/ZarRubio'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.08, y: -2 }}
                  className='text-slate-300 hover:text-amber-300 transition-colors duration-150'
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href='https://www.linkedin.com/in/adrianrubiocalixto/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.08, y: -2 }}
                  className='text-slate-300 hover:text-amber-300 transition-colors duration-150'
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href='mailto:aerubio2305@gmail.com'
                  whileHover={{ scale: 1.08, y: -2 }}
                  className='text-slate-300 hover:text-amber-300 transition-colors duration-150'
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className='relative space-y-6'
          >
            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/50'>
              <div className='absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-sky-500/20'></div>
              <div className='relative z-10 h-full'>
                <img
                  src={avatars[avatarIndex]?.src || avatars[0].src}
                  alt={avatars[avatarIndex]?.alt || avatars[0].alt}
                  className='h-full w-full object-cover lg:max-h-[520px]'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent'></div>
                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <div className='flex items-center gap-3'>
                    <span className='h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.25)]'></span>
                    <span className='text-sm text-slate-200'>Trabajando en soluciones backend y optimización web</span>
                  </div>
                </div>
                <div className='absolute right-4 top-4 flex gap-2'>
                  {avatars.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAvatarIndex(idx)}
                      className={`h-2.5 w-5 rounded-full transition-all duration-200 ${
                        avatarIndex === idx
                          ? 'bg-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.25)]'
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Ver avatar ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50'>
              <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5'></div>
              <div className='relative z-10 space-y-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='text-sm text-slate-400'>Disponible para</p>
                    <p className='text-lg font-semibold text-white'>Backend remoto · Híbrido Lima</p>
                  </div>
                  <span className='rounded-full bg-emerald-500/15 text-emerald-200 text-xs px-3 py-1 border border-emerald-400/30'>Aceptando proyectos</span>
                </div>

                <div className='rounded-2xl border border-white/10 bg-slate-900/50 p-5 space-y-3'>
                  <div className='flex items-center justify-between text-sm text-slate-300'>
                    <span>Email</span>
                    <a href='mailto:aerubio2305@gmail.com' className='text-amber-300 hover:text-amber-200'>aerubio2305@gmail.com</a>
                  </div>
                  <div className='flex items-center justify-between text-sm text-slate-300'>
                    <span>LinkedIn</span>
                    <a
                      href='https://www.linkedin.com/in/adrianrubiocalixto/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-amber-300 hover:text-amber-200'
                    >
                      /adrianrubiocalixto
                    </a>
                  </div>
                  <div className='flex items-center justify-between text-sm text-slate-300'>
                    <span>Stack foco</span>
                    <span className='text-slate-100'>Java · Spring · MySQL</span>
                  </div>
                </div>

                <div className='rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-300 leading-relaxed'>
                  "Entrego APIs claras, documentación lista para equipos y optimizaciones medibles para e-commerce."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 1, duration: 1.5 }}
        className='absolute bottom-6 left-1/2 -translate-x-1/2'
      >
        <ArrowDown className='text-amber-300 opacity-70' size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;