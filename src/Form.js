import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      operation: '',
      inputValue: '',
      result: '',
      errors: '',
    };
  }

  calculateSumModeAverage = (numberArr, operation) => {
    if (!operation.length || !numberArr.length) {
      return 'Invalid input.';
    }
    if (operation === 'sum') {
      this.setState({ result: numberArr.reduce((acc, curr) => acc + curr, 0) });
     
    } else if (operation === 'average') {
      this.setState({
        result:
          numberArr.reduce((acc, curr) => acc + curr, 0) / numberArr.length,
      });
      
    } else {
      const modeObj = numberArr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
      let mode;
      let highestCount = -Infinity;

      for (const prop in modeObj) {

        if (modeObj[prop] > highestCount) {
          mode = prop;
          highestCount = modeObj[prop];
        }
      }
      this.setState({ result: mode });
   
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { numbers, operation } = this.state;
    
    const numberArr = numbers.map((ele) => {
      return Number(ele);
    });

    if (!numbers.length ||  (/[^\d,]/g).test(numbers) || !operation.length) {
      const resultValue = this.calculateSumModeAverage([], '');
      this.setState({
        errors: 'error',
        result: resultValue,
      });
    } else {
      this.calculateSumModeAverage(numberArr, operation);
      this.setState({ inputValue: '', operation: '', errors: '' });
      event.target.reset();
    }
  };

  handleSelectChange = (event) => {
    const { value } = event.target;
    this.setState({ operation: value });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    let numArr = value.split(',').map((item) => {
      return Number(item);
    });
    this.setState({
      numbers: numArr,
      inputValue: value,
    });
  };

  render() {
    
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          id='values'
          name='values'
          type='text'
          value={this.state.inputValue}
          className={this.state.errors}
          onChange={this.handleInputChange}
        />
        <select
          id='operation'
          name='operation'
          className={this.state.errors}
          onChange={this.handleSelectChange}
          value={this.state.operation}
        >
          <option value=''></option>
          <option value='sum'>sum</option>
          <option value='average'>average</option>
          <option value='mode'>mode</option>
        </select>
        <button type='submit'>Calculate</button>
        <p>{this.state.result}</p>
      </form>
    );
  }
}

export default Form;
