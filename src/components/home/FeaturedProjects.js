import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Corporate Office Complex',
      category: 'Commercial',
      description: 'Complete grounds transformation for a prestigious Dublin business park',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80'
    },
    {
      title: 'Residential Garden Redesign',
      category: 'Residential',
      description: 'Beautiful garden makeover with native plants and sustainable landscaping',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
    },
    {
      title: 'Apartment Complex Maintenance',
      category: 'Commercial',
      description: 'Year-round grounds maintenance for a luxury apartment development',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    },
    {
      title: 'Heritage Garden Restoration',
      category: 'Residential',
      description: 'Careful restoration of a historic Dublin garden to its former glory',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80'
    }
  ];

  return (
    <section className="featured-projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore some of our recent landscaping transformations across Dublin
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" className="btn btn-secondary btn-lg">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
