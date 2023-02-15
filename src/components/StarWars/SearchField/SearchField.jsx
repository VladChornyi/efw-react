import { Component } from "react";

export class SearchField extends Component {
state = {
    name: '',
}

handleInput = ( event )=> {
this.setState({name: event.target.value})
}

handleFormSUbmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.name);
}

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSUbmit}>
                <input type="text"
                 placeholder="Enter character name" 
                 name="name"
                 value={this.state.name} onChange={this.handleInput}/>
                 <button>Search</button>
                </form>
            </div>
        )
    }
}