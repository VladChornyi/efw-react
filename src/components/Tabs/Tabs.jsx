import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Tabs.css";
import tabs from "../../data/tabs.json";

export default class Tabs extends Component {
  state = {
    ind: 0,
  };
  handleClick = (actInd) => this.setState({ ind: actInd });
  render() {
    return (
      <div class="tabs">
        <ul class="tabs__caption">
          {tabs.map((el, ind) => (
            <li
              className={this.state.ind === ind ? "active" : ""}
              key={el.id}
              onClick={() => this.handleClick(ind)}
            >
              Вкладка № {ind + 1}
            </li>
          ))}
        </ul>

        {tabs.map((el, ind) => (
          <div
            className={`tabs__content ${
              this.state.ind === ind ? "active" : ""
            }`}
            key={el.id}
          >
            <p>{el.descriptions}</p>
          </div>
        ))}
      </div>
    );
  }
}
