import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: "",
      operation: "",
      result: "",
    };
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      values: value,
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    this.setState({
      operation: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      result: this.mathWiz(),
    });
  };

  mathWiz = () => {
    const { values, operation } = this.state;
    if (!values || !operation) {
      return `Invalid input.`;
    }
    const arrayOfNums = values.split(",").map((num) => Number(num));
    if (arrayOfNums.includes(NaN)) {
      return `Invalid input.`;
    }
    if (operation === "sum") {
      console.log("hello");
      return arrayOfNums.reduce((a, b) => a + b, 0);
    } else if (operation === "average") {
      let sum = arrayOfNums.reduce((a, b) => a + b, 0);
      return sum / arrayOfNums.length;
    } else if (operation === "mode") {
      function getMode(array) {
        const obj = {};
        array.forEach((num) => {
          if (!obj[num]) {
            obj[num] = 1;
          } else {
            obj[num] += 1;
          }
        });
        let biggestValue = 0;
        let biggestValueKey = 0;
        Object.keys(obj).forEach((key) => {
          let value = obj[key];
          if (value > biggestValue) {
            biggestValue = value;
            biggestValueKey = key;
          }
        });

        return biggestValueKey;
      }
      return getMode(arrayOfNums);
    }
  };

  render() {
    let { values, operation, result } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          values={values}
          operation={operation}
          result={result}
          handleInputChange={this.handleInputChange}
          handleSelectChange={this.handleSelectChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <section id="result">
          <p>{result}</p>
        </section>
      </main>
    );
  }
}

export default App;
