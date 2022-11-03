import React from "react";
import { useState } from 'react'
import "./Form.css";

function Form() {
  const [selectOption, setSelectOption] = useState("");
  const [calculation, setCalculation] = useState([]);
  const [input, setInput] = useState([])
  const [error, setError] = useState(false)
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

    if (selectOption === ""){
      setError(true)
      resetForm()
    } else {
    console.log('Input given: ',event.target.values.value,' With a select option of: ',selectOption)

    const input = event.target.values.value
    const operator = selectOption

    let sumAcc = 0
    let average = 0
    

    const splitInputArr = input.split(',')
    console.log(splitInputArr)

    if (operator === 'sum') {

      for (var i in splitInputArr) {
      sumAcc += Number(splitInputArr[i])
    }
    console.log('Sum: ',sumAcc)
    setCalculation(sumAcc)
    resetForm()

    } 

    else if(operator === 'average') {

      let sum = 0
      let divisor = splitInputArr.length
      for (var i in splitInputArr) {
        sum += Number(splitInputArr[i])
      }
      average = sum / divisor
      console.log('Average: ',average)
      setCalculation(average)

    } 

    else if(operator === 'mode') {
      let array = splitInputArr
      
  let object = {}

  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      // increment existing key's value
      object[array[i]] += 1
    } else {
      // make a new key and set its value to 1
      object[array[i]] = 1
    }
  }

  // assign a value guaranteed to be smaller than any number in the array
  let biggestValue = -1
  let biggestValuesKey = -1

  // finding the biggest value and its corresponding key
  Object.keys(object).forEach(key => {
    let value = object[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestValuesKey = key
    }
  })

  setCalculation(biggestValuesKey)

}
  }
  }
 // end of submit


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
      <div>
        { calculation > 0 
          ? <h3>Calculation: {calculation} </h3>
          : null
        }
        { error 
          ? <h3>Invalid input.</h3>
          : null
        }
      </div>
    </form>
  );
}


export default Form;
