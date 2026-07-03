import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <CustomCursor />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div id="top"></div>
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
