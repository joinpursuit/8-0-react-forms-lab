import React from 'react';
import "./Form.css";
import {useState} from 'react'

function Form() {
  const [values, setValues] = useState('')
  const [select, setSelect] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setValues(value)
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    // const values = e.target.values.value
    
    if (!select){
      alert ("Invalid input")
    } else return sum
    //DONT LEAVE LIKE THIS ITS A TEST
  }

  function sum (values) {
    return values.split(',').reduce((a, b) => Number(a + b))
  }
  //MAYBE MAKE A SWITCH STATEMENT?

  return (
    <form onSubmit={handleSumbit}>
      <input id="values" name="values" type="text" onChange={handleChange} value={values}/>
      <select id="operation" name="operation" onChange={(e) => {setSelect(e.target.value)}} >
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
