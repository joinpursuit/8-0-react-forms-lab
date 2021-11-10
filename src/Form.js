import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      userInput: '',
      operation: '',
    }
  }

  handleFormSubmit=(event) => {
    event.preventDefault();
    console.log(event)

    let { userInput, operation, result } = this.state;

    // if (userInput && operation && result) {
    //   alert(
    //     `Form submitted! \n ${userInput} \n ${operation} \n ${result}`
    //   )
    // } else {
    //   alert("Please fill out the form completely")
    // }
  }

  handleUserInput=(event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  handleOperationChange=(event) => {
    this.setState({
      operation: event.target.value,
      result: '',
    })
  }

  /*
    `calculatesResult` contain all possible operations:
      - sum
      - average
      - mode
    if statement that calls back operation change
    if user picks `sum`, operation picks that `sum` result
  */
  calculatesResult=() => {
    
  }

  render() {
    console.log(this.state);

    return (
      <form onSubmit={this.handleFormSubmit} className="form-container">
        <input 
          id="values"
          name="values"
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInput}
        />
        <select
          id="operation"
          name="operation"
          value={this.state.operation}
          onChange={this.handleOperationChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={this.calculatesResult} type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
