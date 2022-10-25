import React from "react";
import "./Form.css";

function Form({handleSelectChange, handleSubmit, handleNumbersChange}) {
  return (
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" onChange={handleNumbersChange}/>
      <select id="operation" name="operation" onChange={handleSelectChange}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit" >Calculate</button>
    </form>
  );
}

export default Form;
