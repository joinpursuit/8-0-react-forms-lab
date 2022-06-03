import React from "react";
import "./Form.css";
import {useState} from'react'
 
const Form = ({setResult}) => {

  const[textInput, setTextInput] =useState('')
  const[selectedOperation, setSelectedOperation] =useState('')
  const[className, setClassName] =useState('')

  const handleTextInput = (event) =>{
    const {value} = event.target;
    setText
  }

  const handleArray = (event)=> {
   const  { value } = event.target
   setNumArr(value.split(",").map(i => i * 1).reduce((a,b)=>a+b))
   console.log(numArr)
  }

    return (
      <form>
        <input id="values" name="values" type="text" 
        onChange = {handleArray}
        />
        <select id="operation" name="operation">
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
