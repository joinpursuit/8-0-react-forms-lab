import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      feature: "sum",
    };
  }

  preventDefault = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.preventDefault}>
        <input 
          id="values" 
          name="values" 
          type="text"
        />
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