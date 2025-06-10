import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or prefer dark mode if not set
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle dark mode toggle and persistence
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "light" : "dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // Scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Hide/show navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Check if at top of page

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`navbar ${isVisible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__container">
        <div className="navbar__brand">
          <h3 className={`navbar__name ${'navbar__name--visible'}`}>
            KHIZAR SHAH<span className="navbar__name-highlight">.</span>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop-nav">
          <a href="#about" className="navbar__link">About</a>
          <a href="#blog" className="navbar__link">Blog</a>
          <button 
            className="navbar__theme-toggle"
            onClick={toggleDarkMode}
            aria-label={`Switch to ${darkMode ? 'dark' : 'light'} mode`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <button 
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <IoClose /> : <FaBars />}
        </button>

        <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
          <a 
            href="#about" 
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#blog" 
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <button 
            className="navbar__mobile-theme-toggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;