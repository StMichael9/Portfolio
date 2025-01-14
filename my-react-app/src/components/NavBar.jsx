import React from 'react';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="logo" role="banner">Saint Michael Egenamba</div>
      <ul className="nav-links">
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
          about='Contact section'
          className='nav-button'>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;