import React from "react";
import { useState } from "react";
import "./Form.css";


function Form({setResult}) {
  
 const [input, setInput] = useState("")
 const [selectOption, setSelectOption] = useState("")
//  const collect = require('collect.js')

 const handleTextChange = (event) => {
  setInput(event.target.value)
 }
 
 function calculateResult(input){
    let array = input.split(",")
    console.log(array)
    // let total = 0
    let total = array.reduce((acc, currentArr) => {
        return Number(acc) + Number(currentArr)
      }, 0)
    
  if(selectOption === "sum"){
     return total
    // array.reduce((acc, currentArr) => {
    //   return Number(acc) + Number(currentArr)
    // }, 0)
  } else 

   if(selectOption === "average"){
    return total/array.length
   }
    // let total = 0
    // let avg
    // for( let element of array){
    //  total += Number(element)
    //  avg = total/array.length
    //  console.log(avg)
    
    else if (selectOption === "mode"){
    // array = [1, 1, 3, 3, 3, 5, 5, 6];
    // const collection = collect(array);
    // const mode_val = collection.mode();
    // console.log(mode_val);
    console.log("MODE")
   }
  }

 function handleSubmit(event){
  event.preventDefault()
  setResult(calculateResult(input))
  // setInput('')
 }
 
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input id="values" 
             name="values" 
             type="text" 
             onChange={ (event) => handleTextChange(event)}
             value={input}
             />
      <select 
        id="operation" 
        name="operation"
        value={selectOption}
        onChange={(e) => setSelectOption(e.target.value)}
        >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
  }
export default Form


