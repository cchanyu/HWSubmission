import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { server } from './redux/configs/index';

import Home from './components/Home.js';
import Giphy from './components/Giphy.js';
import Saved from './components/Saved.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';

import Snowfall from 'react-snowfall';
import './App.css';

const App = () => {
  const [random, setRandom] = useState([]);
  const [saved, setSaved] = useState([]);
  const [url, setUrl] = useState([]);
  const text = useSelector(state => state.text);

  useEffect(() => {
    fetch('https://animechan.vercel.app/api/random')
      .then(res => res.json())
      .then(quote => setRandom(quote))
    fetch(`${server}/api/quote`)
      .then(res2 => res2.json())
      .then(saved => setSaved(saved))
  }, []);

  const fetchHandler = (e) => {
    e.preventDefault();
    const newText = text.toUpperCase();
    const API = process.env.REACT_APP_API_KEY;
    fetch(`https://api.giphy.com/v1/gifs/search?q=${newText}&api_key=${API}`)
      .then(res3 => res3.json())
      .then(data => setUrl(data.data))
  }

  return (
    <div className="App">
        <Snowfall className="snowfall" />

        {/* React Route */}
        <Routes>
          <Route exact path="HWSubmission/" element={ <Home random={random} /> } />
          <Route path="HWSubmission/home" element={ <Home random={random} /> } />
          <Route path="HWSubmission/giphy" element={ <Giphy url={url} /> }/>
          <Route path="HWSubmission/saved" element={ <Saved saved={saved} /> }/>
          <Route path="HWSubmission/login" element={ <Login /> }/>
        </Routes>

        <Navbar searchup={fetchHandler} />
        <div className="invisNav" />
    </div>
  );
}

export default App;