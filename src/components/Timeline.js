import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const timelineItems = [
  {
    year: '2020',
    title: 'Started Learning',
    desc: 'Began the web development journey — diving deep into HTML, CSS, and WordPress fundamentals.',
    color: 'blue',
    icon: '📚',
  },
  {
    year: '2021',
    title: 'First Client Projects',
    desc: 'Delivered first paid WordPress projects for local businesses, building real-world experience.',
    color: 'emerald',
    icon: '💼',
  },
  {
    year: '2022',
    title: 'UI/UX Focus',
    desc: 'Mastered Figma and Adobe Illustrator — expanding into professional UI/UX design and branding.',
    color: 'gold',
    icon: '🎨',
  },
  {
    year: '2023',
    title: 'Founded Techno Alig',
    desc: 'Established Techno Alig — a digital agency dedicated to crafting premium web experiences.',
    color: 'gold',
    icon: '🚀',
  },
  {
    year: '2024',
    title: 'B.Tech Enrollment',
    desc: 'Enrolled in B.Tech Computer Science at Dr. A.P.J. Abdul Kalam Technical University (AKTU).',
    color: 'blue',
    icon: '🎓',
  },
  {
    year: 'Present',
    title: 'Growing the Agency',
    desc: 'Expanding Techno Alig — onboarding more clients, growing the team, and scaling impact.',
    color: 'emerald',
    icon: '📈',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="section timeline">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">
            Career <span className="accent">Timeline</span>
          </h2>
          <p className="section-desc">
            A roadmap of milestones that shaped me into the developer and entrepreneur I am today.
          </p>
        </motion.div>

        <div className="timeline-track">
          <div className="timeline-line" />
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.year}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`timeline-card card accent-${item.color}`}>
                <div className="timeline-card-header">
                  <span className="timeline-emoji">{item.icon}</span>
                  <span className={`timeline-year color-${item.color}`}>{item.year}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
              <div className={`timeline-dot dot-${item.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
