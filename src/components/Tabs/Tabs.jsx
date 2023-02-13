import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Tabs.css";
import tabs from "../../data/tabs.json";

const LOCAL_KEY = "index";

export default class Tabs extends Component {
  state = {
    // ind: 0,
    ind: this.getLocalData() ?? 0,
  };

  getLocalData() {const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
      return localData;}

  // componentDidMount() {
  //   const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  //   console.log(localData, this.state.ind);
  //   if (localData === null) {return}
  //   this.setState({ind: localData,});
  // };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(LOCAL_KEY, this.state.ind);
  }

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
