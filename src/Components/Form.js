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

    const arr = this.state.userInput.trim() ? this.state.userInput.split(',').map(Number) : []

    if(!arr.join('').length || arr.join('').match(/[^\d]/g) || !this.state.operation){
      this.props.calculate([], "", false)
      this.setState({className: 'error'})
    } else{
      this.props.calculate(arr, this.state.operation, true)
      this.setState({userInput: '', operation: '', className: ''})
      event.target.reset()
    }
  }

  onOperationChange = (event) => {
    this.setState({operation: event.target.value})
  }

  onUserInput = (event) => {
    this.setState({userInput: event.target.value})
  }
  
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input 
        className={this.state.className} 
        placeholder="ex 1,2,3" id="values" 
        name="values" type="text" 
        onInput={this.onUserInput}
        />
        
        <select 
        id="operation" 
        name="operation" 
        className={this.state.className} 
        onChange={this.onOperationChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="difference">difference</option>
          <option value="simplify">simplify</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
