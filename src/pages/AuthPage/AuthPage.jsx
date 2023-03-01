import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/auth";

export function AuthPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const userMap = {
    email: setEmail,
    name: setName,
    surname: setSurname,
    password: setPassword,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    userMap[name](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userRegister({
        email,
        first_name: name,
        last_name: surname,
        password: password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="surname"
        name="surname"
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Sing Up</button>
    </form>
  );
}
