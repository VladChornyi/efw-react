import { nanoid } from "nanoid";
import { Component } from "react";

export class FormReg extends Component {
  state = {
    name: "",
    mail: "",
    password: "",
    checkbox: false,
    user: null,
  };

  handleChange = (e) => {
    const { name, checked, type, value } = e.target;

    this.setState({[name]: type === 'checkbox' ? checked : value.trim() });

  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, mail, password } = this.state;
    const newUser = {
    id: nanoid(),
    name,
    mail,
    password,
    }
this.setState({
  user: newUser,
  name: "",
  mail: "",
  password: "",
  checkbox: false,
  
})


  }

  render() {
    const { name, mail, password, user, checkbox } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=""></label>
          <input
            type="email"
            name="mail"
            onChange={this.handleChange}
            value={mail}
            required
          />

          <label htmlFor=""></label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            required
          />

          <label htmlFor=""></label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password} 
            required
          />

          <input type="checkbox" name="checkbox" onChange={this.handleChange} checked={checkbox}  required/>

          <button type="submit">Send info</button>
        </form>
        {user &&
        <> 
        <p>name:{user.name}</p>
        <p>mail:{user.mail}</p>
        <p>password:{user.password}</p>
        </>}
      </>
    );
  }
}
