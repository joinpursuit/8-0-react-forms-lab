import React from "react";
import "./Form.css";
import {useState} from "react"


function Form() {

const [array , setArray] = useState([])
const [selectOption , setSelectOption] = useState("")

const handleChange = (event) => {
setArray(event.target.value.split(","))
}

function calculateValue(){ 
  let sum = 0 
    if(selectOption === "sum"){
      array.forEach((num) => {
        sum += Number(num)
     })
    }
   if(selectOption === "average"){
    array.forEach((num) => {
     sum += Number(num)
     return ((sum / array.length))
    })
  }
     
   document.querySelector("#number").innerHTML = sum === "number" ? sum : "Invalid input."
}

  function reset(){
    setArray("")
    setSelectOption("")
  }

  function handleSubmit(event) {
    event.preventDefault()
    calculateValue()
    reset()
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
      id="values" 
      name="values" 
      type="text" 
      value={array}
      onChange={handleChange}
      />
      <select id="operation" name="operation" value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
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
