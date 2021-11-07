import React from "react";
import "../Form.css";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      operation: '',
      className: ''
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const arr = this.state.userInput ? this.state.userInput.split(',').map(el => 1*el) : []

    let isValid = true

    if(!arr.join('').length || arr.join('').match(/[^\d]/g) || !this.state.operation){
      isValid = false
      this.setState({className: 'error'})
    }

    this.props.calculate(arr, this.state.operation, isValid)
    if(isValid){
      this.setState({userInput: ''})
      this.setState({operation: ''})
      this.setState({className: ''})
      event.target.reset()
    }
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
        <input className={this.state.className} id="values" name="values" type="text" onInput={this.onUserInputChange}/>
        <select className={this.state.className} id="operation" name="operation" onChange={this.onOperationChange}>
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
