import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiAward, FiCode, FiLayout, FiBriefcase } from 'react-icons/fi';
import './Timeline.css';

const milestones = [
  {
    year: '2021 – Present',
    icon: <FiCode />,
    title: '3+ Years WordPress Development',
    desc: 'Building professional WordPress websites, custom themes, and plugin integrations for clients across various industries.',
    align: 'left',
  },
  {
    year: '2022',
    icon: <FiAward />,
    title: 'Diploma in Computer Applications',
    desc: 'Completed Diploma in Computer Applications from Aligarh Muslim University, building a strong foundation in computing.',
    align: 'right',
  },
  {
    year: '2023',
    icon: <FiLayout />,
    title: 'Started UI/UX Design',
    desc: 'Expanded skills into UI/UX design using Figma and Adobe Illustrator, creating user-centred digital experiences.',
    align: 'left',
  },
  {
    year: '2024',
    icon: <FiBriefcase />,
    title: 'Founded Techno Alig & B.Tech',
    desc: 'Founded Techno Alig (technoalig.com) to deliver premium web solutions. Concurrently pursuing B.Tech Computer Science at Dr. A.P.J. Abdul Kalam Technical University.',
    align: 'right',
  },
];

const Timeline = () => (
  <section id="timeline" className="timeline-section">
    <div className="container">
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Timeline & Milestones</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Key moments that shaped my career and skill set.
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line" />
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${m.align}`}
            initial={{ opacity: 0, x: m.align === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
          >
            <div className="timeline-card">
              <div className="timeline-card-icon">{m.icon}</div>
              <div className="timeline-year">{m.year}</div>
              <h3 className="timeline-title">{m.title}</h3>
              <p className="timeline-desc">{m.desc}</p>
            </div>
            <div className="timeline-dot">
              <FiCalendar />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
