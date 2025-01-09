import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Exp from './components/Exp';
import Cert from './components/Cert';




function App() {
  return (
    <>
      <NavBar />
      < About />
      < Exp />
      <Projects />
      <Cert />
      
      
    
    </>
  );
}

export default App;