import React from "react";
import "./Form.css";
const isInvalid = require("./isInvalid")

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      errorClass: ""
    } 
  }

  handleInput = (event) => {
    this.setState({
      userInput: event.target.value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (isInvalid(this.state.userInput)) {
      this.setState({
        errorClass: "error"
      })
      this.props.afterSubmit("Invalid input.")
    } else {
      this.setState({
        errorClass: ""
      })
    }
  }

  render() {
    return (
      <form>
        <input 
          id="values" 
          name="values" 
          type="text" 
          onChange={this.handleInput}
          className={this.state.errorClass}
        />
        <select 
          id="operation" 
          name="operation"
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button 
          type="submit"
          onClick={this.handleSubmit}
        >
          Calculate
        </button>
      </form>
    );
  }
}

export default Form;
