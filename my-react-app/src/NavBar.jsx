import React from 'react';

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Saint Michael Egenamba</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('resume')}>Resume</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
      </ul>
    </nav>
  );
}

export default NavBar;