import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    {
      label: 'Services',
      submenu: [
        { path: '/services/grounds-maintenance', label: 'Grounds Maintenance' },
        { path: '/services/landscaping', label: 'Landscaping Services' },
        { path: '/services/garden-maintenance', label: 'Garden Maintenance' },
        { path: '/services/commercial', label: 'Commercial Landscaping' }
      ]
    },
    { path: '/projects', label: 'Projects' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">DLCO</span>
            <span className="logo-subtitle">Donnybrook Landscape Co</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                {link.submenu ? (
                  <div className="dropdown">
                    <button className="nav-link dropdown-toggle">
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 8L2 4h8z"/>
                      </svg>
                    </button>
                    <ul className="dropdown-menu">
                      {link.submenu.map((sublink, subindex) => (
                        <li key={subindex}>
                          <Link
                            to={sublink.path}
                            className={`dropdown-item ${location.pathname === sublink.path ? 'active' : ''}`}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Free Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-menu">
              {navLinks.map((link, index) => (
                <li key={index} className="mobile-nav-item">
                  {link.submenu ? (
                    <>
                      <span className="mobile-nav-label">{link.label}</span>
                      <ul className="mobile-submenu">
                        {link.submenu.map((sublink, subindex) => (
                          <li key={subindex}>
                            <Link
                              to={sublink.path}
                              className={`mobile-nav-link ${location.pathname === sublink.path ? 'active' : ''}`}
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mobile-nav-item">
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                  Get Free Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
