import React from 'react';
import { connect } from 'react-redux';
import '../css/Giphy.css'

class Giphy extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text: ''
        }
    }

    render(){
        const { url, text } = this.props;
        const toURL = (props) => { window.open(props) }
        const images = url.map((i) => 
            <img
                className="gif" 
                key={i.id} 
                src={i.images.original.url} 
                onClick={() => toURL(i.images.original.url)}
                alt={i}/>
        )

        return(
            <div className="giphy">
                <div className="searched">
                    Searched for: {text}
                </div>
                <div className="images">
                    {images}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {text} = state
    return text;
}

export default connect(mapStateToProps)(Giphy);