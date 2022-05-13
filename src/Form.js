import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '',
      operation: '',
      input: '',
      error:'',
      numbers: [],
    };
  }

  getSum = (arr) => {
    let sum = 0;
    for(let num of arr){
      sum += num;
    }
    return sum
  }
  
  // make a count countObj to keep track of how many of each num exists, then compare the values
  getMode = (arr) => {
    let countObj = {};
    for(let num of arr){
      if(countObj[num]){
        countObj[num]++;
      }else{
        countObj[num] = 1;
      }
    }

    let keys = Object.keys(countObj);
    let highestValue = 0;
    let highestKey;
    for(let key of keys){
      if(countObj[key] > highestValue){
        highestValue = countObj[key];
        highestKey = key;
      }
    }
    return highestKey
  }
  
  handleFormSubmit = (event) => {
    const { operation, input} = this.state;
    event.preventDefault();

    let arr = this.state.input.split(',').map((num) => Number(num));

    if (input === '' || input !== Number) {
      this.setState({
        error: "Invalid input."
      })
  };
if (operation === "sum") {
  this.setState({
    result: this.getSum(arr)

  })
}

if (operation === 'average') {
  this.setState({
    result: this.getSum(arr)/arr.length
  })
}
}

// inputhandler - whatever user types in becomes the new value of this.state.input
inputHandler = (event) => {
  this.setState({
    input: event.target.value
  })
}

operationHandler = (event) => {
  this.setState({
    operation: event.target.value
  })
}

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.inputHandler} id="values" name="values" type="text" />
        <select onChange={this.operationHandler} id="operation" name="operation">
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
