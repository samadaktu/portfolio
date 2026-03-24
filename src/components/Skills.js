import React from 'react';
import { motion } from 'framer-motion';
import {
  FaWordpress, FaReact, FaFigma, FaHtml5, FaSearchengin,
  FaShoppingCart,
} from 'react-icons/fa';
import { SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { FiMonitor, FiLayout } from 'react-icons/fi';
import './Skills.css';

const skills = [
  {
    icon: <FaWordpress />,
    name: 'WordPress',
    desc: 'Custom themes, plugins & CMS setups',
    color: 'blue',
  },
  {
    icon: <FaReact />,
    name: 'React',
    desc: 'Component-based UI development',
    color: 'blue',
  },
  {
    icon: <FaFigma />,
    name: 'Figma',
    desc: 'UI design & interactive prototypes',
    color: 'emerald',
  },
  {
    icon: <SiAdobeillustrator />,
    name: 'Adobe Illustrator',
    desc: 'Vector graphics & brand identity',
    color: 'gold',
  },
  {
    icon: <FaHtml5 />,
    name: 'HTML / CSS',
    desc: 'Semantic markup & modern styling',
    color: 'gold',
  },
  {
    icon: <FiMonitor />,
    name: 'Responsive Design',
    desc: 'Mobile-first, cross-device layouts',
    color: 'blue',
  },
  {
    icon: <FiLayout />,
    name: 'Landing Pages',
    desc: 'High-converting page designs',
    color: 'emerald',
  },
  {
    icon: <FaSearchengin />,
    name: 'SEO',
    desc: 'On-page optimisation & performance',
    color: 'gold',
  },
  {
    icon: <FaShoppingCart />,
    name: 'E-commerce',
    desc: 'WooCommerce & online store builds',
    color: 'emerald',
  },
  {
    icon: <SiAdobephotoshop />,
    name: 'Photoshop',
    desc: 'Image editing & visual compositing',
    color: 'blue',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Skills &amp; <span className="accent">Tools</span>
          </h2>
          <p className="section-desc">
            A curated toolkit built through years of hands-on client work and continuous learning.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`skill-card card color-${skill.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className={`skill-icon-wrap icon-${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
