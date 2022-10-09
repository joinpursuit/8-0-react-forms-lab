import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  const operations = {
    sum: function (values) {
      return values.split(",").reduce((a, b) => a + Number(b), 0);
    },
    average: function (values) {
      return this.sum(values) / values.split(",").length;
    },
    mode: function (values) {
      values = values.trim().replaceAll(",", "").replaceAll(" ", "");
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
    console.log(e.target.values.value);
    console.log(e.target.operation.value);

    let values = e.target.values.value;
    const operation = e.target.operation.value;
    if (!values || !operation) {
      return setResult("Invalid input.");
    }
    console.log(operations[operation](values));

    const result = operations[operation](values);
    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="values" name="values" type="text" />
      <select id="operation" name="operation">
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
