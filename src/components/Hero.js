import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-subtitle">
            Welcome to my digital presence
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero-title">
            Abdul Samad
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-role">
            Founder of <span className="highlight">Techno Alig</span>
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Building modern digital experiences through WordPress, design, and technology. Founder, WordPress developer, and UI/UX-focused creator transforming ideas into elegant web solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-ctas">
            <button className="btn btn-primary" onClick={() => scrollToSection('#portfolio')}> 
              View Work <FiArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('#contact')}> 
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://www.instagram.com/samad.alig" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/abdulsamad5041/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/samad_io" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaXTwitter />
            </a>
            <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
              TA
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Abdul Samad - Founder"
              className="profile-image"
            />
          </div>
          <div className="image-gradient"></div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;