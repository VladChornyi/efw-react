import React, { Component } from "react";
import "./AccordionItems.css";
export class AccordionItem extends Component {
  state = { isOpen: false };
  handleToggleAccordion = () => {
    this.setState((prevState) => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="accordion">
          <div className="accordion-item">
            <p
              className={`title ${this.state.isOpen ? "is-expanded" : ""}`}
              onClick={this.handleToggleAccordion}
            >
              First Question
            </p>

            <div
              className={`content ${this.state.isOpen && "is-expanded"}`}
              onClick={this.handleToggleAccordion}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
