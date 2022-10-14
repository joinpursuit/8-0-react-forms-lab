import { useState } from "react";
import React from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  const updateValue = (e) => {
    setValue([e.target.value]);
  };
  
  const optionChange = (e) => {
    if (e.target.value === "sum") {
      setSelectOption("sum");
    } else if (e.target.value === "average") {
      setSelectOption("average");
    } else {
      setSelectOption("mode")
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if(value.length >= 1 && setSelectOption === "sum"){
      return (<p>{}</p>)
    } else if(value.length >= 1 && setSelectOption === "average"){
      return (<p>{}</p>)
    } else if(value.length >= 1 && setSelectOption === "mode"){
      return (<p>{}</p>)
    }  else {
      alert("Invalid input.")
    } 
    e.reset();
  };

  return (
    <form>
      <input
        onChange={updateValue}
        id="values"
        name="values"
        type="text"
        value={value}
      />
      <select onChange={optionChange} id="operation" name="operation" value={selectOption}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button onSubmit={submitForm} type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Form;
