import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      result: "",
      function: "",
      inputArray: [],
    };
  }
  update = (event) => {
    let value = event.target.value;
    this.setState({
      userInput: value,
      inputArray: value.split(",").map((item) => Number(item)),
    });
  };

  functionChange = (event) => {
    this.setState({
      function: event.target.value,
    });
  };

  functions = (event) => {
    event.preventDefault();
    switch (this.state.function) {
      case "sum":
        this.setState({
          result: this.state.inputArray.reduce((a, b) => a + b),
        });
        break;
      case "average":
        this.setState({
          result:
            this.state.inputArray.reduce((a, b) => a + b) /
            this.state.inputArray.length,
        });
        break;
      case "mode":
        let mode = [];
        let numbers = {};
        this.state.inputArray.forEach((num) =>
          numbers[num] ? (numbers[num] += 1) : (numbers[num] = 1)
        );
        let max = 0;

        for (const num in numbers) {
          if (Number(numbers[num]) > max) {
            max = Number(numbers[num]);
            mode = [num];
          } else if (Number(numbers[num]) === max) {
            mode.push(num);
          }
        }
        this.setState({
          result: mode.join(),
        });
        break;
      default:
        this.setState({
          result: "Invalid input.",
        });
    }
  };

  render() {
    return (
      <>
        <form>
          <input id="values" name="values" type="text" onChange={this.update} />
          <select
            id="operation"
            name="operation"
            onChange={this.functionChange}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit" onClick={this.functions}>
            Calculate
          </button>
        </form>
        <div>
          <p>{this.state.inputArray.join()}</p>
          <p>{this.state.result}</p>
        </div>
      </>
    );
  }
}

export default Form;
