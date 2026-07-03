import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <h2>Projects</h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.a href="#!" className="project-item" variants={itemVariants}>
            <h3>Project One</h3>
            <p>A minimalist web application built with React and Vite.</p>
          </motion.a>
          <motion.a href="#!" className="project-item" variants={itemVariants}>
            <h3>Project Two</h3>
            <p>An open-source tool for optimizing developer workflows.</p>
          </motion.a>
          <motion.a href="#!" className="project-item" variants={itemVariants}>
            <h3>Project Three</h3>
            <p>A beautiful, dark-themed dashboard interface.</p>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
