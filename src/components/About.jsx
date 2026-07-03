import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <h2>About</h2>
        <p>
          I am a developer who loves building things that live on the internet.
          My focus is on creating simple, functional, and minimalist digital experiences.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
