// import React, { useState, useEffect } from 'react';
// import '../css/Saved.css';
// import { db } from '../server/firebase.config'; // import the firebase instance you created

// const Saved = () => {
//   const [savedItems, setSavedItems] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Fetch saved items from Firestore on component mount
//     const fetchSavedItems = async () => {
//       try {
//         const snapshot = await db.collection('savedItems').get();
//         const savedItemsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setSavedItems(savedItemsData);
//         setCount(savedItemsData.length);
//       } catch (error) {
//         console.error('Error fetching saved items:', error);
//       }
//     };
//     fetchSavedItems();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       // Remove item from Firestore by ID
//       await db.collection('savedItems').doc(id).delete();
//       // Update state to reflect deletion
//       setSavedItems(savedItems.filter(item => item.id !== id));
//       setCount(count => count - 1);
//     } catch (error) {
//       console.error('Error deleting saved item:', error);
//     }
//   }

//   const toURL = (props) => {window.open(props)}

//   const savedIdx = savedItems.map((saved, index) => {
//     const url = `https://media3.giphy.com/media/${saved.id}/giphy.gif`
//     return (
//       <div className="saved--box" key={index}>
//         <img
//           key={saved.id}
//           className="saved--card" 
//           src={url}
//           alt={saved.id}
//           onClick={() => toURL(url)}
//         />
//         <div className="gif--cred">
//           <div className="gif--id">ID: {saved.id}</div>
//           <button className="saveit icon del" onClick={() => handleDelete(saved.id)}>Delete</button>
//         </div>
//       </div>
//     )
//   });

//   return(
//     <div className="saved">
//       <div className="searched">Saved GIFs: {count}</div>
//       <div className="saved--list">
//         {(count <= 0 ?
//           (<div className="beforesearch">No Saved GIF found</div>) :
//           (savedIdx)
//         )}
//       </div>
//     </div>
//   );
// }

// export default Saved;

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