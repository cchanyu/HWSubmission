import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /* TODO - set initial state for link name and URL */
            this.state = {name:'', URL:''}
    }

    handleChange = event => {
        /* TODO - Logic for changing state based on form changes */
        this.setState({[event.target.name]: event.target.value})
        console.log('handleChange:',event.target.value)
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /* TODO - Logic for calling props to handle submission and setting state changes */
        if (this.state.name === '' || this.state.URL === '') {
            alert("Please do not submit an empty textfield.")
            this.setState({name:'', URL:''});
        } else {
            this.props.submitForm(this.state)
            console.log('onFormSubmit:',this.state)
            this.setState({name:'', URL:''});
        }
    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <h6>Name</h6>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <h6>URL</h6>
                <input type="text" name="URL" value={this.state.URL} onChange={this.handleChange} />
                <button onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
