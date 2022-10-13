import React from "react";
import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");

  const getNumbers = (e) => {
    setNumbers(e.target.value.split(",").map((e) => Number(e)));
  };

  const calculate = (event) => {
    event.preventDefault();
    let result;
    let modeNum;
    let modeOccurrence = 0;
    if (operator === "sum" || operator === "average") {
      result = numbers.reduce((acc, el) => {
        return (acc += el);
      }, 0);
      if (operator === "average") {
        result /= numbers.length;
      }
    } else if (operator === "mode") {
      result = {};
      numbers.forEach((e) => {
        if (result[e]) {
          result[e] += 1;
        } else {
          result[e] = 1;
        }
      });
      for (const k in result) {
        // console.log(k, result[k])
        if (modeOccurrence < result[k]) {
          modeOccurrence = result[k];
          modeNum = k;
        }
      }
      result = modeNum;
      console.log("modeNum", modeNum);
      console.log("modeOccurrence", modeOccurrence);
    }
    props.changeResult(result);
    console.log("result", result);
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
