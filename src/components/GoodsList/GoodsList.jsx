import { Component } from "react";
import goods from "../../data/goods.json";
import "./GoodList.css";

export class GoodList extends Component {
  state = {
    activeId: "",
  };

  handleChangeColor = (id) => {
    console.log(id);
    this.setState({ activeId: id });
  };

  render() {
    return (
      <ul>
        {goods.map(({ id, name, description }) => (
          <li
            key={id}
            className={id === this.state.activeId ? "active" : ""}
            onClick={() => this.handleChangeColor(id)}
          >
            <p>Name: {name}</p>
            <p>Description: {description}</p>
          </li>
        ))}
      </ul>
    );
  }
}
