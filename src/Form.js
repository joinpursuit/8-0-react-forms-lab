import React from "react";
import "./Form.css";
import { useState } from "react"

function Form() {

  //Declaring state variables.
  const [numbers, setNumbers] = useState([])
  const [operation, setOperation] = useState("")
  const [answer, setAnswer] = useState("")
  const [valid, setValid] = useState(true)

  //Create an array of values separated by commas and update state. Error handling if array contains NaN.
  const numberArr = (e) => {
    let arr = []
    arr = e.target.value.split(',').map(el => Number(el))
    setNumbers(arr)
    if(numbers.includes(NaN)){
      setValid(false)
    } else {
      setValid(true)
    }
  }

  //Updates state for select option of operation.
  const handleSelect = (e) => {
    console.log(e.target.value)
    return setOperation(e.target.value)
  }

  //Function for calculating the sum.
  const sumFunction = () => {
    let sum = 0

    for (let i=0; i < numbers.length; i++){
      sum += numbers[i]
    } return sum
  }

  //Function for calculating the average.
  const avgFunction = () => {
    let avg = sumFunction(numbers)/numbers.length
    return avg
  }

  //Function for calculating mode.
  const modeFunction = () => {
    let freq = {}
    let count = 0
    let max = 0

    for (let i=0; i < numbers.length; i++){
      if (freq[numbers[i]]){
        freq[numbers[i]]++
      } else {
        freq[numbers[i]] = 1
      }

      if (freq[numbers[i]] > count){
        max = numbers[i]
        count = freq[numbers[i]]
      }
    }
    return max
  }

  //Function to update answer state after submit. Error handling if operation not selected.
  const handleSubmit = (e) => {
    e.preventDefault()

    if(operation === 'sum'){
      let ans = sumFunction(numbers)
      return setAnswer(ans)
    } else if (operation === 'average'){
      let ans = avgFunction(numbers)
      return setAnswer(ans)
    } else if (operation === 'mode'){
      let ans = modeFunction(numbers)
      return setAnswer(ans)
    } else if (operation === ""){
      setValid(false)
    } 
    
    if (valid === true){
      setNumbers([])
      setOperation("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" className={ valid ? null : 'error' } onChange={numberArr} numbers={numbers}/>
      <select id="operation" name="operation" className={ valid ? null : 'error' } onChange={handleSelect} operation={operation}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
      {
        valid && <p>{answer}</p>
      }
    </form>
  );
}

export default Form;
