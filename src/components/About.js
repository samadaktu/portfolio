import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiAward } from 'react-icons/fi';
import './About.css';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
];

const highlights = [
  { icon: <FiCode />, title: 'WordPress Expert', desc: 'Custom themes, plugins, and full-stack WordPress solutions.' },
  { icon: <FiLayout />, title: 'UI/UX Designer', desc: 'User-centred designs crafted in Figma and Adobe Illustrator.' },
  { icon: <FiAward />, title: 'Founder, Techno Alig', desc: 'Building digital products that help businesses grow online.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const About = () => (
  <section id="about" className="about">
    <div className="container about-inner">
      {/* Left: text */}
      <motion.div
        className="about-text"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="section-label">About Me</motion.p>
        <motion.h2 variants={fadeUp} className="section-title">
          Crafting Digital <span className="highlight">Experiences</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="about-bio">
          Hi, I'm <strong>Abdul Samad</strong> — a passionate WordPress developer, UI/UX designer, and the founder of{' '}
          <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="about-link">
            Techno Alig
          </a>
          . Based in India, I specialise in building elegant, high-performance websites that help businesses establish a powerful online presence.
        </motion.p>
        <motion.p variants={fadeUp} className="about-bio">
          With 3+ years of hands-on experience, I've delivered 50+ projects spanning e-commerce stores, business websites, creative portfolios, and SaaS landing pages. I blend technical precision with a designer's eye to create digital solutions that are as beautiful as they are functional.
        </motion.p>
        <motion.p variants={fadeUp} className="about-bio">
          Currently pursuing B.Tech in Computer Science at Dr. A.P.J. Abdul Kalam Technical University, I continuously expand my skills across modern web technologies.
        </motion.p>

        <motion.div variants={stagger} className="about-highlights">
          {highlights.map((h, i) => (
            <motion.div key={i} variants={fadeUp} className="highlight-item">
              <span className="highlight-icon">{h.icon}</span>
              <div>
                <p className="highlight-title">{h.title}</p>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp}>
          <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Right: stats */}
      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="about-image-card">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop"
            alt="Abdul Samad working"
            className="about-image"
          />
          <div className="about-image-overlay">
            <p className="overlay-text">Open to freelance & collaborations</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
