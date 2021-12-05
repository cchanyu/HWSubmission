import React from 'react';
import '../css/HomeScreen.css'

class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
            anime: '',
            character: '',
            quote: ''
        }
    }

    componentDidMount() {
        fetch('https://animechan.vercel.app/api/random')
            .then(res => res.json())
            .then(quote => this.setState({
                anime: quote.anime,
                character: quote.character,
                quote: quote.quote
            }))
    }

    render(){
        const { anime, character, quote } = this.state;
        return(
            <div>
                <div>{quote}</div>
            </div>
        )
    }

}

export default HomeScreen;