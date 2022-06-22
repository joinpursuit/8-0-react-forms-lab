import React, { useState } from "react";
import "./Form.css";

const Form = ({setResult}) => {
  const [inputValue, setInputValue] = useState("");

  const [select, setSelect] = useState("");
  const [className, setErrorClassName] = useState("");

  const handleInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value); 
  };
  const handleSelect = (event) => {
    const { value } = event.target;
    setSelect(value);   
  };
  const reset = () => {
    setErrorClassName("");
    setInputValue("");
    setSelect("");

  }

  const handleSubmit = (event) => {   
    event.preventDefault();
    const toSumArray = inputValue.split(",").map(i => Number(i));
    const sumTotal = toSumArray.reduce((a,b) => (a + b));
    const average = Math.floor(sumTotal / toSumArray.length);
    const mode = getMode(toSumArray);


    if (!inputValue || !select || Number.isNaN(toSumArray[0])) {
     setResult("Invalid input.");
     setInputValue(inputValue);
     setErrorClassName('error');
    } else if ((inputValue) && (select === "sum")) {
     setResult(sumTotal);
     reset();
    } else if (inputValue && select === "average") { 
      setResult(average);
      reset();
    } else {
      setResult(mode);
      reset();
    } 
  };
  const getMode = (array) => {
    const frequency = {}
    array.forEach((el) => {
      if (frequency[el]) {
        frequency[el] += 1
      } else {
        frequency[el] = 1
      }
    })
    const modeValue = Object.entries(frequency).sort((a, b) => {
      return b[1] - a[1]
    }) 
    return modeValue[0][0]
  }



  return (
    <form onSubmit = { handleSubmit }>
      <input
        onChange={handleInputValue}
        value={inputValue}
        className={className}
        id="values"
        name="values"
        type="text"
      />
      <select
        onChange={handleSelect}
        value={select}
        className = {className}
        id="operation"
        name="operation"
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
