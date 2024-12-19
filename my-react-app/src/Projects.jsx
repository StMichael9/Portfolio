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


function Projects() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    { title: "Project 3", description: "Description of Project 3" },
  ];

  return (
    <div style={projectStyle}>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={projectItemStyle}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;