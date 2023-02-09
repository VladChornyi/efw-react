import { Component } from 'react';
import boysList from '../../data/boys.json';
import { ListItem } from '../PostItem/PostItem.styled';

export class Boys extends Component {
  state = {
      boysList: boysList,
    //   boyslist,
  };

    handleDelete = (event) => {
      this.setState((prevState) => ({ boysList: prevState.boysList.filter((el) => Number(el.id) !== Number(event.target.id)) })); 
  };
  render() {
    return (
      <ul>
        {this.state.boysList.map(({ id, name }) => {
          return (
            <li key={id}>
              <p>Name: {name}</p>
              <button id={id} onClick={this.handleDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}