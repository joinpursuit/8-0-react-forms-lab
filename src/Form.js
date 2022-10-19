import React, { useState } from "react";
import "./Form.css";
import { operations } from "./operations";

function Form({ setResult }) {
  const [err, setErr] = useState(false);
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values || !operation) {
      setErr(true);
      return setResult("Invalid input.");
    }

    const result = operations[operation](values);
    if (isNaN(result)) {
      setErr(true);
      setResult("Invalid input.");
    } else {
      setValues("");
      setOperation("");
      setErr(false);
      setResult(result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        className={err ? "error" : ""}
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <select
        id="operation"
        name="operation"
        className={err ? "error" : ""}
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
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
