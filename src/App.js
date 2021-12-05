import React from 'react'
import { Routes, Route } from 'react-router-dom';

import HomeScreen from './components/HomeScreen.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import ContactMe from './components/ContactMe.js';
import Footer from './components/Footer.js';

import Snowfall from 'react-snowfall';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        random: [],
        quote: []
    }
  }

  componentDidMount() {
    fetch('https://animechan.vercel.app/api/random')
        .then(res => res.json())
        .then(quote => this.setState({
            random: quote
        }))
    fetch('http://localhost:5000/api/quote', {
        method: "GET",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res2 => res2.json())
        .then(quote => this.setState({quote}))
  }

  render(){
    const { random, quote } = this.state;
    return (
      <div className="App">
          <Snowfall className="snowfall" />
          {/* React Route */}
          <Routes>
            <Route exact path="/" element={
              <HomeScreen
                random={random}
                quote={quote}
              />}
            />
  
            <Route path="about" element={<AboutMe />}/>
            
            <Route path="projects" element={<Projects />}/>
  
            <Route path="contact" element={<ContactMe />}/>
          </Routes>
  
          <Footer />
          <div className="invisFooter" />
      </div>
    );
  }
}

export default App;
