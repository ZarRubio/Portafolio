import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const avatars = [
  { src: '/avatar.jpg', alt: 'Retrato principal de Adrian Gustavo Rubio Calixto' },
  { src: '/avatar2.jpeg', alt: 'Retrato alternativo de Adrian Gustavo Rubio Calixto' },
  { src: '/avatar3.jpeg', alt: 'Retrato cercano de Adrian Gustavo Rubio Calixto' },
];

const metrics = [
  ['6+', 'años construyendo'],
  ['25+', 'entregables'],
  ['Java', 'stack principal'],
];

const Hero = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      setAvatarIndex((prev) => (prev + 1) % avatars.length);
    }, 5600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id='hero' className='section-wrap pt-10 lg:pt-16'>
      <div className='section-inner'>
        <div className='grid items-end gap-10 lg:grid-cols-[1.08fr_0.92fr]'>
          <motion.div
            initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
            className='space-y-8'
          >
            <span className='eyebrow'>Backend & Web Engineer</span>

            <div className='space-y-5'>
              <h1 className='font-display max-w-5xl text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl'>
                APIs sólidas, productos rápidos y arquitectura que se entiende.
              </h1>
              <p className='section-copy'>
                Soy Adrián Rubio. Diseño backend con Java/Spring Boot, MySQL y APIs REST; también optimizo e-commerce y documento sistemas para que equipos puedan pasar de idea a producción con menos fricción.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row'>
              <button
                onClick={() => navigate('/projects')}
                className='magnetic-btn bg-white text-slate-950 hover:bg-amber-100'
              >
                Ver proyectos
                <span className='magnetic-icon bg-slate-950 text-white'>
                  <ArrowUpRight size={16} strokeWidth={1.7} />
                </span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className='magnetic-btn border border-white/10 bg-white/[0.035] text-white hover:bg-white/10'
              >
                Coordinar llamada
                <span className='magnetic-icon bg-white/10 text-amber-100'>
                  <Mail size={16} strokeWidth={1.7} />
                </span>
              </button>
            </div>

            <div className='grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3'>
              {metrics.map(([value, label]) => (
                <div key={label} className='premium-shell'>
                  <div className='premium-core surface-soft px-5 py-4'>
                    <div className='font-display text-2xl font-semibold text-white'>{value}</div>
                    <div className='mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 42, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className='relative'
          >
            <div className='premium-shell'>
              <div className='premium-core overflow-hidden bg-slate-950'>
                <div className='relative aspect-[4/5] min-h-[440px]'>
                  <img
                    src={avatars[avatarIndex].src}
                    alt={avatars[avatarIndex].alt}
                    className='h-full w-full object-cover transition-transform duration-700'
                    loading='eager'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/12 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-5 sm:p-7'>
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                      <div>
                        <p className='text-xs uppercase tracking-[0.22em] text-amber-100'>Disponible</p>
                        <p className='mt-1 text-lg font-semibold text-white'>Lima / Remoto</p>
                      </div>
                      <div className='flex items-center gap-2'>
                        {avatars.map((avatar, index) => (
                          <button
                            key={avatar.src}
                            onClick={() => setAvatarIndex(index)}
                            aria-label={`Ver retrato ${index + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-700 ${
                              avatarIndex === index ? 'w-8 bg-amber-200' : 'w-2.5 bg-white/35 hover:bg-white/70'
                            }`}
                            style={{ transitionTimingFunction: 'var(--ease-out)' }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-3'>
              {[
                { icon: Github, href: 'https://github.com/ZarRubio', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/adrianrubiocalixto/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:aerubio2305@gmail.com', label: 'Email' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className='group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-slate-200 transition-all duration-700 hover:bg-white hover:text-slate-950 active:scale-[0.98]'
                    style={{ transitionTimingFunction: 'var(--ease-out)' }}
                  >
                    <Icon size={16} strokeWidth={1.7} />
                    <span className='hidden sm:inline'>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className='mt-14 flex justify-center'
        >
          <ArrowDown className='text-amber-200' size={24} strokeWidth={1.5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
