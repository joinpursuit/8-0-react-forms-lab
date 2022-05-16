import React from 'react';
import './Form.css';

class Form extends React.Component {
  
  constructor() {
    super();
    this.state = {
      numbers: '',
      operations: '',
    };
  }

  numberInput = (event) => {
    this.setState({
      numbers: event.target.value,
    });
  };

  // Create handleSelected - to know what calculation was selected
  handleSelected = (event) => {
    this.setState({
      operations: event.target.value,
    });
  };

  // Create calculateSubmit for submit button
  calculateSubmit = (event) => {
    event.preventDefault();

    let { numbers, operations } = this.state;
    let strNumbersArr = numbers.split(',');
    let numbersArray = strNumbersArr.map((num) => {
      return Number(num);
    });

    let isValid = true;

    if (this.state.numbers === '') {
      isValid = false;
    }

    if (this.operations === '') {
      this.props.handleChangedResult('Invalid Operation');
    }

    for (let num of numbersArray) {
      if (isNaN(num)) {
        isValid = false;
      }
    }

    if (!isValid) {
      this.props.handleChangedResult('Invalid input.');
      return;
    }

    let result = 0;
    if (operations === 'sum') {
      for (let i = 0; i < numbersArray.length; i++) {
        result += numbersArray[i];
      }
    } else if (operations === 'average') {
      let sum = 0;
      for (let i = 0; i < numbersArray.length; i++) {
        result = (sum += numbersArray[i]) / numbersArray.length;
      }
    } else if (operations === 'mode') {
      let numberCount = {};
      for (let i = 0; i < numbersArray.length; i++) {
        if (numberCount[numbersArray[i]]) {
          numberCount[numbersArray[i]] += 1;
        } else {
          numberCount[numbersArray[i]] = 1;
        }
      }

      let keys = Object.keys(numberCount);
      let highestValue = 0;
      let highestKey = " ";
      for (let key of keys) {
        if (numberCount[key] > highestValue) {
          highestValue = numberCount[key];
          highestKey = key;
        }
      }
      result = highestKey;
    }
    this.props.handleChangedResult(result);
  };

  render() {
    return (
      <form onSubmit={this.calculateSubmit}>
        <input
          id='values'
          name='values'
          type='text'
          value={this.state.numbers}
          onChange={this.numberInput}
        />
        <select
          id='operation'
          name='operation'
          value={this.state.operations}
          onChange={this.handleSelected}
        >
          <option value=''></option>
          <option value='sum'>sum</option>
          <option value='average'>average</option>
          <option value='mode'>mode</option>
        </select>
        <button type='submit'>Calculate</button>
      </form>
    );
  }
}
export default Form;
