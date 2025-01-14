import React from 'react';

const projectStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const projectItemStyle = {
  marginBottom: '20px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const linkStyle = {
  display: 'block',
  marginTop: '10px',
  color: '#007bff',
  textDecoration: 'none',
};

const textStyle = {
  fontSize: '1.2em',
  lineHeight: '1.6',
}

function Projects() {
  const projects = [
    { title: "E-Com Site", description: "Coming Soon...", /*liveDemo: "https://example.com/ecom-site" } */ }  ,
    { title: "Counter 2", description: "This is a simple yet functional counter application built using React and Vite. The app allows users to increase, decrease, and reset the counter value. It's a great example of state management in React and demonstrates the use of functional components and hooks.", liveDemo: "https://counter-blush-rho.vercel.app/" },
    { title: "Ping Pong Game", description: "A fun and interactive Ping Pong game built with HTML, CSS, and JavaScript.", liveDemo: "https://ping-pong-nine-beta.vercel.app/" },
  ];

  return (
    <div id="projects" style={projectStyle}>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={projectItemStyle}>
          <h2>{project.title}</h2>
          <p style={textStyle}>{project.description}</p>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" style={linkStyle}>Live Demo</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
