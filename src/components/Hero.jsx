import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 400 },
  },
};

const Hero = () => {
  const name = "Ankita Kumari.".split("");

  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container hero-container">
        <motion.p 
          className="hero-intro font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          className="hero-title"
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', overflow: 'hidden', flexWrap: 'wrap' }}
        >
          {name.map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I turn ideas into reality.
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          I'm a <span className="keyword-highlight">Full-Stack Developer</span> specializing in creating exceptional digital experiences. 
          With expertise in building scalable web applications and integrating <span className="keyword-highlight">AI-agent workflows</span>, 
          I enjoy solving challenging problems that drive impactful innovation.
        </motion.p>

        <motion.div
          className="hero-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Magnetic>
            <a href="#!" className="hero-cta-button font-mono">
              Check out my resume!
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
