import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      numbers: "",
      operation: "",
      error: "",
      result: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { numbers, operation } = this.state;

    //remove comma between numbers
    let nums = this.state.numbers.split(",").map((i) => Number(i));

    //error message if empty textbox or not a number
    if (!numbers.length || numbers !== Number) {
      this.setState({
        result: "",
        error: "Invalid input.",
      });
    }
    //sum of numbers
    if (operation === "sum") {
      this.setState({
        error: "",
        result: nums.reduce((a, b) => {
          return a + b;
        }),
      });
    }
    //avg of numbers
    if (operation === "average") {
      this.setState({
        error: "",
        result: nums.reduce((a, b) => a + b) / nums.length,
      });
    }
    //mode of numbers
    if (operation === "mode") {
      let obj = {};
      let mode = 1;

      //loop to find number of repeating values
      for (let num of nums) {
        if (!obj[num]) {
          obj[num] = 1;
        } else {
          obj[num] += 1;
        }
      }
      //for...in loop to find highest repeating number to equal the mode
      for (let num in obj) {
        if (obj[num] > mode) {
          mode = num;
        }
      }
      this.setState({
        error: "",
        result: mode,
      });
    }
  };

  handleNumInput = (event) => {
    this.setState({ numbers: event.target.value });
  };
  handleSelectInput = (event) => {
    this.setState({ operation: event.target.value });
  };

  render() {
    const { result, error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            id="values"
            name="values"
            type="text"
            onChange={this.handleNumInput}
          />
          <select
            id="operation"
            name="operation"
            value={this.state.operation}
            onChange={this.handleSelectInput}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p>{error}</p>
        <p>{result}</p>
      </div>
    );
  }
}

export default Form;
