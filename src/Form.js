import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      mathChoice: "",
      textInputHasError: false,
      selectHasError: false,
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
    if (userInput === '') {
      this.setState({ textInputHasError: true })
      this.props.hasError() //this is what's invoking the has error property to be true
    }
    if (mathChoice === 'sum') {
      const nums = userInput.split(',').map((num) => Number(num))
      let sum = 0;
      nums.forEach((num) => sum += num)
      this.props.afterSubmit(sum)
      this.setState({ selectHasError: false })

    } else if (mathChoice === 'average') {
      const nums = userInput.split(',').map((num) => Number(num))
      let sum = 0;
      nums.forEach((num) => sum += num)
      this.setState({ selectHasError: false })

      this.props.afterSubmit(sum / nums.length)
    } else {
      this.setState({ hasError: true })
    }
  }

  render() {
    console.log(this.state)
    return (
      <form >
        <input name="userInput"
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInputChange}
          className={this.state.textInputHasError ? 'error' : ''} />


        <select id="operation"
          name="operation"
          value={this.state.mathChoice}
          onChange={this.handleMathChoice}
          className={this.state.selectHasError ? 'error' : ''}>

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
