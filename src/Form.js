import React, { useState } from "react";
import "./Form.css";

const Form = () => {
 
  const [input, setInput] = useState("")
  const [select, setSelect] = useState("")
  const [calculate, setCalculate] = useState("")

    const handleChange = (event) => {
      event.preventDefault()
      setInput(event.target.value)
    }
    
    const handleSelect = (event) => {
      event.preventDefault()
      const { value } = event.target
      setSelect(value)
      
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
      const arr = input.split(",")
      // console.log(arr)
      let total = 0
      if(select === "sum"){
        arr.forEach((num) => {
          total += Number(num)
          setCalculate(total)
        })
      } else if(select === "average"){
          arr.forEach((num) => {
            total += Number(num)
            setCalculate(total / arr.length)
          })
      } else if(select === "mode"){
        let count = {}
        let compare = 0
        for(let i = 0; i < arr.length; i++){
            count[arr[i]] = (count[arr[i]] || 0)+ 1
          if(count[arr[i]] > compare){
            compare = count[arr[i]]
            setCalculate(arr[i])
          }
        }
      } 

    }

    return (
      <div>
      <form onSubmit={ handleSubmit}>
        <input id="values" name="values" type="text" onChange={handleChange} value={input}/>
        <select id="operation" name="operation" onChange={ handleSelect } value ={ select }>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
        <p>{ Number.isNaN(calculate) ? "Invalid input." : calculate }</p>
      </form>
      </div>
    );
}

export default Form;
