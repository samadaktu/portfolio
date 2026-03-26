import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Corporate Office Complex',
      category: 'commercial',
      location: 'Sandyford, Dublin',
      description: 'Complete grounds transformation including soft landscaping, tree planting, and ongoing maintenance for a prestigious business park.',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
      services: ['Landscaping', 'Grounds Maintenance']
    },
    {
      title: 'Residential Garden Redesign',
      category: 'residential',
      location: 'Donnybrook, Dublin',
      description: 'Beautiful garden transformation featuring native Irish plants, sustainable landscaping, and water-efficient design.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      services: ['Garden Design', 'Planting']
    },
    {
      title: 'Luxury Apartment Complex',
      category: 'commercial',
      location: 'Dublin 4',
      description: 'Year-round grounds maintenance for a luxury residential development including seasonal planting and hedge maintenance.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      services: ['Grounds Maintenance', 'Seasonal Care']
    },
    {
      title: 'Heritage Garden Restoration',
      category: 'residential',
      location: 'Ballsbridge, Dublin',
      description: 'Careful restoration of a historic Dublin garden, preserving original features while introducing sustainable maintenance practices.',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80',
      services: ['Restoration', 'Heritage Care']
    },
    {
      title: 'Business Park Enhancement',
      category: 'commercial',
      location: 'Leopardstown, Dublin',
      description: 'Complete landscaping overhaul for a tech business park including modern design elements and low-maintenance plantings.',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&q=80',
      services: ['Commercial Landscaping', 'Design']
    },
    {
      title: 'Private Estate Grounds',
      category: 'residential',
      location: 'Dublin 18',
      description: 'Comprehensive grounds management for a large private estate including lawn care, tree surgery, and seasonal maintenance.',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
      services: ['Estate Management', 'Full Service']
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-hero-overlay"></div>
        <div className="container">
          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Projects</h1>
            <p>Explore our portfolio of successful landscaping transformations across Dublin</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Commercial
            </button>
            <button
              className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Residential
            </button>
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="project-image-full">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay-full">
                    <span className="project-category-badge">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="project-content-full">
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C5.24 0 3 2.24 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                    {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-services">
                    {project.services.map((service, i) => (
                      <span key={i} className="service-tag">{service}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta section bg-green">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white">Ready to Start Your Project?</h2>
            <p className="text-white" style={{ opacity: 0.95 }}>
              Let's create something beautiful together
            </p>
            <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-white btn-lg">
                Get in Touch
              </a>
              <a href="tel:012973344" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Call 01 2973344
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
