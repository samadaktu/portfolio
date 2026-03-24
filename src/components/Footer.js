import React from 'react';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiGlobe } from 'react-icons/fi';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark">AS</span>
              <span className="footer-logo-name">Abdul Samad</span>
            </div>
            <p className="footer-tagline">
              Crafting premium digital experiences through design and technology. Founder of{' '}
              <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="footer-company-link">
                Techno Alig
              </a>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button className="footer-link" onClick={() => scrollToSection(link.href)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-social-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/samad.alig"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulsamad5041/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/samad_io"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="X"
              >
                <FaXTwitter />
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://technoalig.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Techno Alig"
              >
                <FiGlobe />
                <span>Techno Alig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 Abdul Samad. All rights reserved. | Founder of{' '}
            <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="footer-company-link">
              Techno Alig
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
