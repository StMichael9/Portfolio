import React, { Suspense, lazy } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import BusinessCard from './components/BusinessCard';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Exp = lazy(() => import('./components/Exp'));
const Cert = lazy(() => import('./components/Cert'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Exp />
        <Projects />
        <Cert />
      </Suspense>
      <BusinessCard />
      <Contact />
    </>
  );
}

export default App;