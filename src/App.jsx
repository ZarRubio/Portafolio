
import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Adrián Gustavo Rubio Calixto | Software Engineer (Backend & Web)</title>
        <meta name="description" content="Ingeniero de software full-stack con foco en backend/APIs (Java, Spring Boot, MySQL) y optimización de e-commerce WooCommerce. Documentación de arquitectura UML/C4 y performance web." />
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white'>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
