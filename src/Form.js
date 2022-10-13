import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [arr, setArr] = useState([])
  const [select, setSelect] = useState('')

  const addNumbers = (e) => {
    setArr(e.target.value.split(",").map((e) => Number(e)))
  }

  const submitForm = (e) => {
    e.preventDefault()
    setResult(numbers(arr, select))
    if(!numbers(arr, select)){
      return 'Invalid input.'
    }
   
  }



  const numbers = (option) => {
    console.log(option)
if (isNaN(option)) {
  console.error('Invalid input.');
}
    let result = arr.reduce((a, b) =>{return (a+=b)}, 0)

    if(select === "sum"){
       return result
    }if(select === "average"){
       return result / arr.length
    }else if (select === "mode"){
      return Math.mode(arr)
    }
  }
  return (
    <form onSubmit={submitForm}>
      <input id="values" name="values" type="text" onChange={addNumbers} value={arr}/>
      <select id="operation" name="operation" value={select} onChange={(e) => {setSelect(e.target.value)}} >
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
