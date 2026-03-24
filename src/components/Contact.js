import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: info */}
          <motion.div
            className="contact-info"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <h3 className="contact-info-heading">Contact Information</h3>
              <p className="contact-info-sub">Reach out through any of the channels below.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="contact-items">
              <div className="contact-item">
                <span className="contact-item-icon"><FiPhone /></span>
                <div>
                  <p className="contact-item-label">Phone</p>
                  <a href="tel:+918171105743" className="contact-item-value">+91 8171105743</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon"><FiMail /></span>
                <div>
                  <p className="contact-item-label">Email</p>
                  <a href="mailto:hello@technoalig.com" className="contact-item-value">hello@technoalig.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon"><FiMapPin /></span>
                <div>
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value">Aligarh, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="contact-socials-label">Find me on</p>
              <div className="contact-socials">
                <a href="https://www.instagram.com/samad.alig" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://www.linkedin.com/in/abdulsamad5041/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <FaLinkedinIn /> LinkedIn
                </a>
                <a href="https://x.com/samad_io" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <FaXTwitter /> X (Twitter)
                </a>
                <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                  <span className="ta-badge">TA</span> Techno Alig
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {submitted ? (
              <div className="success-message">
                <FiCheck className="success-icon" />
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
