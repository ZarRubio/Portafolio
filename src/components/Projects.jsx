import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers, Server, ShoppingBag, Workflow } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const projects = [
  {
    title: 'Kaeser Platform API',
    description: 'API REST para equipos e indicadores medibles con reglas de negocio, validaciones y persistencia relacional.',
    tags: ['Java', 'Spring Boot', 'JPA', 'MySQL'],
    icon: Server,
    size: 'lg:col-span-2',
  },
  {
    title: 'UniLaunch',
    description: 'Plataforma web para aprendizaje de planes de negocio orientada a universitarios emprendedores.',
    tags: ['Angular', 'REST APIs', 'UX/UI'],
    icon: Workflow,
    size: '',
  },
  {
    title: 'Healthy Plus',
    description: 'Arquitectura de software, UML/C4 y diseño de base de datos para plataforma de salud.',
    tags: ['Arquitectura', 'UML/C4', 'Datos'],
    icon: Layers,
    size: '',
  },
  {
    title: 'ChaskiMarket',
    description: 'Modelado de contenedores y servicios para plataforma logística enfocada en APIs y orquestación.',
    tags: ['C4 Model', 'APIs', 'Logistica'],
    icon: Workflow,
    size: '',
  },
  {
    title: 'E-commerce Tuning',
    description: 'Optimización de catálogo, assets y estabilidad visual en WordPress/WooCommerce.',
    tags: ['WooCommerce', 'Performance', 'CLS'],
    icon: ShoppingBag,
    size: 'lg:col-span-2',
  },
];

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const handleLinkClick = () => {
    toast({
      title: 'Detalle en preparacion',
      description: 'Puedo conectar demos, repositorios o casos de estudio cuando tengas los enlaces finales.',
    });
  };

  return (
    <section id='projects' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end'
        >
          <div>
            <span className='eyebrow'>Proyectos</span>
            <h2 className='section-title mt-5'>Trabajo aplicado, no solo stack.</h2>
          </div>
          <p className='section-copy lg:justify-self-end'>
            Selección de proyectos donde el foco estuvo en claridad técnica: APIs mantenibles, arquitectura documentada, rendimiento web y entregables listos para conversar con negocio.
          </p>
        </motion.div>

        <div className='grid gap-5 lg:grid-cols-3'>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.75, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
                className={`premium-shell ${project.size}`}
              >
                <div className='premium-core group flex min-h-[330px] flex-col justify-between overflow-hidden p-6'>
                  <div className='flex items-start justify-between gap-5'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950'>
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <span className='rounded-full bg-white/[0.08] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300'>
                      Caso {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className='my-8 rounded-[1.25rem] border border-white/[0.08] bg-white/[0.035] p-4'>
                    <div className='mb-3 flex items-center gap-2'>
                      <span className='h-2 w-2 rounded-full bg-amber-200' />
                      <span className='h-2 w-2 rounded-full bg-sky-200' />
                      <span className='h-2 w-2 rounded-full bg-white/30' />
                    </div>
                    <div className='space-y-2 text-xs font-semibold text-slate-400'>
                      <div className='h-2 w-3/4 rounded-full bg-white/[0.12]' />
                      <div className='h-2 w-1/2 rounded-full bg-white/[0.08]' />
                      <div className='h-2 w-5/6 rounded-full bg-white/10' />
                    </div>
                  </div>

                  <div>
                    <h3 className='font-display text-2xl font-semibold text-white transition-colors duration-700 group-hover:text-amber-100'>
                      {project.title}
                    </h3>
                    <p className='mt-3 text-sm leading-7 text-slate-300'>{project.description}</p>

                    <div className='mt-5 flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <span key={tag} className='rounded-full bg-white/[0.08] px-3 py-1.5 text-xs font-bold text-slate-200'>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                      <Button
                        onClick={handleLinkClick}
                        size='sm'
                        className='magnetic-btn h-auto flex-1 bg-white text-slate-950 hover:bg-amber-100'
                      >
                        Demo
                        <span className='magnetic-icon bg-slate-950 text-white'>
                          <ArrowUpRight size={15} strokeWidth={1.7} />
                        </span>
                      </Button>
                      <Button
                        onClick={handleLinkClick}
                        variant='outline'
                        size='sm'
                        className='magnetic-btn h-auto flex-1 border-white/10 bg-white/[0.035] text-white hover:bg-white/10 hover:text-white'
                      >
                        Código
                        <span className='magnetic-icon bg-white/10 text-amber-100'>
                          <Github size={15} strokeWidth={1.7} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

