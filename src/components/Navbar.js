import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import { setText } from '../redux/actions';

import searchicon from '../svg/search-solid.svg';
import '../css/Navbar.css'

const Navbar = ({searchup}) => {

    const dispatch = useDispatch();

    const handleTextChange = (event) => {
        dispatch(setText(event.target.value));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchup(e);
        }
    }

    return(
        <div className="footer">
            <div className="footer--under" />
            <div className="footer--inside">
                <div className="searchbox">
                    <input
                        id="textarea"
                        className="search input"
                        type="text" 
                        onChange={handleTextChange}
                        placeholder="Keyword"
                        onKeyDown={handleKeyDown}
                    />
                    <img className="search--icon icon" onClick={searchup} src={searchicon} alt="search"/>
                </div>
                {/* Navigation */}
                <nav className="nav">
                    <NavLink className="nav--home navli" activeClassName="active" exact="true" to="HWSubmission/home">Home</NavLink>
                    <NavLink className="nav--giphy navli" activeClassName="active" to="HWSubmission/giphy">Giphy</NavLink>
                    <NavLink className="nav--saved navli" activeClassName="active" to="HWSubmission/saved">Saved</NavLink>
                    <NavLink className="nav--login navli" activeClassName="active" to="HWSubmission/login">Login</NavLink>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {text} = state
    return text;
}

export default connect(mapStateToProps)(Navbar);