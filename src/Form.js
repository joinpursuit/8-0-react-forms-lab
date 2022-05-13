import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: [],
      operation: "",
      result: "",
    };
  }

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };

  handleInput = (event) => {
    this.setState({
      input: event.target.value.split(","),
    });
  };

  handleSubmitForm = (event) => {
    const { input, operation } = this.state;
    event.preventDefault();

    if (operation === "") {
      this.setState({
        result: "Invalid input.",
      });
    } else if (operation === "sum") {
      this.setState({
        result: input.reduce((a, b) => Number(a) + Number(b)),
        input: [],
        operation: "",
      });
    } else if (operation === "average") {
      this.setState({
        result: input.reduce((a, b) => Number(a) + Number(b)) / input.length,
        input: [],
        operation: "",
      });
    } else if (operation === "mode") {
      let modeObject = {};
      let mode = 1;
      for (let number of input) {
        if (!modeObject[number]) {
          modeObject[number] = 1;
        } else {
          modeObject[number] += 1;
        }
      }

      for (let number in modeObject) {
        if (modeObject[number] > mode) {
          mode = number;
        }
      }

      this.setState({
        result: mode,
        input: [],
        operation: "",
      });
    }
  };

  render() {
    const { result, input, operation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            id="values"
            name="values"
            type="text"
            value={input}
            onChange={this.handleInput}
          />
          <select
            id="operation"
            name="operation"
            value={operation}
            onChange={this.handleOperationChange}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p id="result">{result}</p>
      </div>
    );
  }
}

export default Form;
