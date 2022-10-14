import React from "react";
import "./Form.css";
import { useState } from 'react';

function Form({ setResult }) {
  const [input, setInput] = useState('')
  const [selectOption, setSelectOption] = useState('')
  const [error, setError] = useState(false)
  
  function doMath(userInput, userOption){
    let value = input.split(',')
    let num = 0
    let result = value.reduce((cur, acc) => {
      return Number(cur) + Number(acc)
    }, num)

    if (userInput === '' || userOption === '' || isNaN(result)){
      return 'Invalid input.'
    }

    if (userOption === 'sum'){
      return result
    }else if (userOption === 'average'){
      return result / value.length
    }else if (userOption === 'mode'){
      let object = {}
      let occ = 0
      let xKey
    
    value.forEach((i) => {
      if(!object[i]) {
        object[i] = 1;
      }else {
        object[i] += 1
      }
    });
    
      
      for (let key in object){
        if (object[key] > occ){
          occ = object[key]
          xKey = key;
        }
      }
      return xKey;
    }
  }

  function reset(){
    setInput('')
    setSelectOption('')
  }
    function makesubmission(e){
      e.preventDefault()
      setResult(doMath(input, selectOption));

      if (doMath(input, selectOption) !== "Invalid input."){
        reset()
        setError(false)
    } else{
      setError(true)
    }
  }
  
  return (
    <form onSubmit={(event) => makesubmission(event)}>
      <input 
        className={error ? 'error' : null}
        onChange={(e) => setInput(e.target.value)} 
        id="values" 
        name="values" 
        type="text"
        value={input}
        
      />
      <select
        className={error ? 'error' : null}
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
        id="operation" 
        name="operation">

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
