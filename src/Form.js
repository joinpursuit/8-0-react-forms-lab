import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      operation: "",
      answer: "",
    };
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value.split(","),
    });
  };

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    const { userInput, operation } = this.state;
    event.preventDefault();

    if (operation === "") {
      this.setState({
        answer: "Invalid input.",
      });
    } else if (operation === "sum") {
      this.setState({
        answer: userInput.reduce((a, b) => Number(a) + Number(b)),
        userInput: [],
        operation: "",
      });
    } else if (operation === "average") {
      this.setState({
        answer:
          userInput.reduce((a, b) => Number(a) + Number(b)) / userInput.length,
        userInput: [],
        operation: "",
      });
    } else if (operation === "mode") {
      let Obj = {};
      let mode = 1;
      for (let num of userInput) {
        if (!Obj[num]) {
          Obj[num] = 1;
        } else {
          Obj[num] += 1;
        }
      }

      for (let num in Obj) {
        if (Obj[num] > mode) {
          mode = num;
        }
      }

      this.setState({
        answer: mode,
        userInput: [],
        operation: "",
      });
    }
  };
  render() {
    const { answer, userInput, operation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form-container">
          <input
            id="values"
            name="values"
            type="text"
            value={userInput}
            onChange={this.handleUserInput}
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
        <p id="answer">{answer}</p>
      </div>
    );
  }
}

export default Form;
