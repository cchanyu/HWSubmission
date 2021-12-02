import React from 'react'
import HomeScreen from './components/HomeScreen.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Navbar />

        {/* React Route */}
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>

          <Route path="about" element={<AboutMe />}/>
          
          <Route path="projects" element={<Projects />}/>

          <Route path="contact" element={<ContactMe />}/>
        </Routes>

        {/* Navigation */}
        <nav>
          <Link to="/">HomeScreen</Link>

          <Link to="/about">AboutMe</Link>

          <Link to="/projects">Projects</Link>
          
          <Link to="/contact">ContactMe</Link>
        </nav>

        <Footer />
    </div>
  );
}

export default App;
