import React from 'react';
import '../css/Saved.css'

const Saved = (props) => {
    const { saved } = props;

    return(
        <div className="saved">
            <div className="searched">Saved GIFs</div>
            <div className="saved--list">
                {saved.map((saved, index) => {
                    return (
                        <div className="saved--box" key={index}>
                            <div className="saved--card">{saved}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Saved;