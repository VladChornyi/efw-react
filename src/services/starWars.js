// https://swapi.py4e.com/api/people/?search=people_name

import axios from "axios";

export const starWarsDataFetch = async (name) => {
  const { data } = await axios.get(
    `https://swapi.py4e.com/api/people/?search=${name}`
  );
  return data.results;
};
