import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="contact-header" variants={itemVariants}>
            <p className="contact-overline">What's Next?</p>
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Although I'm not currently looking for any new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <motion.div className="contact-actions" variants={itemVariants}>
            <a href="mailto:hello@example.com" className="contact-btn primary-btn">
              <Mail className="btn-icon" size={20} />
              Say Hello
            </a>
          </motion.div>

          <motion.div className="contact-socials" variants={itemVariants}>
            <p className="socials-text">Or find me on:</p>
            <div className="socials-grid">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-card">
                <GithubIcon size={24} />
                <span>GitHub</span>
                <ArrowRight size={16} className="arrow-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-card">
                <LinkedinIcon size={24} />
                <span>LinkedIn</span>
                <ArrowRight size={16} className="arrow-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-card">
                <TwitterIcon size={24} />
                <span>Twitter</span>
                <ArrowRight size={16} className="arrow-icon" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
