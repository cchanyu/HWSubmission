import React from 'react';
import '../css/Saved.css'

const Saved = (props) => {
    const { saved } = props;
    
    return(
        <div>
            <ul>
                {saved.map((saved, index) => {
                    return <li key={index}>{saved}</li>
                })}
            </ul>
        </div>
    )
}

export default Saved;