// Напишіть застосунок, що шукає персонажа із всесвіту
// Star wars. Він має:

// - користувач вводить у форму пошуку ім'я, натискає кнопку
//   "Search" та отримує під формою список персонажів(Поля `name` та `gender' з відповіді);
// - при натисканні на персонажа відображається детальна інформація про персонажа у модалці(
//   поля `name`, `gender`, `birth_year`, `hair_color` та `skin_color`)

// Для пошуку використовуйте API `https://swapi.py4e.com/api/people/?search=people_name`

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getStarWars } from "../../redux/starWars/starWarsOperations";
import { starWarsDataFetch } from "../../services/starWars";
import { GoBack } from "../GoBack/GoBack";
import { SearchField } from "./SearchField/SearchField";
import { StarWarsItem } from "./StarWarsItem/StarWarsItem";

export function StarWars() {
  const [searchParams, setSearchParams] = useSearchParams();

  const starWarsData = useSelector((state) => state.starWars.starWarsData);
  const serchQuery = searchParams.get("name");

  const dispatch = useDispatch();
  // state = {
  //   starWarsData: null,
  //   serchQuery: "",
  //   error: null,
  // };

  const handleSubmit = (query) => {
    setSearchParams({ name: query });
    // this.setState({ serchQuery: query });
  };

  useEffect(() => {
    dispatch(getStarWars(serchQuery));
  }, [serchQuery]);

  // async componentDidUpdate(prevProps, prevState) {
  //   const { serchQuery } = this.state;
  //   try {
  //     if (prevState.serchQuery !== serchQuery) {
  //       const result = await starWarsDataFetch(serchQuery);
  //       this.setState({ starWarsData: result });
  //     }
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   }
  // }

  return (
    <>
      <GoBack />
      <SearchField handleSubmit={handleSubmit} />
      <ul>
        {starWarsData?.map((item) => (
          <StarWarsItem key={item.name} info={item}>
            {item.name}
          </StarWarsItem>
        ))}
      </ul>
    </>
  );
}
