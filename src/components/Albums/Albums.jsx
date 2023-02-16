// Напишіть компонент Albums, що відправляє запит на `https://jsonplaceholder.typicode.com/albums`
// та виводить перші 10 альбомів на екран.
// Зробіть знизу кнопку "load more", при натисканні на котру виводяться наступні 10 альбомов.

// import axios from "axios";

import React, { Component } from "react";
import { getAlbumsService } from "../../services/albums";
import { Pagination } from "../Pagination/Pagination";

export default class Albums extends Component {
  state = {
    albums: [],
    status: "idle",
    perPage: 10,
    currentPage: 1,
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

  handleChangePage = (targetPage) => {
    this.setState({
      currentPage: targetPage,
    })
  }
   
  getActiveAlbums = () => {
    const {perPage, currentPage } = this.state;
    const start = (currentPage * perPage) - perPage; // 2 * 10 - 10 
    const end = currentPage * perPage;
    return this.state.albums.slice(start, end);
  }

  render() {
    const { albums, perPage, currentPage } = this.state;
    return (
      <>
        <ul>
          {this.getActiveAlbums().map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
        <Pagination
          totalPages={Math.ceil(albums.length / perPage)}
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
        />
      </>
    );
  }
}
