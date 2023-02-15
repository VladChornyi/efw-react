// Напишіть застосунок, що шукає персонажа із всесвіту
// Star wars. Він має:

// - користувач вводить у форму пошуку ім'я, натискає кнопку
//   "Search" та отримує під формою список персонажів(Поля `name` та `gender' з відповіді);
// - при натисканні на персонажа відображається детальна інформація про персонажа у модалці(
//   поля `name`, `gender`, `birth_year`, `hair_color` та `skin_color`)

// Для пошуку використовуйте API `https://swapi.py4e.com/api/people/?search=people_name`

import { Component } from "react";
import { starWarsDataFetch } from "../../services/starWars";
import { SearchField } from "./SearchField/SearchField";
import { StarWarsItem } from "./StarWarsItem/StarWarsItem";

export class StarWars extends Component {
  state = {
    starWarsData: null,
    serchQuery: "",
    error: null,
  };

  handleSubmit = (query) => {
    this.setState({ serchQuery: query });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { serchQuery } = this.state;
    try {
      if (prevState.serchQuery !== serchQuery) {
        const result = await starWarsDataFetch(serchQuery);
        this.setState({ starWarsData: result });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <>
        <SearchField handleSubmit={this.handleSubmit} />
        <ul>
          {this.state.starWarsData?.map((item) => (
            <StarWarsItem key={item.name} info={item}>
              {item.name}
            </StarWarsItem>
          ))}
        </ul>
      </>
    );
  }
}
