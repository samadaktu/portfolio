import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ServicePage.css';

const LandscapingServices = () => {
  const services = [
    'Soft landscaping design and installation',
    'Tree planting and care',
    'Horticultural improvements',
    'Plant and shrub selection',
    'Garden bed creation',
    'Mulching and soil enhancement',
    'Native plant installations',
    'Seasonal planting programs'
  ];

  const benefits = [
    { title: 'Expert Design', description: 'Professional landscape design that enhances your property value' },
    { title: 'Quality Plants', description: 'Carefully selected plants suited to Dublin\'s climate' },
    { title: 'Sustainable Solutions', description: 'Eco-friendly landscaping that supports local biodiversity' },
    { title: 'Long-term Beauty', description: 'Landscapes designed to mature beautifully over time' }
  ];

  const process = [
    { step: '1', title: 'Site Assessment', description: 'We evaluate your property, soil, and sunlight conditions' },
    { step: '2', title: 'Design Proposal', description: 'Create a custom landscape plan tailored to your vision' },
    { step: '3', title: 'Installation', description: 'Professional planting and landscaping implementation' },
    { step: '4', title: 'Ongoing Care', description: 'Optional maintenance to keep your landscape thriving' }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Landscaping Services</h1>
            <p>Transform your outdoor space with professional soft landscaping and horticultural expertise</p>
            <Link to="/contact" className="btn btn-white btn-lg">Get Free Quote</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-overview">
            <motion.div className="overview-content" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Landscaping Services</span>
              <h2>Creating Beautiful Outdoor Spaces</h2>
              <p>Our landscaping services bring your outdoor vision to life with professional soft landscaping, carefully selected plants, and expert horticultural knowledge.</p>
              <p>From tree planting to complete garden transformations, we create sustainable, beautiful landscapes that enhance your property and support local ecosystems.</p>
            </motion.div>
            <motion.div className="overview-image" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80" alt="Landscaping Services" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>What's Included</h2>
          </motion.div>
          <div className="services-included">
            {services.map((service, index) => (
              <motion.div key={index} className="service-item" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--primary-green)" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Benefits</h2>
          </motion.div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div key={index} className="benefit-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Our Process</h2>
          </motion.div>
          <div className="process-steps">
            {process.map((item, index) => (
              <motion.div key={index} className="process-step" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta section bg-green">
        <div className="container">
          <motion.div className="cta-content text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-white">Ready to Transform Your Landscape?</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>Contact us for a free consultation and quote</p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">Request Quote</Link>
              <a href="tel:012973344" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>Call 01 2973344</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandscapingServices;
