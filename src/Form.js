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
    let numCheck = true;
    let inputs = document.querySelector("input");
    let selector = document.querySelector("select");
    this.state.inputArray.forEach((num) => {
      if (isNaN(num)) {
        numCheck = false;
      }
    });
    if (numCheck) {
      switch (this.state.function) {
        case "sum":
          this.setState({
            result: this.state.inputArray.reduce((a, b) => a + b),
          });
          inputs.value = "";
          selector.value = "";
          selector.classList.remove("error");
          inputs.classList.remove("error");
          break;
        case "average":
          this.setState({
            result:
              this.state.inputArray.reduce((a, b) => a + b) /
              this.state.inputArray.length,
          });
          inputs.value = "";
          selector.value = "";
          selector.classList.remove("error");
          inputs.classList.remove("error");

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
          inputs.value = "";
          selector.value = "";
          selector.classList.remove("error");
          inputs.classList.remove("error");

          break;
        default:
          this.setState({
            result: "Invalid input.",
          });
          selector.classList.add("error");
          inputs.classList.add("error");
      }
    } else {
      this.setState({
        result: "Invalid input.",
      });
      selector.classList.add("error");
      inputs.classList.add("error");
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
