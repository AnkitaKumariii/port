import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',          href: '#top' },
  { label: 'About',         href: '#about' },
  { label: 'Skills',        href: '#skills' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Contributions', href: '#contributions' },
  { label: 'Contact',       href: '#contact' },
];

const Logo = () => (
  <a href="#top" className="navbar-logo" aria-label="Home">
    <svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0"   stopColor="var(--text-color)" />
          <stop offset="0.5" stopColor="var(--accent-color)" />
          <stop offset="1"   stopColor="var(--text-color)" />
        </linearGradient>
      </defs>
      <text
        x="4" y="26"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="url(#logo-grad)"
      >A</text>
    </svg>
  </a>
);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('top');
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);

  // Detect scroll to add backdrop blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const ids = ['top', 'about', 'skills', 'projects', 'contributions', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={label} className="navbar-link-item">
                <a
                  href={href}
                  className={`navbar-link ${isActive ? 'navbar-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="navbar-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="navbar-link-text">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme + mobile menu */}
        <div className="navbar-right">
          <button
            className="navbar-theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul className="navbar-mobile-links">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
