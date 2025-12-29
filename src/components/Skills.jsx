
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'Java', level: 86 },
        { name: 'Spring Boot', level: 84 },
        { name: 'REST APIs', level: 90 },
        { name: 'JPA / Hibernate', level: 82 },
        { name: 'MySQL', level: 80 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 78 },
        { name: 'React', level: 72 },
        { name: 'TailwindCSS', level: 80 },
        { name: 'UX/UI', level: 74 }
      ]
    },
    {
      category: 'Datos & Comercio',
      skills: [
        { name: 'WordPress / WooCommerce', level: 82 },
        { name: 'Catálogo & SKUs', level: 85 },
        { name: 'Performance Web', level: 80 },
        { name: 'Lighthouse / Core Web Vitals', level: 76 }
      ]
    },
    {
      category: 'Tooling & Documentación',
      skills: [
        { name: 'Maven', level: 85 },
        { name: 'Git', level: 92 },
        { name: 'UML / C4', level: 88 },
        { name: 'Automatización', level: 80 }
      ]
    }
  ];

  return (
    <section id='skills' className='py-20 lg:py-32 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
            Habilidades Técnicas
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-400 mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className='glass-panel rounded-xl p-8 hover:border-amber-400/40 transition-all duration-300'
            >
              <h3 className='text-2xl font-bold mb-6 text-amber-300'>
                {category.category}
              </h3>
              <div className='space-y-6'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between mb-2'>
                      <span className='text-gray-300 font-medium'>{skill.name}</span>
                      <span className='text-blue-400 font-semibold'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className='h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative'
                      >
                        <div className='absolute inset-0 bg-white/20 animate-pulse'></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
