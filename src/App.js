import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }
  /* STATE --- 1. THE RESULT - "INVALID INPUT" || THE RESULT OF SUM,AVERAGE, MODE... SHOULD LIVE IN APP.JS */
  calculateButton = (userInput, dropdown) => {
    if (userInput === "" || dropdown === "") {
      this.setState({
        result: "Invalid input.",
      });
    } else {
      /* METHODS --- 1. APP: -  TO CALCULATE SUM, AVERAGE, MODE. WHEN BUTTON CLICKED RESULT WILL APPEAR BETWEEN <P> */
      let inputArray = userInput.split(",").map(Number);
      if (dropdown === "sum") {
        const sum = inputArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );
        this.setState({
          result: sum,
        });
      } else if (dropdown === "average") {
        const average =
          inputArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          ) / inputArray.length;
        this.setState({
          result: average,
        });
      } else {
        const dropdownMode = {};
        // LOOPS THRU ARRAY
        for (let arr of inputArray) {
          if (dropdownMode[arr] !== undefined) {
            dropdownMode[arr] = dropdownMode[arr] + 1;
          } else {
            dropdownMode[arr] = 1;
          }
        }
        let result = 0;
        let max = -Infinity;
        // LOOPS THRU OBJECT
        for (let key in dropdownMode) {
          if (dropdownMode[key] > max) {
            max = dropdownMode[key];
            result = key;
          }
        }
        this.setState({
          result: result,
        });
      }
    }
  };
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form calculateButton={this.calculateButton} />
        <section id="result">
          <p>{this.state.result}</p>
        </section>
      </main>
    );
  }
}

export default App;
