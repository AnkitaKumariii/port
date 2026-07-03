import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import Contributions from './components/Contributions';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <CustomCursor />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <div id="top"></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contributions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
