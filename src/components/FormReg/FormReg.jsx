import { Component } from "react";

export class FormReg extends Component {
  state = {
    name: "",
    mail: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value.trim() });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor=""></label>
          <input
            type="email"
            name="mail"
            onChange={this.handleChange}
            value={this.state.mail}
          />

          <label htmlFor=""></label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor=""></label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={"pass"}
          />

          <input type="checkbox" />

          <button type="submit">Send info</button>
        </form>
      </>
    );
  }
}
