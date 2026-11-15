import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/components/ui/use-toast';

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'aerubio2305@gmail.com', link: 'mailto:aerubio2305@gmail.com' },
  { icon: Phone, title: 'Teléfono', value: '+51 988 444 953', link: 'tel:+51988444953' },
  { icon: MapPin, title: 'Ubicación', value: 'Lima, Perú / Remoto', link: null },
];

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.16 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Formulario listo visualmente',
      description: 'Falta conectarlo a un servicio de envío o backend para recibir mensajes reales.',
    });
  };

  return (
    <section id='contact' className='section-wrap'>
      <div className='section-inner' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
          className='mb-14 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end'
        >
          <div>
            <span className='eyebrow'>Contacto</span>
            <h2 className='section-title mt-5'>Conversemos con contexto.</h2>
          </div>
          <p className='section-copy lg:justify-self-end'>
            Si tienes un proyecto de APIs, performance web o e-commerce, puedo ayudarte a ordenar alcance, riesgos y una primera ruta de entrega.
          </p>
        </motion.div>

        <div className='grid gap-6 lg:grid-cols-[0.88fr_1.12fr]'>
          <motion.div
            initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className='space-y-5'
          >
            <div className='premium-shell'>
              <div className='premium-core surface-soft p-6'>
                <div className='flex flex-col gap-5 sm:flex-row sm:items-center'>
                  <img
                    src='/avatar3.jpeg'
                    alt='Retrato de Adrián Gustavo Rubio Calixto'
                    className='h-24 w-24 rounded-[1.5rem] object-cover'
                    loading='lazy'
                  />
                  <div>
                    <p className='text-xs font-bold uppercase tracking-[0.22em] text-amber-100'>Disponibilidad</p>
                    <h3 className='font-display mt-2 text-2xl font-semibold text-white'>Respuesta 24-48h</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-300'>Backend, e-commerce, performance y documentacion tecnica.</p>
                  </div>
                </div>
              </div>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className='premium-core flex items-center justify-between gap-4 p-5'>
                  <div className='flex items-center gap-4'>
                    <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950'>
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className='text-sm font-bold uppercase tracking-[0.18em] text-slate-400'>{info.title}</h3>
                      <p className='mt-1 text-sm font-semibold text-white sm:text-base'>{info.value}</p>
                    </div>
                  </div>
                  {info.link && <ArrowUpRight size={16} strokeWidth={1.7} className='text-amber-100' />}
                </div>
              );

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.12 + index * 0.06, ease: [0.32, 0.72, 0, 1] }}
                  className='premium-shell'
                >
                  {info.link ? (
                    <a href={info.link} className='block transition-transform duration-700 hover:-translate-y-1' style={{ transitionTimingFunction: 'var(--ease-out)' }}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className='premium-shell'
          >
            <form onSubmit={handleSubmit} className='premium-core p-6 md:p-8'>
              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label htmlFor='name' className='mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400'>
                    Nombre
                  </label>
                  <input id='name' name='name' value={formData.name} onChange={handleChange} required className='field' placeholder='Tu nombre' />
                </div>
                <div>
                  <label htmlFor='email' className='mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400'>
                    Email
                  </label>
                  <input id='email' type='email' name='email' value={formData.email} onChange={handleChange} required className='field' placeholder='tu@email.com' />
                </div>
                <div className='md:col-span-2'>
                  <label htmlFor='subject' className='mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400'>
                    Asunto
                  </label>
                  <input id='subject' name='subject' value={formData.subject} onChange={handleChange} required className='field' placeholder='En qué puedo ayudarte' />
                </div>
                <div className='md:col-span-2'>
                  <label htmlFor='message' className='mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-400'>
                    Mensaje
                  </label>
                  <textarea id='message' name='message' value={formData.message} onChange={handleChange} required rows='6' className='field resize-none' placeholder='Cuéntame sobre tu proyecto...' />
                </div>
              </div>

              <Button type='submit' className='magnetic-btn mt-6 h-auto w-full bg-white text-slate-950 hover:bg-amber-100'>
                Enviar mensaje
                <span className='magnetic-icon bg-slate-950 text-white'>
                  <Send size={15} strokeWidth={1.7} />
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
