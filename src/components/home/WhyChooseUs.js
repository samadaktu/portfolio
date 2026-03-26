import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: '18+ Years Experience',
      description: 'Since 2006, we\'ve been delivering exceptional landscaping services across Dublin.',
      icon: '🏆'
    },
    {
      title: 'Professional Team',
      description: 'Our team of 25+ skilled professionals brings expertise and dedication to every project.',
      icon: '👥'
    },
    {
      title: 'Reliable Service',
      description: 'Consistent, dependable service that keeps your property looking its best year-round.',
      icon: '✓'
    },
    {
      title: 'Quality Guaranteed',
      description: 'Award-winning quality backed by ALCI affiliation and full insurance coverage.',
      icon: '⭐'
    },
    {
      title: 'Personalized Care',
      description: 'Tailored solutions designed specifically for your property\'s unique needs.',
      icon: '💚'
    },
    {
      title: 'Competitive Pricing',
      description: 'Professional service at fair prices with transparent, no-surprise quotes.',
      icon: '💰'
    }
  ];

  return (
    <section className="why-choose-us section bg-light">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Choose DLCO?</h2>
          <p className="section-description">
            Experience the difference that professionalism, expertise, and genuine care makes
          </p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
