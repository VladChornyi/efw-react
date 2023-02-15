import { Component } from "react";
import { Modal } from "../Modal/Modal";

export class StarWarsItem extends Component {
  state = {
    isOpenModal: false,
  };

  hanldeToggleModal = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    return (
      <li onClick={this.hanldeToggleModal}>
        <span>{this.props.children}</span>
        {this.state.isOpenModal && (
          <Modal data={this.props.info} closeModal={this.hanldeToggleModal} />
        )}
      </li>
    );
  }
}
