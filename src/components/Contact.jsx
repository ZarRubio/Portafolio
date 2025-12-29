
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje. 🚀",
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'aerubio2305@gmail.com',
      link: 'mailto:aerubio2305@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Teléfono',
      value: '+51 988 444 953',
      link: 'tel:+51988444953'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Ubicación',
      value: 'Lima, Perú (Remoto / Híbrido)',
      link: null
    }
  ];

  return (
    <section id='contact' className='py-20 lg:py-32 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent'></div>
      
      <div className='container mx-auto px-4 lg:px-8 relative z-10' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-amber-300 bg-clip-text text-transparent'>
            Contacto
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-sky-500 to-amber-400 mx-auto rounded-full mb-4'></div>
          <p className='text-slate-300 max-w-2xl mx-auto'>
            ¿Tienes un proyecto de APIs, performance web o e-commerce? Conversemos y vemos cómo puedo ayudarte a llegar a producción con calidad.
          </p>
        </motion.div>

        <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className='space-y-6 mb-8'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className='flex items-start gap-4 glass-panel rounded-xl p-6 hover:border-amber-400/40 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-br from-sky-500/20 to-amber-500/20 rounded-lg flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform duration-300'>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className='text-slate-300 hover:text-amber-300 transition-colors duration-200'
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className='text-slate-300'>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className='glass-panel rounded-xl p-6'
            >
              <h3 className='text-xl font-bold text-white mb-4'>Horario de Respuesta</h3>
              <p className='text-slate-300'>
                Generalmente respondo dentro de 24-48 horas. Para consultas urgentes, utiliza el teléfono o menciona el plazo en el mensaje.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className='glass-panel rounded-xl p-8 border border-white/5'>
              <div className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                    Nombre Completo
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200'
                    placeholder='Tu nombre'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200'
                    placeholder='tu@email.com'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                    Asunto
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200'
                    placeholder='¿En qué puedo ayudarte?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                    Mensaje
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows='5'
                    className='w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none'
                    placeholder='Cuéntame sobre tu proyecto...'
                  ></textarea>
                </div>

                <Button
                  type='submit'
                  className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105'
                >
                  <Send size={20} className='mr-2' />
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
