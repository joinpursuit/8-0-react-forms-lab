import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
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

  getMode = (arr) => {
    let countObj = {};
    for (let num of arr) {
      if (countObj[num]) {
        countObj[num]++;
      } else {
        countObj[num] = 1;
      }
    }
    let keys = Object.keys(countObj);
    let highestValue = 0;
    let highestKey;
    for (let key of keys) {
      if (countObj[key] > highestValue) {
        highestValue = countObj[key];
        highestKey = key;
      }
    }
    return highestKey;
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
    let { input, numbers, operation, result } = this.state;
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form
          input={input}
          numbers={numbers}
          operation={operation}
          inputHandler={this.inputHandler}
          operationHandler={this.operationHandler}
          formSubmitHandler={this.formSubmitHandler}
        />
        <section id="result">
          <p>{result}</p>
        </section>
      </main>
    );
  }
}

export default App;
