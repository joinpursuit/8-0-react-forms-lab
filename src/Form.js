import React from "react";
import { operations } from "./operations";
import "./Form.css";
import { useState } from "react";

function Form({ setResult }) {
  const [error, setError] = useState(false);
  const [numbers, setNumbers] = useState("");
  const [operation, setOperation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numbers || !operation) {
      setError(true);
      return setResult("Invalid input.");
    }
    const result = operations[operation](numbers);
    if (isNaN(result)) {
      setError(true);
      // e.target.reset();
      setResult("Invalid input.");
    } else {
      e.target.reset();
      setError(false);
      setResult(result);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        className={error ? "error" : ""}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <select
        id="operation"
        name="operation"
        className={error ? "error" : ""}
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
