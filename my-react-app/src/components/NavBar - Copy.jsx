import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeNav(); // Close the menu after clicking a link
  };

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavActive && !event.target.closest('.navbar')) {
        closeNav();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavActive]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="logo" role="banner">Saint Michael</div>
      <div className="hamburger" onClick={toggleNav} aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            aria-label="About section"
            className="nav-button"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('exp')}
            aria-label="Languages section"
            className="nav-button"
          >
            Languages
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('projects')}
            aria-label="Projects section"
            className="nav-button"
          >
            Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('cert')}
            aria-label="Certification section" 
            className="nav-button"
          >
            Certification
          </button>
        </li>
        <li>
          <button 
          onClick={() => scrollToSection('contact')}
          aria-label="Contact section"
          className='nav-button'>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;