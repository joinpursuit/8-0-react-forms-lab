import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      result: "",
      dropdown: "",
    };
  }
  handleButtonClick = (event) => {
    event.preventDefault();
    this.props.calculateButton(this.state.userInput, this.state.dropdown);
  };
  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  handleDropdown = (event) => {
    this.setState({
      dropdown: event.target.value,
    });
  };
  render() {
    return (
      <form>
        <input
          id="values"
          name="values"
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
        />
        <select id="operation" name="operation" onChange={this.handleDropdown}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.handleButtonClick} type="submit">
          Calculate
        </button>
      </form>
    );
  }
}

export default Form;
