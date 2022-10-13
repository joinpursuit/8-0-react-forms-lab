import React, { Component } from "react";
import "./Form.css";
import { useState } from "react";
function Form() {
  const [selectOption, setSelectOption] = useState("");
  const [input, setInput] = useState([]);
  console.log(input);
  //!input where the user can enter comma-separated number values in an array.
  //! Values
  const numArr = (e) => {
    setInput(e.target.value.split(",").map((val) => Number(val)));
  };
  function handleCalc(e) {
    e.preventDefault();
    let result;
    if (selectOption === "sum") {
      result = input.reduce((acc, val) => (acc += val), 0);
    }
    if (selectOption === "average") {
      result = input.reduce((acc, val) => (acc += val), 0);
      result /= input.length;
    } else if (selectOption === "mode") {
      //! Create an empty arr for mode arr
      //!
      // result.sort();
      let mode = input
        .sort(
          (a, b) =>
            input.filter((num) => num === a).length -
            input.filter((num) => num === b).length
        )
        .pop();
      console.log(mode);
    }
  }

  return (
    <form onSubmit={handleCalc} type="submit">
      <input
        onChange={numArr}
        id="values"
        name="values"
        type="text"
        value={input}
      />
      <select
        id="operation"
        value={selectOption}
        name="operation"
        onChange={(event) => setSelectOption(event.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button onChange={handleCalc} type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Form;
