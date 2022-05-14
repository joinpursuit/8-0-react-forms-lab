import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  // Destructuring the returns of usestate and setting its defaults
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const { setAnswer } = props;

  // creating eventhandler function to target and update values from the input
  const handleInput = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  // creating eventhandler for the select option
  const handleSelect = (event) => {
    // const value = event.target.value;
    const { value } = event.target;
    setSelect(value);
  };

  // eventhandler for the submit(calculate) button
  let answer = 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      setAnswer("Invalid input.");
    }
    if (!select) {
      setAnswer("Invalid input.");
    } else {
      let result = math(input, select);
      setAnswer(result);
    }
  };
  // Doing the maths to connect the values of the input and the selected option
  const math = (input, select) => {
    if (select === "sum") {
      let sum = 0;
      let nums = input.split(",");
      nums.map((num) => {
        sum += num * 1;
      });
      return sum;
    }
    if (select === "average") {
      let sum = 0;
      let nums = input.split(",");
      nums.map((num) => {
        sum += num * 1;
      });
      return sum / nums.length;
    }
    if (select === "mode") {
      let nums = input.split(",");
      function getMode(array) {
        const obj = {};
        array.forEach((number) => {
          if (!obj[number]) {
            obj[number] = 1;
          } else {
            obj[number] += 1;
          }
        });
        let highestValue = 0;
        let highestValueKey = -Infinity;
        for (let key in obj) {
          const value = obj[key];
          if (value > highestValue) {
            highestValue = value;
            highestValueKey = key;
          }
        }
        return Number(highestValueKey);
      }
      return getMode(nums);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="values"
        name="values"
        type="text"
        value={input}
        onChange={handleInput}
      />
      <select
        id="operation"
        name="operation"
        onChange={handleSelect}
        value={select}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default Form;
