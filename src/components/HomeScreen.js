import React from 'react';
import '../css/HomeScreen.css'

class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
            anime: '',
            character: '',
            quote: '',
            quote2: []
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
        fetch('http://localhost:5000/api/quote', {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res2 => res2.json())
            .then(quote2 => this.setState({quote2}))
    }

    render(){
        const { anime, character, quote, quote2 } = this.state;
        return(
            <div>
                <div>{anime} - {character}</div>
                <div>{quote}</div>
                <ul>
                    {quote2.map((quote, index) => {
                        return <li key={index}>{quote}</li>
                    })}
                </ul>
            </div>
        )
    }

}

export default HomeScreen;