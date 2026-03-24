import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode, FiLayout, FiBriefcase, FiShoppingCart,
  FiTarget, FiPenTool, FiRefreshCw, FiSearch,
} from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: <FiCode />,
    title: 'WordPress Development',
    desc: 'Custom WordPress themes and plugins built for performance, flexibility, and seamless user experience.',
    accent: 'gold',
  },
  {
    icon: <FiBriefcase />,
    title: 'Business Website Design',
    desc: 'Professional, conversion-focused websites that establish a powerful online business presence.',
    accent: 'blue',
  },
  {
    icon: <FiLayout />,
    title: 'Portfolio Design',
    desc: 'Elegant portfolio sites that showcase your work and talent in the most compelling way.',
    accent: 'emerald',
  },
  {
    icon: <FiShoppingCart />,
    title: 'E-commerce Development',
    desc: 'Feature-rich WooCommerce stores with intuitive UX and optimized checkout flows.',
    accent: 'gold',
  },
  {
    icon: <FiTarget />,
    title: 'Landing Page Design',
    desc: 'High-converting landing pages engineered to capture leads and drive measurable results.',
    accent: 'blue',
  },
  {
    icon: <FiPenTool />,
    title: 'UI/UX Design',
    desc: 'Figma-crafted interfaces and interactive prototypes with a focus on usability and aesthetics.',
    accent: 'emerald',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Website Redesign',
    desc: 'Transform outdated websites into modern, fast, and visually stunning digital experiences.',
    accent: 'gold',
  },
  {
    icon: <FiSearch />,
    title: 'SEO-Friendly Websites',
    desc: 'Websites built with clean code, fast load times, and on-page SEO best practices built in.',
    accent: 'blue',
  },
];

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">
            My <span className="accent">Services</span>
          </h2>
          <p className="section-desc">
            End-to-end digital solutions — from design to development — tailored to elevate your online presence.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`service-card card accent-${service.accent}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className={`service-icon icon-${service.accent}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
