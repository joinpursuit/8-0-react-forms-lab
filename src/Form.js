import React, { useState } from "react";
import "./Form.css";

function Form({setSomeState}) {
 // separated reference to the comma separated function
const [separated, setSeparated] = useState("")
//selectInput for the selected 
const [selectInput, setSelectInput] = useState("")


function operationHandler() {
  // Turns the string into an arr 
  const removeComma = separated.split(",");
  console.log(removeComma)
  // created a variable and used reduce to add up all values in the arr to eq
let total = 0

if (selectInput === "sum"){
  total = removeComma.reduce((a,b) => Number(a) + Number(b))
} 
if(selectInput === "average"){
  total = removeComma.reduce((a,b) => Number(a) + Number(b)) / removeComma.length
}
if(selectInput === "mode"){
  let obj = {}

  for (let i = 0; i < removeComma.length; i++) {
    if (obj[removeComma[i]]) {
      // increment existing key's value
      obj[removeComma[i]] += 1
    } else {
      // make a new key and set its value to 1
      obj[removeComma[i]] = 1
    }
  }

  // assign a value guaranteed to be smaller than any number in the array
  let biggestValue = -1
  let biggestValuesKey= -1

  // finding the biggest value and its corresponding key
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestValuesKey = key
    }
  })
  return biggestValuesKey
}
console.log(total)
return total;

}

function calculatedSubmission(e){
e.preventDefault();
setSomeState(operationHandler())

if(!selectInput|| !separated){
setSomeState("Invalid input.")
}
}


  return (
    <form onSubmit={calculatedSubmission}>
      <input 
      id="values" 
      name="values" 
      type="text" 
      onChange={(e) => setSeparated(e.target.value)}
      value={separated}
      />
      <select 
      id="operation" 
      name="operation"
      onChange={(e) =>setSelectInput(e.target.value)}
      value={selectInput}
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

export default Form;
