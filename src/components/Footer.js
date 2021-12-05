import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer--inside">
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

export default Footer;