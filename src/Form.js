import React from "react";
import "./Form.css";

class Form extends React.Component {
  // Add constructor
    // initialize state for: numbers, typeOfCalc, result
  constructor() {
    super();
    this.state = {
      numbers: '',
      typeOfCalc: ''
    }
  }

  // Create 1 method or multiple methods for 
    // Method path - one method containing conditional statements to handle sum, average, mode
    // Multiple Methods - create a method for each calculation
      // Within each of these methods we will have to loop through the array according to the selected calculation
        // Sum calculation:
        // Average calculation:
        // Mode calculation:
  
  // Create handleNumberInput - to add numbers into the state key of Numbers
  handleNumberInput = (event) => {
    this.setState({
      numbers: event.target.value
    })
    // console.log(event.target.value);
  }


  // Create handleTypeOfCalcChange - to know what calculation was selected
  handleTypeOfCalcChange = (event) => {
    this.setState({
      typeOfCalc: event.target.value
    })
  }

  // Create handleCalculateButton for submit button
    // requires event.preventDefault()
    // Error checking is also needed for invalid inputs
    handleCalculateSubmit = (event) => {
      event.preventDefault();

      let { numbers, typeOfCalc } = this.state;
      let strNumbersArr = numbers.split(',')
      let numbersArr = strNumbersArr.map((num) => {
        return Number(num);
      });

      let isValid = true;

      if (this.state.numbers === '') {
          isValid = false;
      }
  
      if(this.typeOfCalc === '') {
          this.props.handleChangeResult('Invalid Operation')
      }
  
      for(let num of numbersArr) {
          if (isNaN(num)) {
              isValid = false;
          }
      }
  
      if (!isValid) {
          this.props.handleChangeResult('Invalid input.');
          return;
      }

      let result = 0;
      if(typeOfCalc === 'sum') {
        for(let i=0; i<numbersArr.length; i++){
          result += numbersArr[i]
        }
      } else if (typeOfCalc === 'average') {
          let sum = 0
          for(let i=0; i<numbersArr.length; i++){
            result = (sum += numbersArr[i])/numbersArr.length
          }
      } else if (typeOfCalc === 'mode') {
        let numCount = {};
        for(let i=0; i<numbersArr.length; i++){
          if(numCount[numbersArr[i]]){
            numCount[numbersArr[i]] += 1
          } else {
            numCount[numbersArr[i]] = 1
          }
        }

        let keys = Object.keys(numCount);
        let highestValue = 0
        let highestKey;
        for(let key of keys) {
            if(numCount[key] > highestValue) {
              highestValue = numCount[key]
              highestKey = key;
            }
        }
        result = highestKey
      }
      this.props.handleChangeResult(result)
    }

  // Embed appropriate methods and states into JSX below
    // button tag will have handleSubmit
  
  
  render() {
    return (
      <form onSubmit={this.handleCalculateSubmit}>
        <input id="values" name="values" type="text" value={this.state.numbers} onChange={this.handleNumberInput}/>
        <select id="operation" name="operation" value={this.state.typeOfCalc} onChange={this.handleTypeOfCalcChange}>
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
