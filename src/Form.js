import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [inputValue, setInputValue] = useState('')
  const [operation, setOperation] = useState('')

  const sum = (numbersArray) => {
    const result = numbersArray.reduce((current, acc) => current + acc, 0)

    return result
  }

  const average = (numbersArray) => {
    const resultSumAve = numbersArray.reduce((current, acc) => current + acc, 0)
    const resultAve =  resultSumAve / numbersArray.length
    
    return resultAve
  }

  const mode = (numbersArray) => {
    const counter = {}
    let max = 0
    let mode = null

    numbersArray.forEach(number => {
      if (!counter[number]) {
        counter[number] = 1
      } else {
        counter[number] += 1
      }
    })

    const arrCounter = Object.entries(counter)

    arrCounter.forEach((keyPars) => {
      const key = keyPars[0]
      const value = keyPars[1]

      if (value > max) {
        mode = key
        max = value
      }
    })
    
    return mode
  }
  
  const calculate = (event) => {
    event.preventDefault()

    const numberInput = inputValue.split(',').map(n => Number(n)) 
    
    const isInvalid = !inputValue.length || numberInput.some(n => Number.isNaN(n))

    if (isInvalid) {
      setResult(' Invalid input.')
      return  
    }

    let total = 0
    
    switch (operation) {
      case "sum":
        total = sum(numberInput)
        break;
      case "average":
        total = average(numberInput)
        break;
      case "mode":
        total = mode(numberInput)
        break
      default:
        break;
    }

    setResult(total)
  }

  return (
    <form onSubmit={(event) => calculate(event)}>
      <input onChange={(event) => setInputValue(event.target.value)} id="values" name="values" type="text" />
      <select onChange={(event) => setOperation(event.target.value)} id="operation" name="operation">
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
