import React from 'react';
import '../css/Navbar.css'

class Navbar extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div>
                <div className="timer"></div>
                Navbar
            </div>
        )
    }

}

export default Navbar;