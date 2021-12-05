import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    // initizlize state
    this.state = {
      userInput: "",
      operation: "",
    };
  }

  // invalid input if no input is entered
  // invalid input if entered with invalid input
  // results for sum
  // average
  // mode
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    let numArr = this.state.userInput.split(",").map((str) => Number(str))
    
    console.log(this.state.userInput, this.state.operation);
   
    let result = 0;
    switch (this.state.operation) {
      case "sum":
      result = this.handleSum(numArr)
        break;
      case "average":
      result = this.handleSum(numArr) / numArr.length // average
        break;
      case "mode":
      result = this.handleMode(numArr)
        break;
      default:
        break;
    }
    this.props.handleChangeResult(result)
  };

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value,
    });
  };

   sum
  handleSum = (arr) => {
    let sum = 0
    for(let num of arr) {
      sum += num
    }
    return sum
  };

  // mode
  handleMode = (arr) => {
    let countObj = {}
    
    for(let num of arr) {
      if(countObj[num]) {
        countObj[num] = countObj[num] + 1
      } else {
        countObj[num] = 1
      }
    }
    console.log(Object.keys(countObj))
    let highestValue = 0;
    let highestKey;
    let keys = Object.keys(countObj)
    for(let key of keys) {
      if(countObj[key] > highestValue) {
        highestValue = countObj[key]
        highestKey = key
      }
    }
    return highestKey
  };

  // handleValidation=(arr)=>{
  //   let isValid = true
  //   if(this,state.input === "") {
  //     isValid = false
  //   }
  //   for(let num of numArr) {
  //     if(isNaN(num)) {
  //       isValid = false 
  //     }

  //   }
  // }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onInput={this.handleUserInput}
          value={this.state.userInput}
          id="values"
          name="values"
          type="text"
        />
        <select
          onChange={this.handleOperationChange}
          value={this.state.operation}
          id="operation"
          name="operation"
        >
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
