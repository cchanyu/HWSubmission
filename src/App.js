import React from 'react'
import HomeScreen from './components/HomeScreen.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';
import Footer from './components/Footer.js';
import { Routes, Route } from 'react-router-dom'
import Snowfall from 'react-snowfall';
import './App.css';

function App() {
  return (
    <div className="App">
        <Snowfall />
        {/* React Route */}
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>

          <Route path="about" element={<AboutMe />}/>
          
          <Route path="projects" element={<Projects />}/>

          <Route path="contact" element={<ContactMe />}/>
        </Routes>

        <Footer />
        <div className="invisFooter" />
    </div>
  );
}

export default App;
