import React from "react";
import "./Form.css";
import { useState } from "react";

function Form({ setResultForm }) {
  const [formData, setFormData] = useState({
    values: "",
    operation: "",
  });

  const [error, setError] = useState(false);

  function handleInputChange(e) {
    const newObjData = { ...formData, [e.target.id]: e.target.value };
    setFormData(newObjData);
  }

  function mode(numArray) {
    return numArray
      .sort(
        (a, b) =>
          numArray.filter((element) => element === a).length -
          numArray.filter((element) => element === b).length
      )
      .pop();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const arrayValues = formData.values.split(",").map(Number);
    let isTrue = true;
    let result;
    for (let num of arrayValues) {
      if (isNaN(Number(num))) {
        isTrue = false;
        break;
      }
    }
    function formClear() {
      setFormData({
        values: "",
        operation: "",
      });
    }

    if (!formData.operation || !formData.values || !isTrue) {
      result = "Invalid input.";
      setResultForm(result);
      setError(true);
    } else {
      setError(false);
      formClear();
      if (formData.operation === "sum") {
        result = arrayValues.reduce((sum, element) => sum + element, 0);
      } else if (formData.operation === "average") {
        result =
          arrayValues.reduce((sum, element) => sum + element, 0) /
          arrayValues.length;
      } else if (formData.operation === "mode") {
        result = mode(arrayValues);
      }
      setResultForm(result);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputChange}
        id="values"
        name="values"
        type="text"
        value={formData.values}
        className={error ? "error" : ""}
      />
      <select
        onChange={handleInputChange}
        id="operation"
        name="operation"
        value={formData.operation}
        className={error ? "error" : ""}
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
