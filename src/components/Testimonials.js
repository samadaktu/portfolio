import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">What Clients Say</p>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Trusted by clients worldwide to deliver results that make a real difference.
        </p>
      </motion.div>

      <motion.div
        className="testimonials-grid"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {testimonials.map((t) => (
          <motion.div key={t.id} className="testimonial-card" variants={cardVariants}>
            <div className="testimonial-quote-icon">
              <FaQuoteLeft />
            </div>

            <div className="testimonial-stars">
              {Array.from({ length: t.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="testimonial-text">{t.text}</p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.avatar}</div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
