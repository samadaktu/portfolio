import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => scrollToSection('#home')}>
          <span className="logo-mark">AS</span>
          <span className="logo-name">Abdul Samad</span>
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button className="nav-link" onClick={() => scrollToSection(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
