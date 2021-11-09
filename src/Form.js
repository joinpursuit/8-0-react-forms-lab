import React from "react";
import "./Form.css";


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      operator: "",
      error: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  handleOperatorChange = (event) => {
    this.setState({
      operator: event.target.value,
    });
  };
  handleError = (event) => {
    event.preventDefault();
    let result = "";
    let error = "";
    if (
      this.state.operator === "sum" &&
      this.state.userInput.split(",").every((c) => !isNaN(parseInt(c, 10)) && !isNaN(c))
    ) {
      result = this.state.userInput.split(",").reduce((a, b) => Number(a) + Number(b));
      this.setState({
        userInput: "",
        operator: "",
      });
    } else if (
      this.state.operator === "average" &&
      this.state.userInput.split(",").every((c) => !isNaN(parseInt(c, 10)) && !isNaN(c))
    ) {
      const numbers = this.state.userInput.split(",").reduce((a, b) => Number(a) + Number(b));
      result = numbers / this.state.userInput.split(",").length;
      this.setState({
        userInput: "",
        operator: "",
      });
    } else if (
      this.state.operator === "mode" &&
      this.state.userInput.split(",").every((c) => !isNaN(parseInt(c, 10)) && !isNaN(c))
    ) {
      let numbers = this.state.userInput.split(",");
      let numMapping = {};
      numbers.forEach((element, i) => {
        if (!(element in numMapping)) {
          numMapping[element] = 1;
        } else {
          numMapping[element] += 1;
        }
      });
      result = Object.keys(numMapping).reduce((a, b) => (numMapping[a] > numMapping[b] ? a : b));
      this.setState({
        userInput: "",
        operator: "",
      });
    } else {
      {
        error = "Invalid input.";
      }
    }
    this.setState({
      error: error,
    });
    this.props.afterSubmit(result, error);
  };
  render() {
    const errorClass = this.state.error ? "error" : null;
    return (
      <form>
        <input
          className={errorClass}
          id="values"
          name="values"
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <select
          className={errorClass}
          id="operation"
          name="operation"
          value={this.state.operator}
          onChange={this.handleOperatorChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={this.handleError}>
          Calculate
        </button>
      </form>
    );
  }
}
export default Form;









