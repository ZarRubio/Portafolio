
import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ProjectsPage from '@/pages/ProjectsPage';
import SkillsPage from '@/pages/SkillsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import CertificationsPage from '@/pages/CertificationsPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Adrián Gustavo Rubio Calixto | Software Engineer (Backend & Web)</title>
        <meta name="description" content="Ingeniero de software full-stack con foco en backend/APIs (Java, Spring Boot, MySQL) y optimización de e-commerce WooCommerce. Documentación de arquitectura UML/C4 y performance web." />
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white'>
        <Navigation />
        <main className='pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/skills' element={<SkillsPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/certifications' element={<CertificationsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
