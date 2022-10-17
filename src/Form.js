import { useState } from "react";
import React from "react";
import "./Form.css";

function Form({ setResult }) {
  const [array, setArray] = useState(""); // seperating commas to create a new array from the strings.
  const [input, setInput] = useState(""); // input to choose between calculating the sum, the average, and the mode -- the most frequently occurring number.

  function arrFunc(e) {
    console.log(e.target.value);
    setArray(e.target.value);
  }

  function inputFunc(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function calcFunc(e) {
    e.preventDefault();
    setResult(firstFunction());

    if (!input || !array) {
      setResult("Invalid input.");
    }
  }

  function firstFunction() {
    const newArr = array.split(",");
    let sum = 0;

    if (input === "sum") {
      sum = newArr.reduce((x, y) => Number(x) + Number(y)); // takes new array and turns into number and adds them
    }
    if (input === "average") {
      sum = newArr.reduce((x, y) => Number(x) + Number(y)) / newArr.length;
    }
    if (input === "mode") {
      let emptObj = {};

      /* Ask steven or Raz about this */
      for (let i = 0; i < newArr.length; i++) {
        if (emptObj[newArr[i]]) {
          emptObj[newArr[i]] += 1;
        } else {
          emptObj[newArr[i]] = 1;
        }
      }
      let biggieValue = -1;
      let biggieKey = -1;

      Object.keys(emptObj).forEach((key) => {
        let value = emptObj[key];
        if (value > biggieValue) {
          biggieValue = value;
          biggieKey = key;
        }
      });
      return biggieKey;
    }
    return sum;
  }

  return (
    <form onSubmit={calcFunc}>
      <input
        onChange={arrFunc}
        id="values"
        name="values"
        type="text"
        value={array}
      />
      <select
        onChange={inputFunc}
        id="operation"
        name="operation"
        value={input}
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
