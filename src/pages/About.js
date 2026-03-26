import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our work, materials, or service.',
      icon: '⭐'
    },
    {
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on year-round.',
      icon: '✓'
    },
    {
      title: 'Expertise',
      description: 'Professional horticultural knowledge backed by 18+ years of experience.',
      icon: '🎓'
    },
    {
      title: 'Care',
      description: 'Personal attention to every property and client relationship.',
      icon: '💚'
    }
  ];

  const milestones = [
    { year: '2006', event: 'DLCO Founded in Dublin' },
    { year: '2010', event: 'Expanded team to 15+ professionals' },
    { year: '2015', event: 'ALCI Affiliation achieved' },
    { year: '2018', event: 'Award-winning service recognition' },
    { year: '2020', event: 'Team grew to 25+ experts' },
    { year: '2024', event: '500+ successful projects completed' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Donnybrook Landscape Co</h1>
            <p>Dublin's trusted landscaping partner since 2006</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Our Story</span>
              <h2>Excellence in Landscaping Since 2006</h2>
              <p>
                Founded in 2006, Donnybrook Landscape Co has grown from a small local operation
                to become one of Dublin's most trusted landscaping and horticultural management companies.
              </p>
              <p>
                Based in Sandyford, Dublin, we specialize in professional landscaping and grounds
                maintenance for both commercial and residential properties. Our team of 25+ skilled
                professionals brings expertise, dedication, and a genuine passion for creating and
                maintaining beautiful outdoor spaces.
              </p>
              <p>
                We pride ourselves on our award-winning service and our affiliation with the
                Association of Landscape Contractors of Ireland (ALCI), demonstrating our commitment
                to the highest industry standards.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="DLCO Team at work"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Values</span>
            <h2>What Drives Us</h2>
            <p>
              Our mission is to provide exceptional landscaping and grounds maintenance services
              that enhance properties and exceed client expectations
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Journey</span>
            <h2>Company Milestones</h2>
          </motion.div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="team-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Professional Team</h2>
            <p>
              Our team of 25+ experienced landscaping professionals is the backbone of our success.
              Each member brings specialized expertise in different aspects of landscaping and
              horticultural management, ensuring we can handle any project with confidence.
            </p>
            <p>
              From grass cutting and hedge trimming to complex landscaping projects and ongoing
              grounds maintenance, our team has the skills, equipment, and dedication to deliver
              outstanding results every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container">
          <motion.div
            className="accreditations"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Awards & Accreditations</h2>
            <div className="accreditation-list">
              <div className="accreditation-item">
                <span className="accred-icon">🏆</span>
                <div>
                  <h3>Award-Winning Service</h3>
                  <p>Recognized for excellence in landscaping across Dublin</p>
                </div>
              </div>
              <div className="accreditation-item">
                <span className="accred-icon">✓</span>
                <div>
                  <h3>ALCI Member</h3>
                  <p>Association of Landscape Contractors of Ireland</p>
                </div>
              </div>
              <div className="accreditation-item">
                <span className="accred-icon">🛡️</span>
                <div>
                  <h3>Fully Insured</h3>
                  <p>Comprehensive coverage for all our work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section bg-green">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">Ready to Work With Us?</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>
              Let's discuss how we can help transform and maintain your outdoor spaces
            </p>
            <div className="cta-buttons" style={{ marginTop: '30px' }}>
              <Link to="/contact" className="btn btn-white btn-lg">
                Get in Touch
              </Link>
              <Link to="/services/grounds-maintenance" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
