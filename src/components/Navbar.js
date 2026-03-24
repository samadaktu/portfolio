import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo" onClick={() => scrollToSection('#home')}>
          <div className="logo-mark">AS</div>
          <span className="logo-text">Abdul <span>Samad</span></span>
        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.label}
              className={`nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="navbar-cta">
          <button className="cta-btn" onClick={() => scrollToSection('#contact')}>
            Hire Me
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            className="mobile-nav-link"
            onClick={() => scrollToSection(link.href)}
          >
            {link.label}
          </button>
        ))}
        <button className="mobile-cta-btn" onClick={() => scrollToSection('#contact')}>
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
