import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { server } from './redux/configs/index';

import Home from './components/Home.js';
import Giphy from './components/Giphy.js';
import Saved from './components/Saved.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';

import Snowfall from 'react-snowfall';
import './App.css';

const API = 'fpWVBt2icga41IQMyals5bVd6c2eLQKm';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        random: [],
        saved: [],
        text: '',
        url: []
    }
  }

  componentDidMount() {
    fetch('https://animechan.vercel.app/api/random')
      .then(res => res.json())
      .then(quote => this.setState({ random: quote }))
    fetch(`${server}/api/quote`)
      .then(res2 => res2.json())
      .then(saved => this.setState({ saved }))
  }

  fetchHandler = (e) => {
    e.preventDefault();
    const { text } = this.props;
    const newText = text.toUpperCase();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${newText}&api_key=${API}`)
      .then(res3 => res3.json())
      .then(data => this.setState({ url: data.data }))
  }

  render(){
    const { random, saved, url } = this.state;
    const { fetchHandler } = this;

    return (
      <div className="App">
          <Snowfall className="snowfall" />

          {/* React Route */}
          <Routes>
            <Route exact path="/" element={ <Home random={random} />} />
            <Route path="giphy" element={<Giphy url={url} />}/>
            <Route path="saved" element={<Saved saved={saved} />}/>
            <Route path="login" element={<Login />}/>
          </Routes>
  
          <Navbar searchup={fetchHandler} />
          <div className="invisNav" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {text} = state
  return text;
}

export default connect(mapStateToProps)(App);
