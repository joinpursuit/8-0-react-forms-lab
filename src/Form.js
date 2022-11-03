import React from "react";
import { useState } from 'react'
import "./Form.css";

function Form() {
  const [selectOption, setSelectOption] = useState("");
  const [calculation, setCalculation] = useState([]);
  const calcValue = []

  function resetForm() {
    setSelectOption('')
  }

  function handleSelectChange(event) {
    console.log('Select Option been changed to:',event.target.value)
    setSelectOption(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    console.log('Input given: ',event.target.values.value,' With a select option of: ',selectOption)

    const input = event.target.values.value
    const operator = selectOption

    let sumAcc = 0
    let average = 0
    let mode = 0

    const splitInputArr = input.split(',')
    console.log(splitInputArr)


    if(operator === 'sum') {
      for (var i in splitInputArr) {
      sumAcc += Number(splitInputArr[i])
    }
    console.log('Sum: ',sumAcc)
    }

    if(operator === 'average') {
      // first get total of all numbers
      let sum = 0
      let divisor = splitInputArr.length
      for (var i in splitInputArr) {
        sum += Number(splitInputArr[i])
      }
      average = sum / divisor
      console.log('Average: ',average)
    }

    
   
    
    
    resetForm();
  }


  return (
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" />
      <select onChange={handleSelectChange} id="operation" name="operation">
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
