import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    /* STATE --- 2. THE OPERATIONS - WHICH OPERATION ARE WE DOING... SHOULD LIVE IN THE FORM
    3. THE VALUES - WHICH VALUES ARE WE WORKING WITH, THE CONTENTS OF USER INPUT...SHOULD LIVE IN THE FORM */
    super();
    this.state = {
      userInput: "",
      dropdown: "",
    };
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    this.props.calculateButton(this.state.userInput, this.state.dropdown);
    this.setState({
      userInput: "",
      dropdown: "",
    });
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
  /* METHODS --- 2. FORM: - BUTTON HANDLER THAT PREVENTS DEFAULT, SEND DATA... SOMEWHERE 
- USER INPUT HANDLER
- DROPDOWN MENU HANDLER */
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
        <select
          id="operation"
          name="operation"
          onChange={this.handleDropdown}
          value={this.state.dropdown}
        >
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
