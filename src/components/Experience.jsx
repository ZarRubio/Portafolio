
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      title: 'Backend & API Projects',
      company: 'Freelance / Académico',
      period: '2024',
      description: 'Diseño e implementación de APIs REST con Java 22, Spring Boot, JPA y MySQL.',
      achievements: [
        'Validaciones y reglas de negocio para datos de equipos/indicadores (Kaeser Platform API).',
        'Mejora de integridad reduciendo errores por inputs inválidos (métrica por medir).',
        'Documentación técnica clara para handoff y soporte.'
      ]
    },
    {
      title: 'E-commerce Optimization',
      company: 'WordPress / WooCommerce',
      period: '2023',
      description: 'Optimización de catálogo, assets y estabilidad visual en un e-commerce.',
      achievements: [
        'Ajustes de performance (Lighthouse/Core Web Vitals) y estructura de catálogo.',
        'Estandarización de SKUs/atributos para evitar duplicados y errores de inventario.',
        'Refinamiento visual para reducir CLS y mejorar experiencia de compra.'
      ]
    },
    {
      title: 'Arquitectura & Documentación',
      company: 'Healthy Plus / ChaskiMarket',
      period: '2023',
      description: 'Diseño de arquitectura, diagramas UML/C4 y base de datos para proyectos académicos.',
      achievements: [
        'Modelado de contenedores/servicios y flujos para plataforma logística (ChaskiMarket).',
        'Alineación técnica mediante diagramas claros, reduciendo retrabajo (métrica por medir).',
        'Diseño de BD y entregables que aceleran la implementación de equipos.'
      ]
    }
  ];

  return (
    <section id='experience' className='py-20 lg:py-32 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
            Experiencia Profesional
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-400 mx-auto rounded-full'></div>
        </motion.div>

        <div className='max-w-4xl mx-auto relative'>
          <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-amber-400 to-sky-500 transform md:-translate-x-1/2'></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'} md:w-1/2`}
            >
              <div className='absolute left-0 md:left-auto md:right-0 top-0 w-4 h-4 bg-amber-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 md:translate-x-1/2 z-10' style={{ left: index % 2 === 0 ? 'auto' : '0', right: index % 2 === 0 ? '-2px' : 'auto' }}></div>

              <div className='glass-panel rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300 ml-8 md:ml-0 group'>
                <div className='flex items-center gap-2 mb-3 text-amber-300'>
                  <Briefcase size={20} />
                  <h3 className='text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300'>
                    {exp.title}
                  </h3>
                </div>
                
                <p className='text-lg font-semibold text-gray-300 mb-2'>{exp.company}</p>
                
                <div className='flex items-center gap-2 text-gray-400 mb-4'>
                  <Calendar size={16} />
                  <span className='text-sm'>{exp.period}</span>
                </div>

                <p className='text-gray-400 mb-4 leading-relaxed'>
                  {exp.description}
                </p>

                <ul className='space-y-2'>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className='flex items-start gap-2 text-sm text-gray-400'>
                      <span className='text-blue-400 mt-1'>▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
