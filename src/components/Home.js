import React from 'react';
import '../css/Home.css'

const Home = (props) => {
    const { random } = props;

    return(
        <div className="home">
            <div className="homebox">
                <div className="home--quote">{random.quote}</div>
                <div className="home--cred">{random.anime} - {random.character}</div>
            </div>
        </div>
    )
}

export default Home;