import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import { setText } from '../redux/actions';
import { auth } from '../server/firebase.config';
import searchicon from '../svg/search-solid.svg';
import '../css/Navbar.css'

const Navbar = ({searchup}) => {
    const dispatch = useDispatch();
    const [ isLogged ] = useState(JSON.parse(localStorage.getItem('isLogged')));
    const [ userID ] = useState(localStorage.getItem("email"));

    const handleTextChange = (event) => { dispatch(setText(event.target.value)); };
    const handleKeyDown = (e) => { if (e.key === 'Enter') { searchup(e); }}
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('Sign out successful!')
                localStorage.setItem("isLogged", false)
                localStorage.setItem("email", '')
                window.location.reload()
            })
            .catch((error) => {
                console.log('Error signing out:', error);
        });
    }

    return(
        <div className="footer">
            <div className="footer--under" />
            <div className="footer--inside">
                <div className='footer-user'>
                    Hello, {isLogged ? ( <div> {userID} <button className='footer-signout' onClick={() => handleSignOut()}>Sign out</button> </div>) : ('Guest')}
                </div>
                {/* Navigation */}
                <nav className="nav">
                    <NavLink className="nav--home navli" activeclassname="active" exact="true" to="/HWSubmission/home">Home</NavLink>
                    <NavLink className="nav--giphy navli" activeclassname="active" to="/HWSubmission/giphy">Giphy</NavLink>
                    <NavLink className="nav--saved navli" activeclassname="active" to="/HWSubmission/saved">Saved</NavLink>
                    <NavLink className="nav--login navli" activeclassname="active" to="/HWSubmission/login">Login</NavLink>
                </nav>
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
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { text } = state
    return { text };
}

export default connect(mapStateToProps)(Navbar);