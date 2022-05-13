import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: "",
      error: "",
      total: "",
      operation: "",
    };
  }

  handleSubmit = (event) => {
    const { numbers, operation } = this.state;
    event.preventDefault();

    let inputArray = this.state.numbers
      .split(",")
      .map((element) => Number(element));

    if (numbers === "" || numbers !== Number) {
      this.setState({ error: "Invalid input." });
    }

    if (operation === "sum") {
      this.setState({
        error: "",
        total: inputArray.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        }),
      });
    }

    if (operation === "average") {
      this.setState({
        error: "",
        total:
          inputArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          ) / inputArray.length,
      });
    }

    function findMode(Array) {
      let object = {};

      for (let i = 0; i < Array.length; i++) {
        if (object[Array[i]]) {
          object[Array[i]] += 1;
        } else {
          object[Array[i]] = 1;
        }
      }
      let biggestValue = 0;
      let biggestValuesKey;

      Object.keys(object).forEach((key) => {
        let value = object[key];
        if (value > biggestValue) {
          biggestValue = value;
          biggestValuesKey = key;
        }
      });

      return biggestValuesKey;
    }

    if (operation === "mode") {
      this.setState({
        error: "",
        total: findMode(inputArray),
      });
    }
  };

  handleChange = (event) => {
    this.setState({ numbers: event.target.value });
  };

  handleOperation = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          id="values"
          name="values"
          type="text"
        />
        <select
          id="operation"
          name="operation"
          value={this.state.operation}
          onChange={this.handleOperation}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
        <div>{this.state.error}</div>
        <div>{this.state.total}</div>
      </form>
    );
  }
}

export default Form;
