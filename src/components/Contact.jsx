import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <h2>Contact</h2>
        <p>Interested in working together or just want to say hi?</p>
        <a href="mailto:hello@example.com">Email Me &rarr;</a>
      </div>
    </motion.section>
  );
};

export default Contact;
