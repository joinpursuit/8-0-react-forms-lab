import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [inputStr, setInputStr] = useState("");
  const [operation, setOperation] = useState("");

  function handleInputChange(e) {
    setInputStr(e.target.value);
  }

  function handleSelectChange(e) {
    setOperation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

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
