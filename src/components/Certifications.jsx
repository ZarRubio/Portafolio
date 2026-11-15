import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/components/ui/use-toast';

const certifications = [
  ['API REST con validaciones', 'Spring Boot / MySQL', '2024'],
  ['Optimización de e-commerce', 'WooCommerce / Core Web Vitals', '2023'],
  ['Arquitectura documentada', 'UML / C4', '2023'],
  ['Automatizacion de catalogos', 'Datos / SKUs', '2023'],
];

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.18 });
  const { toast } = useToast();

  const handleVerify = () => {
    toast({
      title: 'Detalle en preparación',
      description: 'Aquí se pueden enlazar certificados, PDFs o casos extendidos cuando estén publicados.',
    });
  };

  return (
    <section id='certifications' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 max-w-4xl'
        >
          <span className='eyebrow'>Logros</span>
          <h2 className='section-title mt-5'>Evidencia de aprendizaje aplicado.</h2>
          <p className='section-copy mt-6'>
            Estos bloques resumen capacidades concretas que se pueden ampliar con enlaces, repositorios o casos de estudio.
          </p>
        </motion.div>

        <div className='grid gap-5 md:grid-cols-2'>
          {certifications.map(([name, issuer, date], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.72, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
              className='premium-shell'
            >
              <div className='premium-core flex h-full flex-col justify-between gap-8 p-6'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-amber-200 text-slate-950'>
                    <Award size={20} strokeWidth={1.7} />
                  </div>
                  <span className='rounded-full bg-white/[0.08] px-3 py-1 text-xs font-bold text-slate-300'>{date}</span>
                </div>

                <div>
                  <h3 className='font-display text-2xl font-semibold text-white'>{name}</h3>
                  <p className='mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400'>{issuer}</p>
                </div>

                <Button
                  onClick={handleVerify}
                  variant='outline'
                  size='sm'
                  className='magnetic-btn h-auto w-full border-white/10 bg-white/[0.035] text-white hover:bg-white/10 hover:text-white'
                >
                  Ver detalle
                  <span className='magnetic-icon bg-white text-slate-950'>
                    <ArrowUpRight size={15} strokeWidth={1.7} />
                  </span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

