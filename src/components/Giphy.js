import React from 'react';
import { connect } from 'react-redux';
import '../css/Giphy.css'

class Giphy extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text: '',
            saveditems: {...localStorage}
        }
    }

    handleSave = (e) => {
        localStorage.setItem(e, e)
        this.setState({
            saveditems: {...localStorage},
            count: Object.keys({...localStorage}).length
        })
    }

    handleDelete = (e) => {
        localStorage.removeItem(e);
        this.setState({
            saveditems: {...localStorage},
            count: Object.keys({...localStorage}).length
        })
    }

    render(){
        const { saveditems } = this.state;
        const { handleSave, handleDelete } = this;
        const { url, text } = this.props;
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
                    {(Object.keys(saveditems).find(e => e === i.id) ? 
                        (<button className="saveit icon savedit" onClick={() => handleDelete(i.id)}>Saved</button>) 
                        : (<button className="saveit icon" onClick={() => handleSave(i.id)}>Save ⭐</button>) 
                    )}
                </div>
            </div>
        )

        return(
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
}

const mapStateToProps = (state) => {
    const {text} = state
    return text;
}

export default connect(mapStateToProps)(Giphy);