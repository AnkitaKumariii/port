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
        <p>
          Currently, I am pursuing my B.Tech in Electronics and Instrumentation Engineering at the <span className="keyword-highlight">National Institute of Technology (NIT), Agartala</span>. 
        </p>
        <p>
          I also serve as a Core Member of the Entrepreneurship Club at NIT Agartala, where I lead frontend architectural improvements and drive UI/UX enhancements to boost user engagement and event registrations.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
