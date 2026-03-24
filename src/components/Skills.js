import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWordpress, FaMobileAlt, FaHtml5, FaReact,
  FaShoppingCart, FaSearch, FaBuilding, FaUserAlt, FaBullseye,
} from 'react-icons/fa';
import { FiPenTool } from 'react-icons/fi';
import { SiAdobeillustrator, SiFigma } from 'react-icons/si';
import { skills } from '../data/skills';
import './Skills.css';

const iconMap = {
  FaWordpress: <FaWordpress />,
  FaMobile: <FaMobileAlt />,
  FaPencilRuler: <FiPenTool />,
  FaFigma: <SiFigma />,
  SiAdobeillustrator: <SiAdobeillustrator />,
  FaHtml5: <FaHtml5 />,
  FaReact: <FaReact />,
  FaBullseye: <FaBullseye />,
  FaSearch: <FaSearch />,
  FaShoppingCart: <FaShoppingCart />,
  FaBuilding: <FaBuilding />,
  FaUserAlt: <FaUserAlt />,
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Skills = () => (
  <section id="skills" className="skills">
    <div className="container">
      <motion.div
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-description" style={{ margin: '0 auto' }}>
          A versatile toolkit built through years of real-world project experience.
        </p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.id} className="skill-card" variants={cardVariants}>
            <span className="skill-icon">{iconMap[skill.icon]}</span>
            <span className="skill-label">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
