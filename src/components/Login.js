import React, { useState } from 'react';
import '../css/Login.css'
import SignUp from './SignUp';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => { setEmail(event.target.value); }
    const handlePasswordChange = (event) => { setPassword(event.target.value); }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login Req: ", email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="login">
            <div className="login--title">Login</div>
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
                <button type="submit" className="btn icon mx-4 btn-primary" onClick={() => <SignUp />}>Sign Up</button>
                <button type="submit" className="btn icon btn-success" onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    );
}

export default Login;