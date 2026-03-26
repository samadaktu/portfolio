import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael O\'Sullivan',
      company: 'Property Manager, Dublin Business Park',
      text: 'DLCO has been maintaining our grounds for over 5 years. Their professionalism and attention to detail is outstanding. The team is reliable, and our property always looks immaculate.',
      rating: 5
    },
    {
      name: 'Sarah Murphy',
      company: 'Homeowner, Sandyford',
      text: 'We hired DLCO to redesign our garden and couldn\'t be happier. They listened to our vision and created something even better than we imagined. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Kelly',
      company: 'Facilities Director, Corporate Office',
      text: 'The team at Donnybrook Landscape Co is exceptional. Their expertise in commercial landscaping is evident in every project. They\'ve transformed our office grounds completely.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials section bg-light">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied clients across Dublin
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
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
