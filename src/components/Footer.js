import React from 'react';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiExternalLink, FiHeart } from 'react-icons/fi';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      {/* Brand */}
      <div className="footer-brand">
        <div className="footer-logo">
          <div className="footer-logo-mark">AS</div>
          <span className="footer-logo-text">Abdul Samad</span>
        </div>
        <p className="footer-tagline">
          Building modern digital experiences through WordPress, design, and technology.
        </p>
        <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="footer-company-link">
          <FiExternalLink /> Visit Techno Alig
        </a>
      </div>

      {/* Links */}
      <div className="footer-links-col">
        <p className="footer-col-title">Quick Links</p>
        <ul className="footer-links">
          {quickLinks.map((l) => (
            <li key={l.label}>
              <button className="footer-link-btn" onClick={() => scrollTo(l.href)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Social */}
      <div className="footer-social-col">
        <p className="footer-col-title">Connect With Me</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/samad.alig" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/abdulsamad5041/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaLinkedinIn /> LinkedIn
          </a>
          <a href="https://x.com/samad_io" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaXTwitter /> X (Twitter)
          </a>
          <a href="https://technoalig.com/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <span className="footer-ta-badge">TA</span> Techno Alig
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p className="footer-copy">© 2024 Abdul Samad. All rights reserved.</p>
        <p className="footer-built">
          Built with React & <FiHeart className="heart-icon" /> by Abdul Samad
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
