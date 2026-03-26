import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-col">
              <div className="footer-logo">
                <span className="logo-text">DLCO</span>
                <span className="logo-subtitle">Donnybrook Landscape Co</span>
              </div>
              <p className="footer-description">
                Professional landscaping and horticultural management company serving Dublin since 2006.
                Award-winning service with ALCI affiliation.
              </p>
              <div className="footer-contact">
                <p><strong>Phone:</strong> <a href="tel:012973344">01 2973344</a></p>
                <p><strong>Email:</strong> <a href="mailto:office@dlco.ie">office@dlco.ie</a></p>
                <p><strong>Location:</strong> Sandyford, Dublin</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Our Projects</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services/grounds-maintenance">Grounds Maintenance</Link></li>
                <li><Link to="/services/landscaping">Landscaping Services</Link></li>
                <li><Link to="/services/garden-maintenance">Garden Maintenance</Link></li>
                <li><Link to="/services/commercial">Commercial Landscaping</Link></li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="footer-col">
              <h4>Business Hours</h4>
              <ul className="footer-hours">
                <li>
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </li>
                <li>
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </li>
                <li>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="footer-badges">
                <div className="badge">
                  <span className="badge-icon">🏆</span>
                  <span className="badge-text">Award Winning</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">ALCI Affiliated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Donnybrook Landscape Co. All rights reserved.</p>
            <p className="footer-tagline">
              Serving Dublin with Excellence Since 2006
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
