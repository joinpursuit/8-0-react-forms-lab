import React from "react";
import "./Form.css";
import { useState } from "react";

function Form({ setResult }) {
  const [inputValue, handleInputValue] = useState({
    values: "",
    operation: "",
  });

  function onSubmit(e) {
    e.preventDefault();

    if (!inputValue.values||!inputValue.operation){
      setResult("Invalid input.")
    }

    if (inputValue.operation === "sum") {
      setResult(
        inputValue.values
          .split(",")
          .reduce((sum, element) => sum + Number(element), 0)
      );
    }
    let sum = 0;
    let average;
    if (inputValue.operation === "average") {
      for (let number of inputValue.values.split(",")) {
        sum += Number(number);

        average = sum / inputValue.values.split(",").length;
      }
      setResult(average);
    }
    let max=0
    let highestValue
    let valuesObj = {};
    let valueArray = inputValue.values.split(",");
    if (inputValue.operation === "mode") {
      for (let i = 0; i <= valueArray.length - 1; i++) {
        valuesObj[valueArray[i]] = valuesObj[valueArray[i]] + 1 || 1;
      }
      for (let input in valuesObj){
        if (valuesObj[input]>max){
          max=valuesObj[input]
          highestValue=input
        }
      }
      setResult(highestValue)
    }
    
    console.log(valuesObj);
  }
  function handleValuesChange(e) {
    handleInputValue({
      values: e.target.value,
      operation: inputValue.operation,
    });
  }
  function handleOperationsChange(e) {
    handleInputValue({ values: inputValue.values, operation: e.target.value });
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={inputValue.values}
        onChange={handleValuesChange}
      />
      <select
        id="operation"
        name="operation"
        value={inputValue.operation}
        onChange={handleOperationsChange}
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
