import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { textChange } from '../redux/actions/index.js';

import '../css/Footer.css'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    changeText = (event) => {
        this.props.dispatch(textChange(event.target.value))
    }

    render() {
        const { changeText } = this;

        return(
            <div className="footer">
                <div className="footer--under" />
                <div className="footer--inside">
                    <input
                        id="textarea"
                        className="search"
                        type="text" 
                        onChange={changeText}
                        placeholder="Keyword"
                    />
                    {/* Navigation */}
                    <nav className="nav">
                        <NavLink to="/">HomeScreen</NavLink>
        
                        <NavLink to="/about">AboutMe</NavLink>
        
                        <NavLink to="/projects">Projects</NavLink>
                        
                        <NavLink to="/contact">ContactMe</NavLink>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {text} = state
    return text;
}


export default connect(mapStateToProps)(Footer);