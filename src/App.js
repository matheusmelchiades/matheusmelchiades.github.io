import React from 'react';
import './App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <ParticlesCanvas />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
