import React, { useState } from "react";
import "./Form.css";

function Form({ setResult }) {
  //useState to set values, operation, error
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState("");

  function handleOperations() {
    //the values is inputted as a string so first, split the values at the comma
    let arrVal = values.split(",");
    //use reduce to add all of the values
    let total = arrVal.reduce(
      (previous, current) => previous + Number(current),
      0
    );

    //if the operation chosen is sum, return the total that was previously calculated
    if (operation === "sum") {
      return total;
    }
    //if the operation chosen is average, return the total divided by the array length
    if (operation === "average") {
      return total / arrVal.length;
    }
    //if the operation chosen is mode, create an object, loop thru the array of values, and set each val to be a key in the object. whichever key is seen the most is returned
    if (operation === "mode") {
      let obj = {};
      let seen = 0;

      arrVal.forEach((val) => {
        if (!obj[val]) {
          obj[val] = 1;
        } else {
          obj[val] += 1;
        }
      });

      for (let val in obj) {
        if (obj[val] > seen) {
          seen = obj[val];
          total = val;
        }
      }
    }
    return total;
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    //if the equation evaluates to NaN or there are no values or no operation, set the error to be "error" and the result to be "Invalid input."
    if (isNaN(handleOperations()) || !values || !operation) {
      setError("error");
      setResult("Invalid input.");
    } else {
      //if not, give the result to the equation and reset the form
      setResult(handleOperations());
      setOperation("");
      setValues("");
      setError("");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="values"></label>
      <input
        className={error}
        id="values"
        name="values"
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <br />
      <label htmlFor="operation"></label>
      <select
        className={error}
        id="operation"
        name="operation"
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
