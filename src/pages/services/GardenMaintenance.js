import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ServicePage.css';

const GardenMaintenance = () => {
  const services = [
    'Regular garden care and maintenance',
    'Weed and moss control',
    'Mulching and soil conditioning',
    'Plant and shrub pruning',
    'Seasonal plant care',
    'Flower bed maintenance',
    'Garden cleanup services',
    'Organic pest management'
  ];

  const benefits = [
    { title: 'Healthy Gardens', description: 'Regular care keeps plants healthy and thriving year-round' },
    { title: 'Save Time', description: 'Enjoy your garden without the hard work' },
    { title: 'Expert Knowledge', description: 'Professional horticultural expertise for optimal results' },
    { title: 'Seasonal Care', description: 'Tailored maintenance for each season\'s unique needs' }
  ];

  const process = [
    { step: '1', title: 'Garden Assessment', description: 'We evaluate your garden\'s current condition and needs' },
    { step: '2', title: 'Care Plan', description: 'Develop a customized maintenance schedule' },
    { step: '3', title: 'Regular Visits', description: 'Consistent care delivered by our expert team' },
    { step: '4', title: 'Ongoing Adjustments', description: 'Adapt care as your garden evolves' }
  ];

  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Garden Maintenance</h1>
            <p>Expert residential garden care to keep your outdoor space beautiful all year</p>
            <Link to="/contact" className="btn btn-white btn-lg">Get Free Quote</Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-overview">
            <motion.div className="overview-content" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Garden Maintenance</span>
              <h2>Beautiful Gardens, Expertly Maintained</h2>
              <p>Our garden maintenance service provides comprehensive care for residential gardens, ensuring your outdoor space remains healthy, beautiful, and enjoyable throughout the year.</p>
              <p>From weed control and mulching to plant care and seasonal maintenance, we handle all aspects of garden upkeep with professional expertise.</p>
            </motion.div>
            <motion.div className="overview-image" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80" alt="Garden Maintenance" loading="lazy" />
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
            <h2 className="text-white">Let Us Care For Your Garden</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>Get in touch for expert garden maintenance services</p>
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

export default GardenMaintenance;
