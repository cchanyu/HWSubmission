import React, { useState } from 'react';
import '../css/Saved.css'

const Saved = () => {
  const [saveditems, setSavedItems] = useState({...localStorage});
  const [count, setCount] = useState(Object.keys({...localStorage}).length);

  const handleDelete = (e) => {
    localStorage.removeItem(e);
    setSavedItems({...localStorage});
    setCount(Object.keys({...localStorage}).length);
  }

  const toURL = (props) => {window.open(props)}

  const savedidx = Object.keys(saveditems).map((saved, index) => {
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
  });

  return(
    <div className="saved">
      <div className="searched">Saved GIFs: {count}</div>
      <div className="saved--list">
        {(Object.keys(saveditems).length <= 0 ?
          (<div className="beforesearch">No Saved GIF found</div>) :
          (savedidx)
        )}
      </div>
    </div>
  );
}

export default Saved;