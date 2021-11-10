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
    let sum = this.handleOperationChange === 'sum';
    let average = this.handleOperationChange === 'average';
    let mode = this.handleOperationChange === 'mode';

    switch(this.handleOperationChange) {
      case sum:
        console.log(`sum operation picked`)
        break;
      case average:
        console.log(`average operation picked`)
        break;
      case mode:
        console.log(`mode operation picked`)
        break;
      default:
        console.log(`Invalid operation.`);
    }
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
