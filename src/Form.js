import React, { useState } from "react";
import "./Form.css";


function Form() {

const [userInput, setUserInput] = useState("")

const [userSelect, setUserSelect] = useState("")

  function handleInputChange (e){
setUserInput(e.target.value)
  }

function handleSelectChange (e){
  setUserSelect(e.target.value)
}

 function handleSubmit (e){
if (userSelect === "sum"){

}
 }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} id="values" name="values" type="text" value={userInput} />
      <select id="operation" name="operation" onChange={handleSelectChange} value={userSelect}>
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
