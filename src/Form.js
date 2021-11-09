import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      operation: "",
      userInput: "",
    };
  }
  // event listener for userInput
  // change our state to reflect what the user has typed in
  handleUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  }; // handles the dropdown change (operation to perform)

  handleOperation = (event) => {
    this.setState({ operation: event.target.value });
  };

  // on submit depending on the userInput and the dropdown option selected performs the operation and displays result
  // on submit if userInput is invalid displays "Invalid input" in result section.
  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.userInput.length === 0 ||
      !Number(this.state.userInput.split(",").join(""))
    ) {
      this.props.app.setState({ result: "Invalid input." });
    }
    // userInput has to be a number or else it is invalid
    // userInput can not be empty
    else {
      if (this.state.operation === "sum") {
        const sum = this.state.userInput.split(",").reduce((a, b) => {
          return Number(a) + Number(b);
        });
        this.props.app.setState({ result: sum });
      }

      if (this.state.operation === "average") {
        const average =
          this.state.userInput.split(",").reduce((a, b) => {
            return Number(a) + Number(b);
          }) / this.state.userInput.split(",").length;
        this.props.app.setState({ result: average });
      }

      if (this.state.operation === "mode") {
        const obj = {};
        for (const element of this.state.userInput.split(",")) {
          if (obj[element]) {
            obj[element] = ++obj[element];
          } else {
            obj[element] = 1;
          }
        }
        let mode;
        for (const key in obj) {
          if (obj[key] > obj[mode] || !obj[mode]) {
            mode = key;
          }
        }
        this.props.app.setState({ result: mode });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
              
        <input
          id="values"
          name="values"
          type="text"
          onChange={this.handleUserInput}
        />
                
        <select onChange={this.handleOperation} id="operation" name="operation">
                    <option value=""></option>
                    <option value="sum">sum</option>
                    <option value="average">average</option>
                    <option value="mode">mode</option>
                  
        </select>
                <button type="submit">Calculate</button>
              
      </form>
    );
  }
}

export default Form;
