// import React, { Component } from "react";
import "./Form.css";
import { useState } from "react";

function Form({ setResult }) {
  const [selectOption, setSelectOption] = useState("");
  const [input, setInput] = useState([]);
  // console.log(input);
  // console.log(selectOption);

  const numArr = (e) => {
    setInput(e.target.value.split(",").map((val) => Number(val)));
  };
  function handleCalc(e) {
    e.preventDefault();
    setInput("");
    setSelectOption("");
    let result;
    if (selectOption === "sum") {
      result = input.reduce((acc, val) => (acc += val), 0);
    } else if (selectOption === "average") {
      result = input.reduce((acc, val) => (acc += val), 0) / input.length;
    } else if (selectOption === "mode") {
      let mode = input
        .sort(
          (a, b) =>
            input.filter((num) => num === a).length -
            input.filter((num) => num === b).length
        )
        .pop();
      result = mode;
    }
    if (input === isNaN || !selectOption || !input.length) {
      result = "Invalid input.";
    }
    setResult(result);
  }
  // const resetFunc = () => {
  //   setInput("");
  //   selectOption("");
  // };

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
      <button onClick={handleCalc} type="submit">
        Calculate
      </button>
    </form>
  );
}

export default Form;
