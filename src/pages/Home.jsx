import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Briefcase, MessageSquare, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const quickLinks = [
  { title: 'Perfil', to: '/about', desc: 'Enfoque, stack y forma de trabajo.', icon: UserRound },
  { title: 'Proyectos', to: '/projects', desc: 'Casos, entregables y decisiones técnicas.', icon: Briefcase },
  { title: 'Contacto', to: '/contact', desc: 'Agenda una conversación concreta.', icon: MessageSquare },
];

const Home = () => (
  <div>
    <Hero />

    <section className='section-wrap pt-0'>
      <div className='section-inner'>
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className='mb-8 flex items-end justify-between gap-6'
        >
          <div>
            <span className='eyebrow'>Accesos rapidos</span>
            <h2 className='section-title mt-4 max-w-3xl text-3xl md:text-5xl'>
              Ve directo a lo que importa.
            </h2>
          </div>
        </motion.div>

        <div className='grid gap-4 lg:grid-cols-3'>
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className='premium-shell'
              >
                <NavLink
                  to={item.to}
                  className='premium-core group flex min-h-[180px] flex-col justify-between p-6 transition-transform duration-700 hover:-translate-y-1'
                  style={{ transitionTimingFunction: 'var(--ease-out)' }}
                >
                  <div className='flex items-center justify-between'>
                    <span className='flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-amber-100'>
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <span className='magnetic-icon bg-white text-slate-950'>
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </span>
                  </div>
                  <div>
                    <h3 className='font-display text-2xl font-semibold text-white'>{item.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-slate-300'>{item.desc}</p>
                  </div>
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);

export default Home;

