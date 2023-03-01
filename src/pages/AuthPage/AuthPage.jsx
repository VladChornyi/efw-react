import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../redux/auth/authOperation";

export function AuthPage({ isLogin }) {
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
    if (isLogin) {
      dispatch(
        userLogin({
          email,
          password,
        })
      );
    } else {
      dispatch(
        userRegister({
          email,
          first_name: name,
          last_name: surname,
          password: password,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />

      {!isLogin && (
        <>
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
        </>
      )}

      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">{isLogin ? "Sing in" : "Sign up"}</button>
    </form>
  );
}
