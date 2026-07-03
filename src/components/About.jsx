import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.div style={{ y: yText, opacity: opacityText }}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
