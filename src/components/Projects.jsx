
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const projects = [
    {
      title: 'Kaeser Platform API',
      description: 'API REST para equipos e indicadores medibles con reglas de negocio y validaciones de datos.',
      tags: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'REST'],
      image: 'Enterprise API design with database schema and validation rules'
    },
    {
      title: 'UniLaunch',
      description: 'Plataforma web para aprendizaje de planes de negocio orientada a universitarios emprendedores.',
      tags: ['Angular', 'REST APIs', 'UX/UI'],
      image: 'Web learning platform with dashboards and course modules'
    },
    {
      title: 'Healthy Plus (Arquitectura)',
      description: 'Diseño de arquitectura de software, diagramas UML/C4 y diseño de base de datos para plataforma de salud.',
      tags: ['Arquitectura', 'UML/C4', 'Modelado de datos'],
      image: 'Architecture diagrams and database schema for healthcare platform'
    },
    {
      title: 'ChaskiMarket (C4)',
      description: 'Modelado de contenedores y servicios para plataforma logística, enfocada en APIs y orquestación.',
      tags: ['C4 Model', 'APIs', 'Logística'],
      image: 'Logistics platform architecture with container diagram'
    },
    {
      title: 'Wokwi IoT (Ultrasonido + Buzzer)',
      description: 'Lógica de alertas según distancia en simulador IoT con ultrasonido y buzzer.',
      tags: ['IoT', 'Simulación', 'Alerta'],
      image: 'IoT sensor simulation with distance alerts'
    },
    {
      title: 'E-commerce Tuning',
      description: 'Optimización de catálogo, assets y estabilidad visual en WordPress/WooCommerce.',
      tags: ['WordPress', 'WooCommerce', 'Performance'],
      image: 'Optimized ecommerce storefront with fast loading and stable layout'
    }
  ];

  const handleLinkClick = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
    });
  };

  return (
    <section id='projects' className='py-20 lg:py-32 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
            Proyectos Destacados
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-400 mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='glass-panel rounded-xl overflow-hidden hover:border-amber-400/40 transition-all duration-300 group'
            >
              <div className='relative overflow-hidden h-48 bg-gradient-to-br from-slate-900/40 via-sky-900/20 to-amber-900/20'>
                <img 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                  alt={project.title}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60'></div>
              </div>
              
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors duration-300'>
                  {project.title}
                </h3>
                <p className='text-slate-300 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>
                
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className='px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-100 rounded-full border border-sky-500/30'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <Button
                    onClick={handleLinkClick}
                    size='sm'
                    className='flex-1 bg-sky-600 hover:bg-sky-700 text-white'
                  >
                    <ExternalLink size={16} className='mr-2' />
                    Demo (pronto)
                  </Button>
                  <Button
                    onClick={handleLinkClick}
                    variant='outline'
                    size='sm'
                    className='border-white/10 text-slate-200 hover:bg-white/5 hover:text-white'
                  >
                    <Github size={16} className='mr-2' />
                    Código
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
