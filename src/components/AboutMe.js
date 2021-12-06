import React from 'react';
import { connect } from 'react-redux';
import '../css/AboutMe.css'

class AboutMe extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text: ''
        }
    }

    render(){
        return(
            <div>
                {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {text} = state
    return text;
}

export default connect(mapStateToProps)(AboutMe);