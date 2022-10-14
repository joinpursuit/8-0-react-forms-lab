import { useState } from "react";
import "./Form.css";

function Form({ changeResult }) {
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");

  const getNumbers = (e) => {
    setNumbers(
      e.target.value ? e.target.value.split(",").map((e) => Number(e)) : []
    );
  };

  const calculate = (event) => {
    event.preventDefault();
    if (!numbers.length || operator === "") {
      changeResult("Invalid input.");
    } else {
      let result;
      let modeNum;
      let modeOccurrence = 0;
      if ((numbers.length && operator === "sum") || operator === "average") {
        result = numbers.reduce((acc, el) => {
          return (acc += el);
        }, 0);
        if (operator === "average") {
          result /= numbers.length;
        }
      } else if (operator === "mode" && numbers.length) {
        result = {};
        numbers.forEach((e) => {
          if (result[e]) {
            result[e] += 1;
          } else {
            result[e] = 1;
          }
        });
        for (const k in result) {
          if (modeOccurrence < result[k]) {
            modeOccurrence = result[k];
            modeNum = k;
          }
        }
        result = modeNum;
      }
      if (isNaN(result)) {
        changeResult("Invalid input.");
      } else {
        changeResult(result);
        setOperator("");
        setNumbers("");
      }
    }
  };

  return (
    <form onSubmit={calculate}>
      <input id="values" name="values" type="text" onChange={getNumbers} 
      // value={numbers}
      />
      <select
        id="operation"
        name="operation"
        onChange={(e) => setOperator(e.target.value)}
        value={operator}
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
