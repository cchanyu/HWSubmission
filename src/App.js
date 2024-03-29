import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { server } from './redux/configs';

import Home from './components/Home.js';
import Giphy from './components/Giphy.js';
import Saved from './components/Saved.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import SignUp from './components/SignUp';
import Snowfall from 'react-snowfall';
import './App.css';
import UserPanel from './components/UserPanel';

const App = () => {
  const [random, setRandom] = useState([]);
  const [saved, setSaved] = useState([]);
  const [url, setUrl] = useState([]);
  const [ isLogged ] = useState(JSON.parse(localStorage.getItem('isLogged')));
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
    if (typeof text.text !== 'string') { console.log('Invalid input'); return; }
    const newText = text.text.toUpperCase();
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
          <Route path="HWSubmission/giphy" element={ <Giphy url={url} text={text}/> }/>
          <Route path="HWSubmission/saved" element={ <Saved saved={saved} /> }/>
          <Route path="HWSubmission/login" element={ isLogged ? <UserPanel /> : <Login /> }/>
          <Route path="HWSubmission/signup" element={ <SignUp /> }/>
        </Routes>

        <Navbar searchup={fetchHandler} />
        <div className="village"></div>
        <div className="invisNav" />
    </div>
  );
}

export default App;