import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../css/Giphy.css'

const Giphy = ({ url, text }) => {
  const [ savedItems, setSavedItems ] = useState({ ...localStorage });
  const handleSave = (e) => {
    localStorage.setItem(e, e)
    setSavedItems({ ...localStorage });
  }
  const handleDelete = (e) => {
    localStorage.removeItem(e);
    setSavedItems({ ...localStorage });
  }
  const toURL = (props) => { window.open(props) }
  const images = url.map((i) => 
    <div className="gifbox">
      <img
        className="gif" 
        key={i.id} 
        src={i.images.original.url} 
        onClick={() => toURL(i.images.original.url)}
        alt={i.id}
      />
      <div className="gif--cred">
        <div className="gif--id">ID: {i.id}</div>
        {(Object.keys(savedItems).find(e => e === i.id) ? 
          (<button className="saveit icon savedit" onClick={() => handleDelete(i.id)}>Saved</button>) 
          : (<button className="saveit icon" onClick={() => handleSave(i.id)}>Save ⭐</button>) 
        )}
      </div>
    </div>
  )

  return (
    <div className="giphy">
      <div className="searched">Search Result for: {text}</div>
      {(text.length <= 0 ? 
        (<div className="beforesearch">Start searching GIF by typing below</div>) 
        : ((url.length <= 0 ?
          (<div className="beforesearch">No Searched Result</div>) :
          (<div className="images">{images}</div>))
        ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {text} = state
  return text;
}

export default connect(mapStateToProps)(Giphy);