import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiUsers } from 'react-icons/fi';
import './About.css';

const stats = [
  { icon: <FiAward />, value: '3+', label: 'Years Experience' },
  { icon: <FiBriefcase />, value: '50+', label: 'Projects Completed' },
  { icon: <FiUsers />, value: '30+', label: 'Happy Clients' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          {/* Image column */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop"
                alt="Abdul Samad"
                className="about-img"
              />
              <div className="about-img-badge">
                <span className="badge-icon">🚀</span>
                <span>Techno Alig</span>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="about-text-col">
            <motion.span className="section-label" {...fadeUp}>
              About Me
            </motion.span>

            <motion.h2
              className="section-title about-title"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Turning Ideas Into <span className="accent">Digital Reality</span>
            </motion.h2>

            <motion.p
              className="about-bio"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm Abdul Samad — a passionate WordPress developer, UI/UX designer, and the
              founder of <strong>Techno Alig</strong>, a digital agency dedicated to crafting
              premium websites and brand experiences. With over 3 years of hands-on experience,
              I specialize in building elegant, high-performance web solutions that help
              businesses grow online.
            </motion.p>

            <motion.p
              className="about-bio"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              From custom WordPress themes to Figma-crafted UI designs, I bridge the gap
              between aesthetics and functionality — delivering digital products that are
              both beautiful and results-driven.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-icon">{s.icon}</span>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              className="about-education"
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="about-edu-title">Education</h3>
              <div className="edu-item">
                <span className="edu-dot" />
                <div>
                  <p className="edu-degree">B.Tech — Computer Science</p>
                  <p className="edu-school">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</p>
                </div>
              </div>
              <div className="edu-item">
                <span className="edu-dot" />
                <div>
                  <p className="edu-degree">Diploma — Engineering</p>
                  <p className="edu-school">Aligarh Muslim University (AMU)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
