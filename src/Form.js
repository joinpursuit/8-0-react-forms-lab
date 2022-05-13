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

  render() {
    return (
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
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
