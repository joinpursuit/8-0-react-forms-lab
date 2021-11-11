import React from "react";
import "./Form.css";
import calculator from "./result";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.handle(event.target.name, event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.submit(
      this.props.info.numbers,
      this.props.info.operation,
      calculator
    );
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          id="values"
          name="numbers"
          type="text"
          onChange={this.handleChange}
          value={this.props.info.numbers}
          className={this.props.info.class}
        />
        <select
          id="operation"
          name="operation"
          onChange={this.handleChange}
          value={this.props.info.operation}
          className={this.props.info.class}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
