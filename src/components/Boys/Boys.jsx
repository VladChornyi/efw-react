import { useState } from "react";
import { Outlet } from "react-router-dom";
import boysList from "../../data/boys.json";
import { GoBack } from "../GoBack/GoBack";
import { ListItem } from "../PostItem/PostItem.styled";

export const Boys = () => {
  // state = {
  //   boysList: boysList,
  //   //   boyslist,
  // };

  const [boysList, setBoysList] = useState([]);

  const handleDelete = (event) => {
    setBoysList((prevState) =>
      prevState.filter((el) => Number(el.id) !== Number(event.target.id))
    );
    // this.setState((prevState) => ({
    //   boysList: prevState.boysList.filter(
    //     (el) => Number(el.id) !== Number(event.target.id)
    //   ),
    // }));
  };

  return (
    <>
    <GoBack/>
      <ul>
        {boysList.map(({ id, name }) => {
          return (
            <li key={id}>
              <p>Name: {name}</p>
              <button id={id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
