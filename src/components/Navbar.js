import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { textChange } from '../redux/actions/index.js';

import searchicon from '../svg/search-solid.svg';
import '../css/Navbar.css'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    changeText = (e) => {
        this.props.dispatch(textChange(e.target.value))
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const { searchup } = this.props;
            searchup(e);
        }
    }

    render() {
        const { changeText, handleKeyDown } = this;
        const { searchup } = this.props;

        return(
            <div className="footer">
                <div className="footer--under" />
                <div className="footer--inside">
                    <div className="searchbox">
                        <input
                            id="textarea"
                            className="search input"
                            type="text" 
                            onChange={changeText}
                            placeholder="Keyword"
                            onKeyDown={handleKeyDown}
                        />
                        <img className="search--icon icon" onClick={searchup} src={searchicon} alt="search"/>
                    </div>
                    {/* Navigation */}
                    <nav className="nav">
                        <NavLink className="nav--home navli" activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink className="nav--giphy navli" activeClassName="active" to="/giphy">Giphy</NavLink>
                        <NavLink className="nav--saved navli" activeClassName="active" to="/saved">Saved</NavLink>
                        <NavLink className="nav--login navli" activeClassName="active" to="/login">Login</NavLink>
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


export default connect(mapStateToProps)(Navbar);