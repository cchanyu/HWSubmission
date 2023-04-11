import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setText, setSignInStatus, signOut as signOutAction } from '../redux/actions';
import { auth } from '../server/firebase.config';
import { server } from '../redux/configs';
import searchicon from '../svg/search-solid.svg';
import '../css/Navbar.css'

const Navbar = ({searchup}) => {

    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.auth.isSignedIn); 
    const [userID, setUserID] = useState();

    const handleTextChange = (event) => {
        dispatch(setText(event.target.value));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchup(e);
        }
    }

    useEffect(() => {
        const fetchSignInStatus = async () => {
          try {
            const response = await fetch(`${server}/api/signin-status`)
            const data = await response.json();
            setUserID(localStorage.getItem("email"));
            dispatch(setSignInStatus(data.isSignedIn));
          } catch (error) {
            console.error('Failed to fetch sign-in status:', error);
          }
        };
    
        fetchSignInStatus();
      }, [dispatch]);

      const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('Sign out successful!')
                dispatch(signOutAction());
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
                    Hello, { isSignedIn ? userID : 'Guest' }
                    { isSignedIn && <button className='footer-signout' onClick={() => handleSignOut()}>Sign out</button> }
                </div>
                {/* Navigation */}
                <nav className="nav">
                    <NavLink className="nav--home navli" activeClassName="active" exact="true" to="/HWSubmission/home">Home</NavLink>
                    <NavLink className="nav--giphy navli" activeClassName="active" to="/HWSubmission/giphy">Giphy</NavLink>
                    <NavLink className="nav--saved navli" activeClassName="active" to="/HWSubmission/saved">Saved</NavLink>
                    <NavLink className="nav--login navli" activeClassName="active" to="/HWSubmission/login">Login</NavLink>
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
    const { text, auth } = state
    return { text, signedIn: auth };
}

export default connect(mapStateToProps)(Navbar);