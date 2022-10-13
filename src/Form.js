import React from "react";
import "./Form.css";
import {useState} from "react"


function Form() {

const [array , setArray] = useState([])
const [selectOption , setSelectOption] = useState("")

const handleChange = (event) => {
setArray(event.target.value.split(","))
}

let sum = 0 

function calculateValue(){ 
    if(selectOption === "sum"){
      array.forEach((num) => {
       sum += Number(num)
     })
    }
   else if(selectOption === "average"){
      let av = array.reduce((pv , av) => {
       return (pv + Number(av)) 
      }, 0)
     sum = av / array.length
     }

  else if (selectOption === "mode"){
      let object = {}

  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
      object[array[i]] += 1
    } else {
      object[array[i]] = 1
    }
  }
  let biggestValue = -1
   sum = -1

  Object.keys(object).forEach(key => {
    let value = object[key]
    if (value > biggestValue) {
      biggestValue = value
     sum = key
    }
    return sum
  })
}

   document.querySelector("#number").innerHTML = isNaN(sum)  ? "Invalid input" : sum
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
