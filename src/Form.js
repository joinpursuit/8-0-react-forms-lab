import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [calc, setCalc] = useState({
    values: [],
    operation: "",
    submitted: false,
    result: 0,
  });

  function handleFormChange(e) {
    const newCalc = JSON.parse(JSON.stringify(calc));
    if (e.target.id === "values") {
      newCalc[e.target.id] = e.target.value.split(",");
    } else if (e.target.id === "operation") {
      newCalc[e.target.id] = e.target.value;
    }
    setCalc(newCalc);
    console.log(calc);
  }

  function handleCalculate(e) {
    // setSelectOption(event.target.value);
    // console.log(selectOption);
    e.preventDefault();
    let result = 0;

    // Error handling
    if (calc.values.length === 0) {
      result = "Invalid input.";
    }

    // Calculations

    if (calc.operation === "sum") {
      result = calc.values.reduce((acc, curr) => acc + Number(curr), 0);
    } else if (calc.operation === "average") {
      result =
        calc.values.reduce((acc, curr) => acc + Number(curr), 0) /
        calc.values.length;
    } else if (calc.operation === "mode") {
      const numCount = {};
      let max,
        count = 0;

      calc.values.forEach((val, i) => {
        numCount[val] = numCount[val] + 1 || 1;
        if (count < numCount[val]) {
          max = val;
          count = numCount[val];
        }
        console.log("max:", max);
        console.log("val:", val);
        console.log("count:", count);
      });
      result = max;
    }

    // Error handling for non number input
    result = calc.values.every((value) => {
      return Number(value);
    })
      ? result
      : "Invalid input.";

    console.log(result);

    // Update calc state
    const newCalc = JSON.parse(JSON.stringify(calc));
    newCalc.result = result;
    newCalc.submitted = true;
    setCalc(newCalc);
    return result;
  }

  return (
    <>
      <form>
        <input
          id="values"
          type="text"
          value={calc.values}
          onChange={handleFormChange}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleFormChange}
          value={calc.operation}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={handleCalculate} type="submit">
          Calculate
        </button>
      </form>
      {calc.submitted ? <h2>{calc.result}</h2> : null}
    </>
  );
}

export default Form;
