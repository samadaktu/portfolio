import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWordpress, FaLaptopCode, FaUserAlt, FaShoppingCart,
  FaBullseye, FaSync, FaSearch,
} from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { services } from '../data/services';
import './Services.css';

const iconMap = {
  FaWordpress: <FaWordpress />,
  FaLaptopCode: <FaLaptopCode />,
  FaUserAlt: <FaUserAlt />,
  FaShoppingCart: <FaShoppingCart />,
  FaBullseye: <FaBullseye />,
  FaPencilRuler: <FiPenTool />,
  FaSync: <FaSync />,
  FaSearchengin: <FaSearch />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">What I Do</p>
        <h2 className="section-title">My Services</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          Comprehensive web solutions designed to help your business stand out and grow online.
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div key={service.id} className="service-card" variants={cardVariants}>
            <div className="service-icon">{iconMap[service.icon]}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
