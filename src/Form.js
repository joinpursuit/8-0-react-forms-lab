import React from 'react';
import "./Form.css";
import {useState} from 'react'
//Paired with Natasha

function Form({setResult}) {
  //Might need result
  const [select, setSelect] = useState('')
  const [arr, setArr] = useState([])

  const handleChange = (e) => {
    setArr(e.target.value.split(",").map((e) => Number(e)))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult(numbers(arr, select))
    // if(!numbers(arr, select)){
    //   return 'Invalid input.'
    // }
   
  }

  const numbers = () => {
    let result = arr.reduce((a, b) =>{return (a+=b)}, 0)
    if(select === "sum"){
      return result 
    }if (select === "average"){
      return result / arr.length
    }if (select === "mode"){
       Math.mode(arr)
      //Doesn't work
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" onChange={handleChange} value={arr}/>
      <select id="operation" name="operation" value={select} onChange={(e) => {setSelect(e.target.value)}} >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button onChange={handleSubmit}type="submit">Calculate</button>
    </form>
  );
}

export default Form;
