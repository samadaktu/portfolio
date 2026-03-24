import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiSend, FiGlobe } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! Your message has been received. I'll get back to you soon.`);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span className="accent">Together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card card">
              <h3 className="contact-info-title">Contact Information</h3>

              <div className="contact-detail">
                <span className="contact-detail-icon"><FiPhone /></span>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <a href="tel:+918171105743" className="contact-detail-value">+91 8171105743</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon"><FiGlobe /></span>
                <div>
                  <p className="contact-detail-label">Company</p>
                  <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                    Techno Alig
                  </a>
                </div>
              </div>

              <div className="contact-socials-section">
                <p className="contact-socials-label">Find me on</p>
                <div className="contact-socials">
                  <a
                    href="https://www.instagram.com/samad.alig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdulsamad5041/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link linkedin"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://x.com/samad_io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link twitter"
                    aria-label="X"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://technoalig.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link technoalig"
                    aria-label="Techno Alig"
                  >
                    TA
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary contact-submit">
                <FiSend />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
