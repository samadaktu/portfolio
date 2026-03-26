import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ServicePage.css';

const CommercialLandscaping = () => {
  const services = [
    'Office complex grounds maintenance',
    'Business park landscaping',
    'Residential development care',
    'Shopping center grounds',
    'Corporate estate management',
    'Property management services',
    'Scheduled maintenance programs',
    'Emergency response services'
  ];

  const benefits = [
    { title: 'Professional Image', description: 'Well-maintained grounds create positive first impressions' },
    { title: 'Property Value', description: 'Quality landscaping enhances commercial property value' },
    { title: 'Tenant Satisfaction', description: 'Beautiful grounds improve tenant retention and satisfaction' },
    { title: 'Compliance Ready', description: 'Meet health & safety and aesthetic standards' }
  ];

  const process = [
    { step: '1', title: 'Site Survey', description: 'Comprehensive assessment of your commercial property' },
    { step: '2', title: 'Custom Program', description: 'Tailored maintenance schedule for your business needs' },
    { step: '3', title: 'Scheduled Service', description: 'Reliable, consistent service at optimal times' },
    { step: '4', title: 'Account Management', description: 'Dedicated support and regular communication' }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Commercial Landscaping</h1>
            <p>Professional landscaping solutions for businesses and property developments across Dublin</p>
            <Link to="/contact" className="btn btn-white btn-lg">Get Free Quote</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-overview">
            <motion.div className="overview-content" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Commercial Landscaping</span>
              <h2>Tailored Solutions for Business Properties</h2>
              <p>We specialize in commercial landscaping for office complexes, business parks, residential developments, and commercial estates across Dublin.</p>
              <p>Our commercial services are designed to minimize disruption, maintain professional standards, and provide the reliability that property managers and business owners require.</p>
            </motion.div>
            <motion.div className="overview-image" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Commercial Landscaping" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Commercial Services</h2>
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
            <h2>Business Benefits</h2>
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
            <h2>Our Approach</h2>
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
            <h2 className="text-white">Partner With Dublin's Commercial Landscaping Experts</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>Contact us to discuss your commercial property needs</p>
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

export default CommercialLandscaping;
