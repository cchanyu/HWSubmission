import React from 'react';
import '../css/Saved.css'

const Saved = (props) => {
    const { saved } = props;
    let saveditems =  { ...localStorage };
    const toURL = (props) => { window.open(props) }
    const handleDelete = (e) => {
        localStorage.removeItem(e);
        window.location.reload(false);
    }

    return(
        <div className="saved">
            <div className="searched">Saved GIFs</div>
            <div className="saved--list">
                {Object.keys(saveditems).map((saved, index) => {
                    const url = `https://media3.giphy.com/media/${saved}/giphy.gif`
                    return (
                        <div className="saved--box" key={index}>
                            <img
                                key={saved}
                                className="saved--card" 
                                src={url}
                                alt={saved}
                                onClick={() => toURL(url)}
                            />
                            <div className="gif--cred">
                                <div className="gif--id">ID: {saved}</div>
                                <button className="saveit icon del" onClick={() => handleDelete(saved)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Saved;