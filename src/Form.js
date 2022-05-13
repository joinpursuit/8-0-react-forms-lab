import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [],
      result: '',
      operation: '',
      input: '',
    };
  }

  validInputChecker = () => {
    const { numbers, operation } = this.state;
    if (numbers.length === 0) {
      return false;
    } else if (
      numbers.some((num) => {
        return Number.isNaN(num);
      })
    ) {
      return false;
    } else if (
      operation !== 'sum' &&
      operation !== 'average' &&
      operation !== 'mode'
    ) {
      return false;
    }
    return true;
  };

  getSum = (arr) => {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };

  // make a countObj to keep track of how many of each num exists, then make an array to find the key with hightest value
  getMode = (arr) => {
    let countObj = {};
    for (let num of arr) {
      if (countObj[num]) {
        countObj[num]++;
      } else {
        countObj[num] = 1;
      }
    }
    // at this point, countObj is made up of the digits of user input as keys and the # of times they appear as their values.
    let newArr = Object.entries(countObj);
    let highest = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i][1] > highest[1]) {
        highest = newArr[i];
      }
    }
    return highest[0];

    // alternative
    // let keys = Object.keys(countObj);
    // let highestValue = 0;
    // let highestKey;
    // for(let key of keys){
    //   if(countObj[key] > highestValue){
    //     highestValue = countObj[key];
    //     highestKey = key;
    //   }
    // }
    // return highestKey
  };

  operationHandler = (event) => {
    const { value } = event.target;
    this.setState({
      operation: value,
    });
  };

  inputHandler = (event) => {
    const { value } = event.target;
    // take apart the numbers inputted and put them back into an array in #form
    const arr = value.split(',').map((num) => Number(num));
    this.setState({
      numbers: arr,
      input: value,
    });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    const { operation, numbers } = this.state;

    if (!this.validInputChecker()) {
      this.setState({
        result: 'Invalid input.',
        input: '',
        operation: '',
      });
    } else {
      if (operation === 'sum') {
        this.setState({
          result: this.getSum(numbers),
          input: '',
          operation: '',
        });
      } else if (operation === 'average') {
        this.setState({
          result: this.getSum(numbers) / numbers.length,
          input: '',
          operation: '',
        });
      } else {
        this.setState({
          result: this.getMode(numbers),
          input: '',
          operation: '',
        });
      }
    }
  };

  render() {
    const { result, input, operation } = this.state;
    return (
      <>
        <form onSubmit={this.formSubmitHandler}>
          <input
            onChange={this.inputHandler}
            id="values"
            name="values"
            type="text"
            value={input}
          />
          <select
            onChange={this.operationHandler}
            id="operation"
            name="operation"
            value={operation}
          >
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <p>{result}</p>
      </>
    );
  }
}

export default Form;
