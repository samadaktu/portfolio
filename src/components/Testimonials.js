import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';
import './Testimonials.css';

const testimonials = [
  {
    quote:
      'Working with Abdul Samad was a game-changer for our business. He delivered a stunning WordPress website that perfectly captured our brand and exceeded every expectation.',
    name: 'Rahul Sharma',
    title: 'CEO, StartupHub',
    initials: 'RS',
    color: 'blue',
  },
  {
    quote:
      'The UI/UX design work was exceptional. Abdul has a keen eye for detail and a deep understanding of user experience — he delivered way beyond our expectations.',
    name: 'Priya Mehta',
    title: 'Marketing Director',
    initials: 'PM',
    color: 'gold',
  },
  {
    quote:
      'Professional, fast, and incredibly talented. Our e-commerce sales increased significantly after the redesign. Highly recommend Techno Alig!',
    name: 'Ahmed Khan',
    title: 'E-commerce Owner',
    initials: 'AK',
    color: 'emerald',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Client Reviews</span>
          <h2 className="section-title">
            What Clients <span className="accent">Say</span>
          </h2>
          <p className="section-desc">
            Real feedback from real clients who trusted me with their digital projects.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className={`testimonial-card card accent-${t.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className={`testimonial-quote-icon color-${t.color}`}>
                <FiMessageSquare />
              </div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className={`testimonial-avatar avatar-${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-title">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
