import React from 'react';
import '../css/HomeScreen.css'

const HomeScreen = (props) => {
    const { random, quote } = props;

    return(
        <div>
            <div>{random.anime} - {random.character}</div>
            <div>{random.quote}</div>
            <ul>
                {quote.map((quote, index) => {
                    return <li key={index}>{quote}</li>
                })}
            </ul>
        </div>
    )
}

export default HomeScreen;