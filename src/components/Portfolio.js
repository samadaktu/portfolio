import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Portfolio.css';

const projects = [
  {
    title: 'TechCorp Business Website',
    category: 'WordPress',
    desc: 'A clean, corporate WordPress website with custom Elementor theme and contact integrations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    tag: 'Business',
    tagColor: 'blue',
  },
  {
    title: 'Fashion E-commerce Store',
    category: 'WooCommerce',
    desc: 'Full-featured WooCommerce fashion store with custom product pages, filters, and checkout flow.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    tag: 'E-commerce',
    tagColor: 'gold',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    desc: 'Visually bold portfolio website for a creative agency with smooth scroll animations.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    tag: 'Portfolio',
    tagColor: 'emerald',
  },
  {
    title: 'Restaurant Landing Page',
    category: 'Landing Page',
    desc: 'Appetising landing page for a restaurant brand with reservation CTA and menu showcase.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    tag: 'Landing Page',
    tagColor: 'gold',
  },
  {
    title: 'Healthcare Platform',
    category: 'WordPress',
    desc: 'Trustworthy medical website with appointment booking, doctor profiles, and HIPAA-compliant forms.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tag: 'Healthcare',
    tagColor: 'emerald',
  },
  {
    title: 'Real Estate Website',
    category: 'WordPress',
    desc: 'Elegant property showcase website with listings, map integration, and lead capture forms.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    tag: 'Real Estate',
    tagColor: 'blue',
  },
];

const filters = ['All', 'WordPress', 'WooCommerce', 'Portfolio', 'Landing Page'];

const Portfolio = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Recent Work</span>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="section-desc">
            A selection of projects that showcase my craft in design and development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href="#portfolio" className="project-link" aria-label={`View ${project.title}`}>
                    <FiExternalLink />
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className={`project-tag tag-${project.tagColor}`}>{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
