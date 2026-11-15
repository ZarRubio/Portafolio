import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileCode2, Gauge, Wrench } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    category: 'Backend & APIs',
    icon: Database,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'JPA / Hibernate', 'MySQL'],
  },
  {
    category: 'Frontend',
    icon: FileCode2,
    skills: ['Angular', 'React', 'TailwindCSS', 'UX/UI'],
  },
  {
    category: 'Datos & Comercio',
    icon: Gauge,
    skills: ['WooCommerce', 'Catálogo & SKUs', 'Performance Web', 'Core Web Vitals'],
  },
  {
    category: 'Tooling & Documentación',
    icon: Wrench,
    skills: ['Maven', 'Git', 'UML / C4', 'Automatización'],
  },
];

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.18 });

  return (
    <section id='skills' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 max-w-4xl'
        >
          <span className='eyebrow'>Habilidades</span>
          <h2 className='section-title mt-5'>Stack compacto para entregar de punta a punta.</h2>
          <p className='section-copy mt-6'>
            Priorizo herramientas que ayudan a construir, explicar y mantener: servicios backend, integraciones web, datos limpios y documentación que realmente se usa.
          </p>
        </motion.div>

        <div className='grid gap-5 md:grid-cols-2'>
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: categoryIndex * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className='premium-shell'
              >
                <div className='premium-core p-6 md:p-8'>
                  <div className='mb-8 flex items-center justify-between gap-4'>
                    <div>
                      <p className='text-[10px] font-bold uppercase tracking-[0.22em] text-amber-100'>
                        Area {String(categoryIndex + 1).padStart(2, '0')}
                      </p>
                      <h3 className='font-display mt-2 text-2xl font-semibold text-white'>{category.category}</h3>
                    </div>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950'>
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 14 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, delay: 0.12 + categoryIndex * 0.06 + index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                        className='rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-slate-200'
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
