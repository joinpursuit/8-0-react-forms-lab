import React from "react";
import { useState } from "react";
import validateArray from "./helpers/validateArray";
import getMode from "./helpers/getMode";
import "./Form.css";

function Form({ getResult }) {
  const [inputStr, setInputStr] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [operation, setOperation] = useState("");

  function calculateResult(array) {
    if (operation === "sum") {
      const res = array.reduce((acc, el) => acc + el);
      getResult(res);
    } else if (operation === "average") {
      const res = array.reduce((acc, el) => acc + el) / array.length;
      getResult(res);
    } else if (operation === "mode") {
      const res = getMode(array);
      getResult(res);
    }
  }

  function handleInputChange(e) {
    const str = e.target.value;
    setInputStr(str);
    const array = str.split(",").map((el) => parseInt(el));
    setInputArray(array);
  }

  function handleSelectChange(e) {
    setOperation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validateArray(inputArray)
      ? calculateResult(inputArray)
      : getResult("Invalid input.");

    setInputStr("");
    setOperation("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        id="values"
        name="values"
        type="text"
        value={inputStr}
      />
      <select
        onChange={handleSelectChange}
        id="operation"
        name="operation"
        value={operation}
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
