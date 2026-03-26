import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../ServicePage.css';

const GroundsMaintenance = () => {
  const services = [
    'Regular grass cutting and lawn care',
    'Professional hedge cutting and trimming',
    'Precision lawn edging',
    'Weed and moss control',
    'Seasonal maintenance programs',
    'Leaf clearance',
    'Garden bed maintenance',
    'Path and patio cleaning'
  ];

  const benefits = [
    {
      title: 'Consistent Quality',
      description: 'Regular scheduled maintenance keeps your grounds looking immaculate year-round'
    },
    {
      title: 'Cost-Effective',
      description: 'Preventive maintenance is more affordable than reactive repairs'
    },
    {
      title: 'Professional Results',
      description: 'Expert team with professional equipment delivers superior outcomes'
    },
    {
      title: 'Time-Saving',
      description: 'Focus on your business while we handle all your grounds maintenance needs'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We assess your property and discuss your specific requirements'
    },
    {
      step: '2',
      title: 'Custom Plan',
      description: 'Create a tailored maintenance schedule that suits your needs and budget'
    },
    {
      step: '3',
      title: 'Regular Service',
      description: 'Our team delivers consistent, reliable maintenance as scheduled'
    },
    {
      step: '4',
      title: 'Quality Checks',
      description: 'Regular reviews ensure we\'re exceeding your expectations'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="service-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Grounds Maintenance Services</h1>
            <p>Professional grounds care to keep your property looking its best all year round</p>
            <Link to="/contact" className="btn btn-white btn-lg">
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="service-overview">
            <motion.div
              className="overview-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Grounds Maintenance</span>
              <h2>Comprehensive Property Care</h2>
              <p>
                Our grounds maintenance service provides everything you need to keep your property
                looking professional and well-maintained throughout the year. From regular grass
                cutting to seasonal care, we handle it all.
              </p>
              <p>
                With over 18 years of experience serving Dublin, we understand the unique challenges
                of Irish weather and seasonal changes. Our proactive approach ensures your grounds
                always make the right impression.
              </p>
            </motion.div>

            <motion.div
              className="overview-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
                alt="Grounds Maintenance"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What's Included</h2>
            <p>Comprehensive services tailored to your property's needs</p>
          </motion.div>

          <div className="services-included">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
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

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Benefits</h2>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Process</h2>
            <p>How we deliver exceptional grounds maintenance</p>
          </motion.div>

          <div className="process-steps">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta section bg-green">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">Ready to Get Started?</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>
              Contact us today for a free, no-obligation quote for grounds maintenance
            </p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">
                Request Quote
              </Link>
              <a href="tel:012973344" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Call 01 2973344
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GroundsMaintenance;
