import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    title: 'Backend & API Projects',
    company: 'Freelance / Académico',
    period: '2024',
    description: 'Diseño e implementación de APIs REST con Java 22, Spring Boot, JPA y MySQL.',
    achievements: [
      'Validaciones y reglas de negocio para datos de equipos e indicadores.',
      'Mejora de integridad en formularios y entradas invalidas.',
      'Documentacion tecnica clara para handoff y soporte.',
    ],
  },
  {
    title: 'E-commerce Optimization',
    company: 'WordPress / WooCommerce',
    period: '2023',
    description: 'Optimización de catálogo, assets y estabilidad visual en e-commerce.',
    achievements: [
      'Ajustes de performance, estructura de catalogo y Core Web Vitals.',
      'Estandarizacion de SKUs y atributos para evitar duplicados.',
      'Refinamiento visual para reducir CLS y mejorar compra.',
    ],
  },
  {
    title: 'Arquitectura & Documentación',
    company: 'Healthy Plus / ChaskiMarket',
    period: '2023',
    description: 'Diseño de arquitectura, diagramas UML/C4 y base de datos para proyectos académicos.',
    achievements: [
      'Modelado de contenedores, servicios y flujos logísticos.',
      'Alineación técnica mediante diagramas claros.',
      'Diseño de BD y entregables para acelerar implementación.',
    ],
  },
];

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id='experience' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end'
        >
          <div>
            <span className='eyebrow'>Experiencia</span>
            <h2 className='section-title mt-5'>Ejecucion con contexto.</h2>
          </div>
          <p className='section-copy lg:justify-self-end'>
            Mi experiencia combina implementación, optimización y documentación. El valor está en dejar sistemas más claros de lo que estaban al entrar.
          </p>
        </motion.div>

        <div className='grid gap-5'>
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
              className='premium-shell'
            >
              <div className='premium-core grid gap-6 p-6 md:grid-cols-[0.36fr_0.64fr] md:p-8'>
                <div className='space-y-4'>
                  <span className='inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3 py-2 text-xs font-bold text-slate-200'>
                    <Calendar size={14} strokeWidth={1.7} />
                    {exp.period}
                  </span>
                  <div>
                    <h3 className='font-display text-2xl font-semibold text-white'>{exp.title}</h3>
                    <p className='mt-2 font-semibold text-amber-100'>{exp.company}</p>
                  </div>
                  <p className='leading-7 text-slate-300'>{exp.description}</p>
                </div>

                <ul className='grid content-center gap-3'>
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className='flex items-start gap-3 text-sm leading-6 text-slate-300'>
                      <CheckCircle2 className='mt-0.5 shrink-0 text-amber-200' size={17} strokeWidth={1.7} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

