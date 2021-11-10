import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: "",
      operation: ""
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value
    })
  }

  calculateResult = () => {
    
  }
  
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <input id="values" name="values" type="text" value={this.state.userInput}
              onChange={this.handleUserInput} />
        <select id="operation" name="operation" value={this.state.operation} onChange={this.handleOperationChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={this.calculateResult}>Calculate</button>
      </form>
    );
  }
}

export default Form;
