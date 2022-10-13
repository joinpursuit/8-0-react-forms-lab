import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");

  const getNumbers = (e) => {
    setNumbers(e.target.value.split(",").map((e) => Number(e)));
  };

  const calculate = (event) => {
    event.preventDefault();
    let result;
    if (operator === "sum" || operator === "average") {
      result = numbers.reduce((acc, el) => {
        return (acc += el);
      }, 0);
      if(operator === "average"){
        result /= numbers.length
      }
    }

    console.log(result);
  };

  return (
    <form onSubmit={calculate}>
      <input id="values" name="values" type="text" onChange={getNumbers} />
      <select
        id="operation"
        name="operation"
        onChange={(e) => setOperator(e.target.value)}
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
