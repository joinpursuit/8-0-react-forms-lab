import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      operation: '',
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const arr = this.state.userInput ? this.state.userInput.split(',').map(el => 1*el) : []
    this.props.calculate(arr, this.state.operation)
  }

  onOperationChange = (event) => {
    this.setState({operation: event.target.value})
  }

  onUserInputChange = (event) => {
    this.setState({userInput: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input id="values" name="values" type="text" onChange={this.onUserInputChange}/>
        <select id="operation" name="operation" onChange={this.onOperationChange}>
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
