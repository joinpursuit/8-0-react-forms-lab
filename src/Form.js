import React from "react";
import { useState } from "react";
import "./Form.css";


function Form({setResult}) {
  
 const [input, setInput] = useState("")
 const [selectOption, setSelectOption] = useState("")
 const [error, setError] = useState(false)
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
  if(isNaN(total ) || input === "" || selectOption === "")
  return "Invalid input."
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
    
    const obj = {} 
    //populating obj with key value pair
    // alternative: obj.key 
    // obj[key] = value
    // obj.key = value
     array.forEach(num => {
      if(!obj[num]){
        obj[num] = 1
      }
      else{
        obj[num] += 1
      }
    })

      //console.log(obj)
  
  //loop through object to check for the value that occur the most tiimes
  let value = 0
  let key; 
  for (let thisKey in obj){
    if(obj[thisKey] > value){
      key = thisKey
      value = obj[thisKey]
    }
  }
  return key
  //console.log("key",key)
  
  }
 }



//********* HANDLE SUBMIT ********


 function handleSubmit(event){
  event.preventDefault()
  setResult(calculateResult(input))
if(calculateResult(input) !== "Invalid input."){
  setError(false)
  resetThisForm()
} else {
  setError(true)
}

 }

 function resetThisForm(){
  setInput("")
  setSelectOption("")
 }

 
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
             className = {error ? "error" : null}
             id="values" 
             name="values" 
             type="text" 
             onChange={ (event) => handleTextChange(event)}
             value={input}
             />
      <select 
        className = {error ? "error" : null}
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


