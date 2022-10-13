import React from "react";
import { useState } from "react";
import "./Form.css";


function Form({result, setResult}) {
  // Declare various slice of state
  // user input state
  const [userInput, setUserInput] = useState('')
  
  // select/option state
  const [selectOption, setSelectOption] = useState("")

  // Declare variables for elements on page select/input
  const select = document.querySelector(`select`)
  const input = document.querySelector(`input`)
 
  // Functions
function handleUserInput(e) {
  const value = e.target.value
  setUserInput(value)
}

function convertUserInput(input, option) {
  const arr = input.split(`,`)
  let answer = 0;
  let total = arr.reduce((num, acc )=> 
     (+num) + (+acc)
    ,answer)
    
 // conditional for invalid input
  if(isNaN(total) || input === `` || option === ``){
    return 'Invalid input.'
    }
    
// conditionals for option choice
  if(option === `sum`){
   return total
  }
  if(option === `average`) {
    const avg = total / arr.length
    return avg
  }
  if(option === `mode`) {
    const obj = {}
    arr.map( num => {
      if(!obj[num]){
        obj[num] = 1
      }
      else {
        obj[num] += 1
      }
    })
    let mostNum = 0
    let mostKey;
    for ( let key in obj){
      if(obj[key] > mostNum){
        mostNum = obj[key]
        mostKey = key
      }
    }
    return mostKey
  }
}

// reset form input functions
function reset() {
  setUserInput(``)
  setSelectOption(``)
}

  function handleSubmit(e) {
    e.preventDefault()
    setResult(convertUserInput(userInput,selectOption))
    if(convertUserInput(userInput,selectOption) !== `Invalid input.`){
      select.classList.remove(`error`)
      input.classList.remove(`error`)
      reset()
    }
    else{
      select.classList.toggle(`error`)
      input.classList.toggle(`error`)
    }
    
  }
  return (
    <form onSubmit={(event) => {handleSubmit(event)}}>
      <input 
      id="values" 
      name="values" 
      type="text"
      value= {userInput} 
      onChange={(event) => {handleUserInput(event)}  }/>

      <select 
      id="operation" 
      name="operation"
      value={selectOption}
      onChange={(event) => {setSelectOption(event.target.value)}}>
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
