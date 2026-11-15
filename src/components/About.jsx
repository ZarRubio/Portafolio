import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Gauge, Network } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const highlights = [
  {
    icon: Code2,
    title: 'Backend que aguanta uso real',
    description: 'Servicios Java/Spring Boot, JPA, validaciones y reglas de negocio con contratos claros.',
  },
  {
    icon: Gauge,
    title: 'Performance medible',
    description: 'Optimizacion de catalogos, assets y estabilidad visual para tiendas WooCommerce.',
  },
  {
    icon: Network,
    title: 'Arquitectura visible',
    description: 'Diagramas UML/C4 y documentacion que reducen malentendidos entre negocio y equipo.',
  },
];

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.18 });

  return (
    <section id='about' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end'
        >
          <div>
            <span className='eyebrow'>Perfil</span>
            <h2 className='section-title mt-5'>Construyo con criterio de producto.</h2>
          </div>
          <p className='section-copy lg:justify-self-end'>
            Me muevo bien donde se cruzan backend, web y claridad operativa: convertir una necesidad en un servicio mantenible, una interfaz entendible y un entregable que otro equipo pueda continuar.
          </p>
        </motion.div>

        <div className='grid gap-6 lg:grid-cols-[1fr_0.82fr]'>
          <motion.div
            initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className='premium-shell'
          >
            <div className='premium-core surface-soft p-7 md:p-10'>
              <div className='grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center'>
                <div className='overflow-hidden rounded-[1.35rem]'>
                  <img
                    src='/avatar2.jpeg'
                    alt='Retrato de Adrián Gustavo Rubio Calixto'
                    className='aspect-[4/5] h-full w-full object-cover'
                    loading='lazy'
                  />
                </div>
                <div className='space-y-5'>
                  <p className='text-lg leading-8 text-slate-200'>
                    Soy Adrián, ingeniero de software full-stack con foco en backend y APIs. Trabajo con Java, Spring Boot, Maven y MySQL para construir servicios confiables.
                  </p>
                  <p className='leading-8 text-slate-300'>
                    También he optimizado catálogos y performance en WordPress/WooCommerce, documentando arquitectura para que las decisiones técnicas no vivan solo en conversaciones.
                  </p>
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {['Lima, Perú', 'Remoto / Híbrido', 'APIs', 'E-commerce'].map((tag) => (
                      <span key={tag} className='rounded-full bg-white/[0.08] px-3 py-2 text-xs font-bold text-slate-200'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className='grid gap-4'>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28, filter: 'blur(8px)' }}
                  animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.75, delay: 0.12 + index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className='premium-shell'
                >
                  <div className='premium-core flex gap-4 p-5'>
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-200 text-slate-950'>
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h3 className='font-display text-xl font-semibold text-white'>{item.title}</h3>
                      <p className='mt-2 text-sm leading-6 text-slate-300'>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

