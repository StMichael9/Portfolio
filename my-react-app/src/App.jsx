import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './navBar';
import About from './About';
import Projects from './Projects';
import Exp from './Exp';
import ChatBot from './Chatbot';
import Cert from './Cert';




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