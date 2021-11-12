import React from "react";
import "./Form.css";
import ErrorMessage from "./ErrorMessage";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      mathChoice: "",
    };
  }

  //takes the users input  - split, 
  //convert the numbers to a number
  handleUserInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      userInput: value,
    })
  }

  //
  handleMathChoice = (e) => {
    const value = e.target.value;
    this.setState({
      mathChoice: value

    })
  }

  handleCalculateButton = (e) => {
    e.preventDefault();
    const { userInput, mathChoice } = this.state;
    this.props.afterSubmit()
    // if (this.state.userInput === "") {
    //   this.setState({
    //     result: <ErrorMessage />
    //   })
    // }
  }


  // errorMessage = (event) => {
  //   event.preventDefault()
  //   if (this.state.userInput === "") {
  //     this.setState({
  //       error: "Invalid input."
  //     })
  //   }
  // }

  render() {
    console.log(this.state)
    return (
      <form >
        <input name="userInput"
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInputChange} />

        <select id="operation"
          name="operation"
          value={this.state.mathChoice}
          onChange={this.handleMathChoice}>

          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={this.handleCalculateButton}>Calculate</button>
      </form>
    );
  }
}

export default Form;
