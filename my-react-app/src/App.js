import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <section id="about">
            <h2>About</h2>
            <p>Welcome to my portfolio!</p>
          </section>
          
          <section id="exp">
            <h2>Languages</h2>
            <p>My programming languages and skills</p>
          </section>
          
          <section id="projects">
            <h2>Projects</h2>
            <p>Check out my projects</p>
          </section>
          
          <section id="cert">
            <h2>Certification</h2>
            <p>My certifications and achievements</p>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
