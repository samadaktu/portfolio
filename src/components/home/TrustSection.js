import React from 'react';
import { motion } from 'framer-motion';
import './TrustSection.css';

const TrustSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="trust-section section">
      <div className="container">
        <div className="trust-content">
          <motion.div className="trust-main" {...fadeInUp}>
            <h2>Serving Dublin Since 2006</h2>
            <p>
              With over 18 years of excellence in landscaping and grounds maintenance,
              Donnybrook Landscape Co has become Dublin's trusted partner for creating
              and maintaining beautiful outdoor spaces.
            </p>
          </motion.div>

          <motion.div
            className="trust-badges"
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="trust-badge">
              <div className="badge-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L23 15H33L25 21L28 31L20 25L12 31L15 21L7 15H17L20 5Z" fill="var(--primary-green)" stroke="var(--primary-green)" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Award-Winning</h3>
              <p>Recognized for excellence in landscaping</p>
            </div>

            <div className="trust-badge">
              <div className="badge-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="15" stroke="var(--primary-green)" strokeWidth="2" fill="none"/>
                  <path d="M15 20L18 23L25 16" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>ALCI Affiliated</h3>
              <p>Association of Landscape Contractors of Ireland member</p>
            </div>

            <div className="trust-badge">
              <div className="badge-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="10" y="10" width="20" height="20" stroke="var(--primary-green)" strokeWidth="2" fill="none"/>
                  <path d="M15 20L18 23L25 16" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Fully Insured</h3>
              <p>Complete peace of mind for all projects</p>
            </div>

            <div className="trust-badge">
              <div className="badge-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 10C15 10 10 12 10 15V25C10 28 15 30 20 30C25 30 30 28 30 25V15C30 12 25 10 20 10Z" stroke="var(--primary-green)" strokeWidth="2" fill="none"/>
                  <ellipse cx="20" cy="15" rx="10" ry="3" stroke="var(--primary-green)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>25+ Professionals</h3>
              <p>Experienced team of landscaping experts</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
