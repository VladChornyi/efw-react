// Напишіть компонент Albums, що відправляє запит на `https://jsonplaceholder.typicode.com/albums`
// та виводить перші 10 альбомів на екран.
// Зробіть знизу кнопку "load more", при натисканні на котру виводяться наступні 10 альбомов.

// import axios from "axios";

import React, { Component } from "react";
import { getAlbumsService } from "../../services/albums";

export default class Albums extends Component {
  state = {
    albums: [],
    status: "idle",
  };
  async componentDidMount() {
    this.setState({ status: "loading" });
    try {
      const response = await getAlbumsService();
      this.setState({ albums: response, status: "fulfilled" });
    } catch (error) {
      this.setState({ status: "rejected" });
      throw new Error(error.message);
    }
  }
  render() {
    return (
      <h3>
        <ul>
          {this.state.albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </h3>
    );
  }
}
