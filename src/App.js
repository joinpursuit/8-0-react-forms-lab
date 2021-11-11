import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [],
      operation: "",
      result: null,
      class: "",
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (numValue, opValue, func) => {
    let answer = func(opValue, numValue);
    console.log(!Number.isInteger(answer), answer);
    if (answer !== "Invalid input.") {
      this.setState({
        numbers: [],
        operation: "",
        result: answer,
        class: "",
      });
    } else {
      this.setState({
        numbers: numValue,
        operation: opValue,
        result: answer,
        class: "error",
      });
    }
  };

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          info={this.state}
          handle={this.handleChange}
          submit={this.handleOnSubmit}
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
