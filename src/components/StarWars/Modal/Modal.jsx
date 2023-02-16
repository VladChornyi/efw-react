import { Component } from "react";
import { createPortal } from "react-dom";

export class Modal extends Component {
  onEscapePress = (e) => {
    console.log(e.code === "Escape");
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapePress);
  }

  render() {
    const { hair_color, skin_color, gender, name } = this.props.data;
    return createPortal(
      <div>
        {/* {console.log(data)} */}
        <div>
          <p>name: {name}</p>
          <p>gender: {gender}</p>
          <p>hair color:{hair_color}</p>
          <p>skin color:{skin_color}</p>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

// - при натисканні на персонажа відображається детальна інформація про персонажа у модалці(
//   поля `name`, `gender`, `birth_year`, `hair_color` та `skin_color`)
