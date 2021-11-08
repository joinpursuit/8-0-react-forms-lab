import React from "react";
import "./Form.css";

class Form extends React.Component {
    constructor() {
    super();
    this.state = {
      operation: "",
      userInput: "",
    };
  }

  // //userInput function
  handleUserInput = (event) => {
    this.setState({userInput: event.target.value});
  };

  handleModeChange = (event) => {
      this.setState({operation: event.target.value,})
  }

  //form submit
  handleSubmit = (event) => {
    event.preventDefault();
         this.props.getResult(this.state.userInput, this.state.operation) 
  };


  render() {
    return (
      <form >
        <input
          id="values"
          name="values"
          type="text"
          onChange={this.handleUserInput}
          value={this.state.userInput}
        />
        <select
          id="operation"
          name="operation"
          onChange={this.handleModeChange}
          
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.handleSubmit} type="submit" >Calculate</button>
      </form>
    );
  }
}

export default Form;
