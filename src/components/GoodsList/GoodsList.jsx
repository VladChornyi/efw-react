import { Component } from "react";
import goods from "../../data/goods.json";
import "./GoodList.css";
import { useDispatch, useSelector } from "react-redux";
import { setIdAction } from "../../redux/goods/goodsAction";

export const GoodList = () => {
  const activeId = useSelector((state) => state.goodsList.activeId);
  const dispatch = useDispatch();

  const handleChangeColor = (id) => {
    dispatch(setIdAction(id));
    // this.setState({ activeId: id });
  };

  return (
    <ul>
      {goods.map(({ id, name, description }) => (
        <li
          key={id}
          className={id === activeId ? "active" : ""}
          onClick={() => handleChangeColor(id)}
        >
          <p>Name: {name}</p>
          <p>Description: {description}</p>
        </li>
      ))}
    </ul>
  );
};
