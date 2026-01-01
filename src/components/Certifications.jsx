
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();

  const certifications = [
    {
      name: 'API REST con validaciones y reglas de negocio',
      issuer: 'Spring Boot · MySQL',
      date: '2024',
      icon: 'API reliability and data validation'
    },
    {
      name: 'Optimización de e-commerce (Lighthouse/Core Web Vitals)',
      issuer: 'WordPress / WooCommerce',
      date: '2023',
      icon: 'Performance tuning for storefronts'
    },
    {
      name: 'Arquitectura documentada (UML/C4)',
      issuer: 'Healthy Plus / ChaskiMarket',
      date: '2023',
      icon: 'Architecture diagrams and documentation'
    },
    {
      name: 'Estandarización y automatización de catálogos',
      issuer: 'Automatización de datos',
      date: '2023',
      icon: 'SKU normalization and automation'
    }
  ];

  const handleVerify = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
    });
  };

  return (
    <section id='certifications' className='py-20 lg:py-32 relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold leading-tight md:leading-[1.15] mb-4 bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
            Logros clave
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-400 mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className='glass-panel rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300 group'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='w-16 h-16 bg-gradient-to-br from-sky-500/20 to-amber-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Award className='text-amber-300' size={32} />
                </div>
                <span className='px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-100 rounded-full border border-sky-500/30'>
                  {cert.date}
                </span>
              </div>

              <h3 className='text-lg font-bold leading-snug text-white mb-2 group-hover:text-amber-300 transition-colors duration-300'>
                {cert.name}
              </h3>
              
              <p className='text-slate-300 text-sm mb-4'>{cert.issuer}</p>

              <Button
                onClick={handleVerify}
                variant='outline'
                size='sm'
                className='w-full border-white/10 text-slate-200 hover:bg-white/5 hover:text-white hover:border-amber-400/40 transition-all duration-300'
              >
                <ExternalLink size={16} className='mr-2' />
                Ver detalle
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
