import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../server/firebase.config';
import "../css/SignUp.css"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // User registration successful, email verification sent
      await sendEmailVerification(userCredential.user);
      console.log('Registration successful, email verification sent.');
      setEmail('');
      setPassword('');
      navigate('/HWSubmission/login');
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Error signing up. Please try again.');
    }
  }

  const validateEmail = (email) => {
    // Use a regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className='signup'>
      <div className='signup-container'>
        <div className="login--title">Sign Up</div>
        {error && <div className="error-message">{error}</div>}
        <form id="login--form">
          <div className="form--group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              className="form--control input" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Enter your email address"
            />
          </div>
          <div className="form--group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form--control input" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-success signin" onClick={handleSubmit}>Sign Up</button>
        </form>
        <span style={{ marginTop: '30px', display: 'block' }}>Already have an account? <NavLink to="/HWSubmission/login" className="signup-btn">Sign in</NavLink></span>
      </div>
    </div>
  )
}

export default SignUp;