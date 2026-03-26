import React from 'react';
import { motion } from 'framer-motion';
import './Careers.css';

const Careers = () => {
  const benefits = [
    { icon: '💼', title: 'Competitive Pay', description: 'Fair wages reflecting your skills and experience' },
    { icon: '📈', title: 'Career Growth', description: 'Opportunities for training and advancement' },
    { icon: '👥', title: 'Great Team', description: 'Work with experienced, supportive professionals' },
    { icon: '🛡️', title: 'Job Security', description: 'Stable employment with an established company' },
    { icon: '⏰', title: 'Work-Life Balance', description: 'Regular hours with seasonal variety' },
    { icon: '🚗', title: 'Company Vehicle', description: 'Transportation provided for work' }
  ];

  const roles = [
    'Experienced Landscapers',
    'Grounds Maintenance Operatives',
    'Horticultural Specialists',
    'Team Leaders',
    'Machine Operators',
    'Apprentices & Trainees'
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="careers-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Join Our Team</h1>
            <p>Build your career with Dublin's leading landscaping company</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="careers-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Careers at DLCO</span>
            <h2>Why Work With Us?</h2>
            <p>
              At Donnybrook Landscape Co, we believe our people are our greatest asset. Since 2006,
              we've built a team of passionate professionals who take pride in creating and maintaining
              beautiful outdoor spaces across Dublin.
            </p>
            <p>
              We're always looking for talented individuals who share our commitment to quality,
              professionalism, and customer service. Whether you're an experienced landscaper or
              just starting your career, we offer opportunities to grow and develop your skills.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Employee Benefits</h2>
            <p>What you can expect when you join our team</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card-career"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Current Opportunities</h2>
            <p>Roles we regularly recruit for</p>
          </motion.div>

          <div className="roles-list">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="role-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--primary-green)" strokeWidth="2"/>
                  <path d="M8 12l2 2 4-4" stroke="var(--primary-green)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="company-culture"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Culture</h2>
            <div className="culture-grid">
              <div className="culture-item">
                <h3>Professional Development</h3>
                <p>
                  We invest in our team's growth through training, certifications, and hands-on
                  learning opportunities with experienced professionals.
                </p>
              </div>
              <div className="culture-item">
                <h3>Safety First</h3>
                <p>
                  Your safety is our priority. We provide comprehensive safety training, proper
                  equipment, and maintain the highest health and safety standards.
                </p>
              </div>
              <div className="culture-item">
                <h3>Team Environment</h3>
                <p>
                  Join a supportive team where collaboration, respect, and professionalism create
                  a positive working environment.
                </p>
              </div>
              <div className="culture-item">
                <h3>Pride in Work</h3>
                <p>
                  Take satisfaction in creating beautiful landscapes and maintaining properties
                  that make Dublin a better place.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="careers-cta section bg-green">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">Ready to Join Our Team?</h2>
            <p className="text-white" style={{ opacity: 0.95, marginBottom: '30px' }}>
              Send your CV and a brief introduction to our team
            </p>
            <div className="career-contact">
              <a href="mailto:office@dlco.ie?subject=Career Opportunity Inquiry" className="btn btn-white btn-lg">
                Email: office@dlco.ie
              </a>
              <p className="text-white" style={{ marginTop: '20px', opacity: 0.9 }}>
                Or call us at <a href="tel:012973344" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>01 2973344</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
