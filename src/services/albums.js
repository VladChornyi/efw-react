import axios from "axios";
axios.defaults.baseURL = `https://jsonplaceholder.typicode.com/albums`;
export async function getAlbumsService() {
  const { data } = await axios.get();
  return data;
}
