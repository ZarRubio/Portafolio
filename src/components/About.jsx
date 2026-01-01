
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'APIs y Backend',
      description: 'Java/Spring Boot, JPA y MySQL con validaciones y reglas de negocio'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance & E-commerce',
      description: 'Optimización de WooCommerce: catálogo, assets y estabilidad visual'
    },
    {
      icon: <Users size={32} />,
      title: 'Arquitectura clara',
      description: 'Diagramas UML/C4 y documentación que aceleran la entrega del equipo'
    }
  ];

  return (
    <section id='about' className='py-20 lg:py-32 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            Sobre Mí
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full'></div>
        </motion.div>

        <div className='max-w-6xl mx-auto space-y-12'>
          <div className='grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='glass-panel rounded-2xl p-8 md:p-12'
            >
              <p className='text-lg text-slate-200 leading-relaxed mb-6'>
                Soy Adrián, ingeniero de software full-stack con foco en backend y APIs. Trabajo con Java (Spring Boot), Maven y MySQL para construir servicios confiables, y con Angular en el frontend cuando se necesita una entrega completa.
              </p>
              <p className='text-lg text-slate-200 leading-relaxed mb-6'>
                He optimizado catálogos y performance en e-commerce WordPress/WooCommerce, y documento arquitectura (UML/C4) para alinear equipos y reducir retrabajo. Busco roles remotos o híbridos desde Lima, Perú.
              </p>
              <p className='text-lg text-slate-200 leading-relaxed'>
                Me interesa seguir profundizando en APIs robustas, observabilidad y buenas prácticas de performance web.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className='relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40'
            >
              <img
                src='/avatar2.jpeg'
                alt='Retrato de Adrián Gustavo Rubio Calixto'
                className='w-full h-full object-cover max-h-[520px]'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent'></div>
              <div className='absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between'>
                <div className='text-sm text-white'>Backend · APIs · Performance</div>
                <span className='px-3 py-1 rounded-full text-xs text-amber-200 bg-amber-500/15 border border-amber-400/40'>Lima, Perú</span>
              </div>
            </motion.div>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='glass-panel rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300 group'
              >
                <div className='text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2 text-white'>{item.title}</h3>
                <p className='text-slate-300'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
