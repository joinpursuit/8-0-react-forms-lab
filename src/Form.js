import React from "react";
import { useState } from "react"
import "./Form.css";

function Form({setResult}) {
// start with input 
// Declare a state for an input which will hold the value 
// setUserInput to alter it 
// useState is storing the intial value which is a empty string
const [userInput, setUserInput]= useState("")
 //console.log(userInput)

const[userOptions, setUserOptions]= useState("")
//console.log(userOptions)

// Create a function to have the userinput(string) convert it into an array of numbers so we are going to have to use the 
//.split("whatever element/symbol inside") method which will turn the string into an array

function doMath(string, option){
  let arrayOfNums = string.split(",")
  let total = arrayOfNums.reduce((acc, num2) =>{
  //console.log(acc,num2)
    return parseInt(acc) + parseInt(num2)
},0)

if(string === "" || option === "" || isNaN(total)){
  return "Invalid input."
} 


  //console.log(total)
 
if (option === "sum"){
return total
} else if (option === "average"){
return total/arrayOfNums.length
} else if (option === "mode"){
// create an object
  const obj = {}

  arrayOfNums.forEach((number) =>{
    if (!obj[number]){
      obj[number] = 1
    } else {
      obj[number] += 1
    }
  })

  let mode = 0
  let keyValue = -Infinity

  for(let key in obj){
    const value = obj[key]
    if (value>mode){
      mode=value
      keyValue=key
    }
  }
return Number(keyValue)


}
} 
doMath(userInput,userOptions)

function handleSubmit (e){

  e.preventDefault()
  setResult(doMath(userInput, userOptions))
  //console.log(doMath(userInput, userOptions))
}

  return (
    <form onSubmit= {(event)=> {handleSubmit(event)}}>
      {/* set value to userInput because we declared it */}
      {/* !!!!!Use onChange(eventListener) because we need to call react to give react control!!!!!*/}
      <input 
      id="values" 
      name="values" 
      type="text" 
      value={userInput}
  // basically the onChange (eventListener) is going to update the value of the user input by receiving the e.target.value which is the value the user inputted in the textbox.
      onChange ={(e)=>{setUserInput(e.target.value)}} />
      <select id="operation" 
      name="operation"
      value={userOptions} 
      onChange={(e)=>{setUserOptions(e.target.value)}}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

// Import state 
// button does not get an eventlistener because it's inside the form
// the eventlistner has to be placed on the form because all of the information is inside of the form tags



export default Form;
