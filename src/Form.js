import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      result: "",
      func: "",
      input: [],
    };
  }
  refresh = (event) => {
    let value = event.target.value;
    this.setState({
      userInput: value,
      input: value.split(",").map((item) => Number(item)),
    });
  };

  selection = (event) => {
    this.setState({
      func: event.target.value,
    });
  };

  cases = (event) => {
    event.preventDefault();
    switch (this.state.func) {
      case "sum":
        this.setState({
          result: this.state.input.reduce((a, b) => a + b),
        });
        break;
      case "average":
        this.setState({
          result:
            this.state.input.reduce((a, b) => a + b) /
            this.state.input.length,
        });
        break;
      case "mode":
        let mode = [];
        let numbers = {};
        this.state.input.forEach((num) =>
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
    return ( <>
      <form>
        <input id="values" name="values" type="text" onChange={this.refresh} />
        <select
          id="operation"
          name="operation"
          onChange={this.selection}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={this.cases}>
          Calculate
        </button>
      </form>
      <div>
        <p>{this.state.input.join()}</p>
        <p>{this.state.result}</p>
      </div>
    </>
  );
}
}
export default Form;
