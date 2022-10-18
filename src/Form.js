import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [userInput, setUserInput] = useState("");
  const [selection, SetUserSelection] = useState("");
 
  const [finalResult, setFinalResult] = useState("")

 
  let result;
  let obj = {};

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const handleUserSel = (e) => {
    SetUserSelection(e.target.value);
  };

  function mode(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }

  const form = (e) => {
    e.preventDefault();
    let inputArr = userInput.split(',')
    let isValid = true
    for(let input of inputArr) {
      if (isNaN(Number(input))) {
        isValid = false
        break;
      }
    }
    if (!selection || !userInput || !isValid) {
      result  = "Invalid input.";
      
    }else if (selection === "sum") {
      result = 0
     inputArr.forEach((input) => {
        result += Number(input);
      });
     
    }
    else if (selection === "average") {
      result = inputArr.reduce((a, b) => a + b, 0) / inputArr.length;
      console.log(result);
    }
    else if  (selection === "mode") {
      result =  mode(inputArr)
    }
    console.log(result);
    setFinalResult(result)
  };

  return (
    <form onSubmit={form}>
      <input
        type="text"
        id="values"
        name="values"
        value={userInput}
        onChange={handleUserInput}
      />

      <select
        id="operation"
        name="operation"
        value={selection}
        onChange={handleUserSel}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>

      <button type="submit">Calculate</button>
      <p>{finalResult}</p>
    </form>
  );
}
//export form here ! 
export default Form;