import React from 'react';
import '../css/Saved.css'

class Saved extends React.Component {
    constructor(props){
        super(props)
        this.state={
            saveditems: {...localStorage},
            count: Object.keys({...localStorage}).length
        }
      }

    render() {
        const { saveditems, count } = this.state;
        const toURL = (props) => {window.open(props)}
        const handleDelete = (e) => {
            localStorage.removeItem(e);
            this.setState({
                saveditems: {...localStorage},
                count: Object.keys({...localStorage}).length
            })
        }

        return(
            <div className="saved">
                <div className="searched">Saved GIFs: {count}</div>
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
                                    <button className="saveit icon del" onClick={handleDelete.bind(this, saved)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Saved;