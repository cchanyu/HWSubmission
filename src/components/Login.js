import React from 'react';
import '../css/Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange(event) { this.setState({email: event.target.value}) }
    onPWChange(event) { this.setState({password: event.target.value}) }
    handleSubmit(event) {
        const { email, password } = this.state;
        event.preventDefault();
        console.log("Login Req: ", email, password)
        this.setState({
            email: '',
            password: ''
        })
    }

    render(){
        const { onEmailChange, onPWChange, handleSubmit } = this;
        const { email, password } = this.state;

        return(
            <div className="login">
                <div className="login--title">Login</div>
                <form id="login--form">
                <div className="form--group">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        className="form--control input" 
                        value={email} 
                        onChange={onEmailChange.bind(this)} 
                        placeholder="Email Address"
                    />
                </div>
                <div className="form--group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="form--control input" 
                        value={password} 
                        onChange={onPWChange.bind(this)} 
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn icon" onClick={handleSubmit.bind(this)}>Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;