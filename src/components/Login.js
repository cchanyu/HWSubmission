import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, signInUser } from '../server/firebase.config';
import '../css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => { setEmail(event.target.value); }
  const handlePasswordChange = (event) => { setPassword(event.target.value); }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await signInUser(email, password);
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Error signing in. Please try again.');
    }
    
    checkEmailVerificationStatus();
  }

  const checkEmailVerificationStatus = () => {
    console.log(auth)
    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      console.log('Email not verified.');
      setError('Email has not been verified, please check.');
    } else if (user && user.emailVerified) {
      console.log('Email verified.');

      setVerified(true)
      if (verified) {
        console.log('Sign in successful!');
        localStorage.setItem("email", email);
        dispatch({ type: 'SET_SIGN_IN_STATUS', payload: true });
        setEmail('');
        setPassword('');
        navigate('/HWSubmission/home');
      }
    } else {
      console.log('No user currently signed in.');
    }
  }

  const validateEmail = (email) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="login">
      <div className='login-container'>
        <div className="login--title">Login</div>
        {error && <div className="error-message">{error}</div>}
        <form id="login--form">
          <div className="form--group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              className="form--control input" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Email Address"
            />
          </div>
          <div className="form--group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form--control input" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-success signin" onClick={handleSubmit}>Sign in</button>
        </form>
        <span style={{ marginTop: '30px', display: 'block' }}>Need an account? <NavLink to="/HWSubmission/signup" className="signup-btn">Sign Up</NavLink></span>
      </div>
    </div>
  );
}

export default Login;