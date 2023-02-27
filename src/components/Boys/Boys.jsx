import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import boys from "../../data/boys.json";
import { deleteAction } from "../../redux/boys/boysReducer";
import { GoBack } from "../GoBack/GoBack";
import { ListItem } from "../PostItem/PostItem.styled";

export const Boys = () => {
  const dispatch = useDispatch();
  const boysList = useSelector((state)=>state.boys.items);
  // const [boysList, setBoysList] = useState(boys);
  const handleDelete = (event) => {
    dispatch(deleteAction(event.target.id));
  };

  return (
    <>
      <GoBack />
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
