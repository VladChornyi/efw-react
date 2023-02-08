import { Component } from "react";
import { FAQItem } from "./FAQItem";

const questions = [
  {
    title: "question-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget maur",
  },
  {
    title: "question-2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget maur",
  },
  ,
  {
    title: "question-3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget maur",
  },
  ,
  {
    title: "question-4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget maur",
  },
  ,
  {
    title: "question-5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu interdum diam. Donec interdum porttitor risus non bibendum. Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim arcu nec elit faucibus condimentum. Donec facilisis consectetur enim sit amet varius. Pellentesque justo dui, sodales quis luctus a, iaculis eget maur",
  },
];

export class FAQ extends Component {
  state = { isOpenAll: false };

  handleOpenAll = () => {
    this.setState({ isOpenAll: true });
  };

  handleCloseAll = () => {
    this.setState({ isOpenAll: false });
  };

  render() {
    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button
            type="button"
            onClick={this.handleOpenAll}
            className="btn"
            id="expand-all"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={this.handleCloseAll}
            className="btn"
            id="collapse-all"
          >
            Collapse All
          </button>
          {questions.map(({ title, description }) => (
            <FAQItem
              key={title}
              title={title}
              description={description}
              isOpenAll={this.state.isOpenAll}
            />
          ))}
        </div>
      </div>
    );
  }
}
