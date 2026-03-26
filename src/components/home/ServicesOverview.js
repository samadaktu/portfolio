import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Grounds Maintenance',
      description: 'Comprehensive grounds care including grass cutting, hedge trimming, and seasonal maintenance.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 5C15 5 10 15 10 25C10 30 15 35 20 40L25 45L30 40C35 35 40 30 40 25C40 15 35 5 25 5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      link: '/services/grounds-maintenance'
    },
    {
      title: 'Landscaping Services',
      description: 'Professional soft landscaping, tree planting, and horticultural improvements for your property.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="35" cy="20" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 23V40M35 30V40" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      link: '/services/landscaping'
    },
    {
      title: 'Garden Maintenance',
      description: 'Expert care for residential gardens including weed control, mulching, and plant care.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 10L30 20L40 22L32 30L34 40L25 35L16 40L18 30L10 22L20 20L25 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      link: '/services/garden-maintenance'
    },
    {
      title: 'Commercial Landscaping',
      description: 'Tailored solutions for businesses, property developments, and commercial estates.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="10" y="15" width="30" height="25" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 20H20M25 20H35M15 25H25M30 25H35M15 30H20M25 30H35" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      link: '/services/commercial'
    },
    {
      title: 'Lawn Edging',
      description: 'Precision edging services to create clean, professional lines for your lawn.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="10" y="20" width="30" height="15" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
          <path d="M10 25H40M10 30H40" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      link: '/services/grounds-maintenance'
    },
    {
      title: 'Plant & Shrub Care',
      description: 'Professional pruning, feeding, and maintenance to keep your plants healthy and thriving.',
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 40V25M25 25C25 20 20 15 15 12M25 25C25 20 30 15 35 12M15 12C18 15 20 20 20 25M35 12C32 15 30 20 30 25" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      link: '/services/garden-maintenance'
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="services-overview section">
      <div className="container">
        <motion.div className="section-header" {...fadeInUp}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive landscaping and grounds maintenance solutions tailored to your needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
