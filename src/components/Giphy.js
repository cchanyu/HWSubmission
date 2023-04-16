// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../server/firebase.config';
// import { connect } from 'react-redux';
// import '../css/Giphy.css'

// const Giphy = ({ url, text }) => {
//   const [savedItems, setSavedItems] = useState([]);

//   useEffect(() => {
//     const fetchSavedItems = async () => {
//       try {
//         const querySnapshot = await db.collection('savedItems').get();
//         const items = querySnapshot.docs.map(doc => doc.data().id);
//         setSavedItems(items);
//       } catch (error) {
//         console.error('Error fetching saved items:', error);
//       }
//     };
  
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       console.log(user)
//       if (user) {
//         fetchSavedItems();
//       } else {
//         setSavedItems([]);
//       }
//     });
  
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handleSave = async (id) => {
//     try {
//       const docRef = await db.collection('savedItems').add({ id });
//       const addedData = await docRef.get();
//       setSavedItems([...savedItems, addedData.data().id]);
//     } catch (error) {
//       console.error('Error saving item:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const querySnapshot = await db.collection('savedItems').where('id', '==', id).get();
//       querySnapshot.docs[0].ref.delete();
//       setSavedItems(savedItems.filter(item => item !== id));
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const toURL = (props) => { window.open(props) }
//   const images = url.map((i) => (
//     <div className="gifbox" key={i.id}>
//       <img
//         className="gif"
//         src={i.images.original.url}
//         onClick={() => toURL(i.images.original.url)}
//         alt={i.id} />
//       <div className="gif--cred">
//         <div className="gif--id">ID: {i.id}</div>
//         {savedItems.includes(i.id) ? (<button className="saveit icon savedit" onClick={() => handleDelete(i.id)}> Saved </button>
//         ) : (<button className="saveit icon" onClick={() => handleSave(i.id)}> Save ⭐</button>)}
//       </div>
//     </div>
//   ));

//   return (
//     <div className="giphy">
//       <div className="searched">Search Result for: {text}</div>
//       {text.length <= 0 ? (
//         <div className="beforesearch">Start searching GIF by typing below</div>
//       ) : url.length <= 0 ? (
//         <div className="beforesearch">No Searched Result</div>
//       ) : (
//         <div className="images">{images}</div>
//       )}
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   const {text} = state
//   return text;
// }

// export default connect(mapStateToProps)(Giphy);

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