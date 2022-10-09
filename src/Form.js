import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const [err, setErr] = useState(false);
  const operations = {
    sum: function (values) {
      return values.split(",").reduce((a, b) => a + Number(b), 0);
    },
    average: function (values) {
      return this.sum(values) / values.split(",").length;
    },
    mode: function (values) {
      values = values.replaceAll(",", "").replaceAll(" ", "");
      let mode = 0;
      let occurence = 1;
      values.split("").forEach((value) => {
        if (values.split(value).length > occurence) {
          mode = value;
          occurence = values.split(value).length;
        }
      });
      return mode;
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = e.target.values.value.trim();
    const operation = e.target.operation.value;
    if (!values || !operation) {
      setErr(true);
      return setResult("Invalid input.");
    }

    const result = operations[operation](values);
    if (isNaN(result)) {
      setErr(true);
      setResult("Invalid input.");
    } else {
      e.target.reset();
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
      />
      <select id="operation" name="operation" className={err ? "error" : ""}>
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
