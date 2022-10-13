import React from "react";
import { useState } from "react";
import "./Form.css";

function Form({setResult }) {
  const [arr, setArr] = useState([])
  const [select, setSelect] = useState('')

  const addNumbers = (e) => {
    setArr(e.target.value.split(",").map((e) => Number(e)))
  }

  const submitForm = (e) => {
    let values = e.target.values.value;
    const operation = e.target.operation.value;
    e.preventDefault()
    setResult(numbers(arr, select))
    if(!values ||!operation){
      return setResult('Invalid input.')
    }
  }

  const numbers = () => {
    let result = arr.reduce((a, b) =>{return (a+=b)}, 0)
    if(select === "sum"){
       return result
    }if(select === "average"){
       return result / arr.length
    }else if (select === "mode"){
     const obj = {}
      let max = 0, count = 0;
      for(let i = 0; i < arr.length; i++) {   
      if(obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
      if(count < obj[arr[i]]) {
        max = arr[i];
        count = obj[arr[i]];
      }
    }
        return max
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
