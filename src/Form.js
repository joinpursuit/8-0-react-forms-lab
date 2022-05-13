import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userOperation: "",
      userArray: [],
      output: "",
    };
  }

  checkArrayInput = (array) =>
    array.every((char) => {
      return !isNaN(char);
    });

  checkOperation = (operation) =>
    ["sum", "average", "mode"].includes(operation);

  handleSelectChange = (event) => {
    const { value } = event.target;
    this.setState({
      userOperation: value,
    });
  };

  getInputValue = (event) => {
    const { value } = event.target;
    const splitArray = value.split(",").map((str) => {
      return parseInt(str.trim());
    });
    this.setState({
      userArray: splitArray,
    });
  };

  getSum = (array) => array.reduce((a, b) => a + b, 0);

  getAverage = (array) => {
    const total = array.reduce((a, b) => a + b, 0);
    return total / array.length;
  };

  getMode = (array) => {
    const obj = {};
    array.forEach((a) => {
      if (!obj[a]) {
        obj[a] = 1;
      } else {
        obj[a] += 1;
      }
    });

    let mostRecurring = 0;
    let mostRecurredNum = 0;

    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      if (value > mostRecurring) {
        mostRecurring = value;
        mostRecurredNum = key;
      }
    });

    return mostRecurredNum;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { userOperation, userArray, output } = this.state;
    if (this.checkArrayInput(userArray) && this.checkOperation(userOperation)) {
      switch (userOperation) {
        case "sum":
          this.setState({ output: this.getSum(userArray).toString() });
          break;
        case "average":
          this.setState({ output: this.getAverage(userArray).toString() });
          break;
        default:
          this.setState({ output: this.getMode(userArray).toString() });
          break;
      }
    } else {
      this.setState({ output: "Invalid input." });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.getInputValue}
          id="values"
          name="values"
          type="text"
        />
        <select
          onChange={this.handleSelectChange}
          value={this.state.userOperation}
          id="operation"
          name="operation"
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
        <h1>{this.state.output}</h1>
      </form>
    );
  }
}

export default Form;
