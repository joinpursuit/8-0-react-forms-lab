import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      operation: "",
      result: "",
    };
  }

  handleInput = (event) => {
    console.log(
      event.target.value
        .split(",")
        .map((el) => Number(el))
        .filter((el) => !isNaN(el))
    );
    this.setState({
      userInput: event.target.value,
    });
  };

  handleOperations = (event) => {
    event.preventDefault();
    
    this.setState({
      operation: event.target.value,
    });
  };

  sum = (arr) => arr.reduce((rV, cV) => rV + cV, 0);

  average = (arr) => this.sum(arr) / arr.length;

  mode = (arr) => {
    let modeObj = arr.reduce(
      (rV, cV) => ({ ...rV, [cV]: rV[cV] ? rV[cV] + 1 : 1 }),
      {}
    );
    let highestCount = [];

    for (let key in modeObj) {
      console.log(key, modeObj[key]);
      if (!highestCount.length) {
        highestCount = [key, modeObj[key]];
      }
      if (modeObj[key] > highestCount[1]) {
        highestCount = [key, modeObj[key]];
      }
    }
    return highestCount[0];
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //store invalid input in variable for better readability
    const invalidInput =
      this.state.userInput === "" ||
      this.state.userInput.split(",").some((el) => isNaN(el));

    if (invalidInput) {
      this.setState({
        result: "Invalid input.",
      });
    } else {
      this.setState({
        result: this[this.state.operation](
          this.state.userInput
            .split(",")
            .map((el) => Number(el))
            .filter((el) => !isNaN(el))
        ),
      });
    }
  };

  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          handleInput={this.handleInput}
          handleOperations={this.handleOperations}
          handleSubmit={this.handleSubmit}
          operation={this.state.operation}
        />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
