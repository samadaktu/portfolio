import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-overlay"></div>
      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Transform Your Outdoor Space?</h2>
          <p>
            Get in touch today for a free, no-obligation quote. Let's discuss how we can
            bring your landscaping vision to life.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white btn-lg">
              Get Free Quote
            </Link>
            <a href="tel:012973344" className="btn btn-secondary btn-lg">
              Call 01 2973344
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
