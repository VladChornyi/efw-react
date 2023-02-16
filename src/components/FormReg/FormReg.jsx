import { nanoid } from "nanoid";
import { useState } from "react";

export function FormReg () {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [user, setUser] = useState(null);

  // state = {
  //   name: "",
  //   mail: "",
  //   password: "",
  //   checkbox: false,
  //   user: null,
  // };

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    
 switch (name) {
  case "password":
     setPassword(value);
     break;
    case 'mail':
     setMail(value);
     break;
   case 'name':
     setName(value);
     break;
    case 'checkbox':
     setCheckbox(checked);
    break;
  default:
    break;
 }
    // setState({[name]: type === 'checkbox' ? checked : value.trim() });

  };

  const handleSubmit = e => {
    e.preventDefault();

    // const { name, mail, password } = this.state;
    const newUser = {
    id: nanoid(),
    name,
    mail,
    password,
    }
  setUser(newUser)
  setName('')
  setMail('')
  setPassword('')
  setCheckbox(false)
  
  }

    // const { name, mail, password, user, checkbox } = this.state;
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            type="email"
            name="mail"
            onChange={handleChange}
            value={mail}
            required
          />

          <label htmlFor=""></label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            required
          />

          <label htmlFor=""></label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password} 
            required
          />

          <input type="checkbox" name="checkbox" onChange={handleChange} checked={checkbox}  required/>

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

